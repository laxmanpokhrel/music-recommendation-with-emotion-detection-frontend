/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-lonely-if */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-destructuring */
import { IFormState, IRegisterProps } from '@Schemas/interfaces';
import { convertObject, scrollToComponent } from '@Utils/index';
import { useState, useEffect } from 'react';
import { Schema } from 'yup';

interface IOnChangeInterceptorProps {
  currentValues: Record<string, any>;
  currentTouchedControls: Record<string, boolean>;
  errors: Record<string, any>;
}

interface IRegisterPropType {
  setCustomValue?: (e: any) => void;
  required?: boolean;
}
interface IUseFormProps {
  validationSchema: Schema<any>;
  initialValues: Record<string, any>;
  formName?: string;
  onChangeDataInterceptor?: (props: IOnChangeInterceptorProps) => Record<string, any>;
  service?: (data: any) => any;
  postDataInterceptor?: (data: Record<string, any>) => Record<string, any>;
  postInterceptor?: (data: Record<string, any>) => Promise<boolean>;
  isNestedForm?: boolean;
  // callback: (params: any) => void;
}

interface IYupError {
  message: string;
  path: string;
}

/**
 * This is a TypeScript React hook called useForm that handles form validation, submission, and
 * registration of form fields.
 * @param {IUseFormProps}  - - `formName`: A string representing the name of the form.
 * @returns The function `useForm` is returning an object containing the following properties:
 * `register`, `values`, `handleSubmit`, `touched`, `formState`, and `errors`. These properties are used to bind the
 * form field values to the `useForm` hook.
 */

export default function useForm({
  formName = '',
  initialValues,
  validationSchema,
  service,
  postDataInterceptor,
  postInterceptor,
  onChangeDataInterceptor,
  isNestedForm,
}: // callback,
IUseFormProps) {
  const [values, setValues] = useState<typeof initialValues>(initialValues);
  const [errors, setErrors] = useState<typeof initialValues>({});
  const [touched, setTouched] = useState<typeof initialValues>({});
  const [formState, setFormState] = useState<Partial<IFormState>>({});
  const formFieldIds: Record<string, any>[] = [];

  // debounced Validation
  useEffect(() => {
    const timerInstance = setTimeout(async () => {
      // * while validating the data we have to wrap it using try catch, because when there is validation error it will throw an exception which ahs to be catched and set the error state.
      // ! Note: if you find that the useForm hook is not setting the error values then
      // ! most probably the validation schema you should have error. To make sure please console the error in catch block and debug

      try {
        if (Object.keys(values).length) await validationSchema.validateSync(values, { abortEarly: false });
        if (Object.keys(errors).length) setErrors({});
        setFormState({ formIsValid: true, formHasError: false });
      } catch (err: any) {
        const tempError: Record<string, any> = {};
        err.inner.forEach(({ path, message }: IYupError) => {
          tempError[path] = message;
        });

        setErrors(() => convertObject(tempError));
        setFormState({ formIsValid: false, formHasError: true });
      }
    }, 200);
    return () => clearTimeout(timerInstance);
  }, [values]);

  /**
   * Handles the values changed in the fields.
   * @param fieldName The name of the form field
   * @param value The value of the form field
   */
  const handleChange = async (fieldName: string, value: any) => {
    setValues((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  /**
   * This function handles form submission by checking for errors, setting touched fields, scrolling to
   * the first error, and calling a service function with the form values.
   * @param {React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>} e - The
   * parameter `e` is an event object that can be either a `React.FormEvent<HTMLFormElement>` or a
   * `React.MouseEvent<HTMLButtonElement, MouseEvent>`. It is used to handle form submission or button
   * click events.
   * @returns The function does not return anything explicitly, but it may return early if there are
   * errors and the control is scrolled to the first error. If there are no errors and a service is
   * provided, it will call the service with the form values.
   */
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // *-------------------------------------
    //! DO NOT execute this block of code if the form is nested inside another form
    if (isNestedForm) return;
    // *-------------------------------------

    e.preventDefault();
    const errorKeys = Object.keys(errors);
    const controlId = `-${formName}-form-field-${errorKeys[0]}}`;
    const tempTouched = touched;
    errorKeys.forEach((key) => {
      tempTouched[key] = true;
      return 0;
    });

    setTouched({ ...tempTouched });
    if (errorKeys.length) {
      scrollToComponent(controlId);
      return;
    }

    // if there is post intercepptor and postDataInterceptor we provide the intercepted data to the postInterceptor and rest is handled by postInterceptor
    if (postInterceptor && postDataInterceptor) {
      await postInterceptor(postDataInterceptor(values));
      return;
    }

    // if there is postInterceptor we pass the values to the interceprot and rest is handled by postInterceptor
    if (postInterceptor) {
      postInterceptor(values);
      return;
    }

    //* to cast the values with validation schema
    // const castedObject = validationSchema.cast(values);
    if (postDataInterceptor && service) {
      const interceptedValues = postDataInterceptor(values);
      service(interceptedValues);
      // callback(values);
      return;
    }

    if (service) service(values);
    // callback(values);
  };

  /**
   * The function `register` creates a form field object with various properties and returns it, which
   * can be used to bind the value and state changes of custom form controls to useForm.
   * @param {string} fieldName - A string representing the name of the form field being registered.
   * @param {IRegisterPropType} props - The `props` parameter is an optional object that contains
   * configuration options for the form field being registered. It has a default value of `{ required:
   * false }`. The `required` property specifies whether the form field is required or not.
   * @returns The function `register` returns an object of type `IRegisterProps` which contains various
   * properties related to a form field such as `id`, `name`, `required`, `value`, `bindvalue`,
   * `touched`, `error`, `onFocus`, and `onChange`. These properties are used to bind the form field
   * values to the `useForm` hook.
   */
  const register = (fieldName: string, props: IRegisterPropType = { required: false }): IRegisterProps => {
    //* create a unique form field id so that we can navigate the form field where the error occurs
    const formFieldId = `-${formName}-form-field-${fieldName}}`;
    formFieldIds.push({ [fieldName]: formFieldId });

    return {
      id: formFieldId,
      name: fieldName,
      // required: props.required,

      // ! why `value` and `bindvalue` for same value ?
      // * it is because in some cases `value` can be already used to bind the state change of custom form controls,
      // * due to which we might need another prop so that `register` can bind the value to useForm
      // * if we only used native html input tags we may not need to add additional `bindedValue` prop
      value: values && values[fieldName] ? values[fieldName] : '',
      bindvalue: values && values[fieldName] ? values[fieldName] : '',
      // * -----------

      touched: touched && touched[fieldName] ? touched[fieldName] : false,
      error: errors && errors[fieldName] ? errors[fieldName] : '',
      // error: errors && convertObject(errors)[fieldName] ? convertObject(errors)[fieldName] : '',

      onFocus: (e?: any) => {
        const isEvent = e instanceof Event;
        if (isEvent) e.stopPropagation();
        // setTouched((prev) => ({ ...prev, [fieldName]: true }));
      },

      onChange: (e: any) => {
        const isEvent = e instanceof Event || !!e.target;
        if (isEvent) {
          e.stopPropagation();
          if (onChangeDataInterceptor) {
            const onChangeInterceptedValues: Record<string, any> = onChangeDataInterceptor({
              currentValues: { ...values, [fieldName]: e.target.value },
              errors,
              currentTouchedControls: touched,
            });
            setValues({ ...onChangeInterceptedValues });
          } else {
            handleChange(fieldName, e.target.value);
          }
        } else if (props.setCustomValue) {
          if (onChangeDataInterceptor) {
            const onChangeInterceptedValues: Record<string, any> = onChangeDataInterceptor({
              currentValues: { ...values, [fieldName]: props.setCustomValue(e) },
              errors,
              currentTouchedControls: touched,
            });
            setValues({ ...onChangeInterceptedValues });
          } else {
            handleChange(fieldName, props.setCustomValue(e));
          }
        } else {
          if (onChangeDataInterceptor) {
            const onChangeInterceptedValues: Record<string, any> = onChangeDataInterceptor({
              currentValues: { ...values, [fieldName]: e },
              errors,
              currentTouchedControls: touched,
            });
            setValues({ ...onChangeInterceptedValues });
          } else {
            handleChange(fieldName, e);
          }
        }
        setTouched((prev) => ({ ...prev, [fieldName]: true }));
      },
    };
  };
  return { register, values, handleSubmit, touched, errors, formState, setBindValues: setValues };
}

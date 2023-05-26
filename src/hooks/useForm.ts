import { useState } from 'react';

interface IRegisterPropType {
  required?: boolean;
}
interface IUseFormProps {
  defaultValues?: Record<string, any>;
}

export default function useForm(useFormProps: IUseFormProps = { defaultValues: {} }) {
  const [values, setValues] = useState(useFormProps.defaultValues);

  /**
   * Handles the values changed in the fields.
   * @param fieldName the Name of the form field
   * @param value the value of the form field
   */
  const handleChange = (fieldName: string, value: any) =>
    setValues((prevData) => ({ ...prevData, [fieldName]: value }));

  const register = (fieldName: string, props: IRegisterPropType = { required: false }) => ({
    values,
    onChange: (e: any) => {
      const isEvent = e instanceof Event || !!e.target;
      if (isEvent) handleChange(fieldName, e.target.value);
      else handleChange(fieldName, e);
    },
    required: props.required,
  });
  return { register };
}

## `useForm` Hook Documentation

The `useForm` hook is a TypeScript React hook that handles form state management, validation, and input registration. It provides a convenient way to manage form data, handle form submission, and perform validation using the Yup library.

### Usage

```javascript
import useForm from './useForm';

const MyForm = () => {
  const { register, values, handleSubmit, touched, errors } = useForm({
    formName: 'myForm',
    initialValues: {
      // Initial values for form fields
    },
    validationSchema: MyValidationSchema, // A Yup validation schema
  });

  // Render the form fields and handle form submission
};

export default MyForm;
```

## Validation Schema Example

```
object({
      name: string().required('Name is Required.').max(20, 'Maximum Length Only 20.'),
      name2: number()
        .transform((value, originalValue) => (originalValue.trim() === '' ? null : value))
        .min(10)
        .max(500, 'Maximum Length Only 500.')
        .nullable(),
      name3: number()
        .transform((value, originalValue) => (originalValue.trim() === '' ? null : value))
        .min(10)
        .max(500, 'Maximum Length Only 500.')
        .nullable(),
    })
```

## Props

The `useForm` hook accepts an object with the following props:

- `formName` (optional, default: ''): A string representing the name of the form.
- `initialValues` (optional, default: {}): An object representing the initial values for the form fields.
- `validationSchema` (required): A Yup validation schema used for form field validation.
- `preAction` (optional): A function that will be called before form submission with the form data. It can modify the form data or perform any necessary actions.
- `postAction` (optional): A function that will be called after successful form submission with the form data. It can handle any post-submission actions.

Returned Values

The `useForm` hook returns an object with the following properties:

- `register`: A function used to register form fields. It returns an object with properties for an HTML input element, including an `id`, `name`, `required` flag, `value`, `onFocus`, and `onChange` event handlers.
- `values`: An object containing the current values of the form fields.
- `handleSubmit`: A function that handles form submission. It prevents the default form submission behavior, performs form validation, and calls the `postAction` function if the form is valid.
- `touched`: An object representing the touched state of each form field. It keeps track of whether each field has been touched by the user.
- `errors`: An object containing the validation errors for each form field.

Internal Functions

The `useForm` hook utilizes the following internal functions:

- `handleChange(fieldName: string, value: any)`: This function is called when the value of a form field changes. It updates the `values` state by merging the new value with the existing values.
- `handleValidation()`: This function is responsible for performing debounced validation of the form fields. It is triggered whenever the `values` state changes. It uses the provided `validationSchema` to validate the `values`. If there are validation errors, they are stored in the `errors` state.
- `handleSubmit(e: React.FormEvent<HTMLFormElement>)`: This function handles form submission. It prevents the default form submission behavior, checks for validation errors, and calls the `postAction` function if the form is valid. If there are validation errors, it focuses on the first error field.

How it Works

The hook initializes the `values`, `errors`, and `touched` states using the `useState` hook. The `values` state holds the current values of the form fields, the `errors` state holds the validation errors, and the `touched` state keeps track of the touched state of each field.

The `useEffect` hook is used for debounced validation. It runs whenever the `values` state changes. Inside the effect, a timer is set using `setTimeout` to delay the validation. After the delay, the `validationSchema` is used to validate the `values`. If there are errors, they are stored in the `errors` state. If there were previous errors and the current validation passes, the `errors` state is cleared.

The `register` function is responsible for registering form fields. It generates a unique `id` for each field and returns an object with properties for an HTML input element, including `id`, `name`, `required` flag, `value`, `onFocus`, and `onChange` event handlers. It also adds the field name and its corresponding form field id to the `formFieldIds` array.

The `handleChange` function is called when the value of a form field changes. It updates the `values` state by merging the new value with the existing values.

The `handleSubmit` function is triggered when the form is submitted. It prevents the default form submission behavior, checks for validation errors, and calls the `postAction` function if the form is valid. If there are validation errors, it focuses on the first error field.

The hook returns the `register` function, `values`, `handleSubmit` function, `touched` state, and `errors` state, allowing the consumer to handle form rendering, submission, and validation feedback.

# Register function
. If we pass `setCustomData` function on register then the onChange function will run this function to set the data instead of setting the data directly received as a prop. 

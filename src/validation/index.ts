/* eslint-disable import/prefer-default-export */
import { object, string } from 'yup';

export const LoginFormValidation = object({
  email: string().required('Email is Required.'),
  password: string().required('Password is Required.'),
});

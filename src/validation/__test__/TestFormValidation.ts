/* eslint-disable import/prefer-default-export */
import { object, string, number, array } from 'yup';

// export const TestFormValidation = object({
//   name: string().required('Name is Required.').max(20, 'Maximum Length Only 20.'),
//   name2: number()
//     .transform((value, originalValue) => (originalValue.trim() === '' ? null : value))
//     .min(10)
//     .max(500, 'Maximum Length Only 500.')
//     .nullable(),
//   name3: number()
//     .transform((value, originalValue) => (originalValue.trim() === '' ? null : value))
//     .min(10)
//     .max(500, 'Maximum Length Only 500.')
//     .nullable(),
// });

export const TestFormValidation = object({});

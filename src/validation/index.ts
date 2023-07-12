/* eslint-disable import/prefer-default-export */
import { mixed, object, string } from 'yup';

export const LoginFormValidation = object({
  username: string().required('Email is Required.'),
  password: string().required('Password is Required.'),
});
export const SignUpFormValidation = object({
  email: string().email('Please Provide a valid Email.').required('Email is Required.'),
  password: string().required('Password is Required.'),
  mobileNumber: string().test('len', 'Not a valid Number.', (val) => val?.length === 10),
  firstName: string().required('First Name is Required.'),
  lastName: string().required('Last Name is Required.'),
  dateOfBirth: string().required('Date of Birth is Required.'),
  gender: string().required('Gender must be Selected.'),
});

export const UploadMusiValidation = object({
  title: string().required('Title is Required.'),
  album: string().required('Album is Required.'),
  duration: string().required('Duration is Required.'),
  singer: string().required('Singer is Required.'),
  writer: string().required('Writer is Required.'),
  composer: string().required('composer is Required.'),
  genre: string().required('Genre is Required.'),
  keywords: string().required('Keywords is Required.'),
  music: mixed()
    .test('fileFormat', 'Unsupported Format', (value: any) => {
      if (value) {
        return ['audio/mpeg', 'audio/mp3'].includes(value[0].fileObject.type);
      }
      return true;
    })
    .required('File is required'),
  thumbnail: mixed()
    .test('fileFormat', 'Unsupported Format', (value: any) => {
      if (value) {
        return ['image/jpeg', 'image/png'].includes(value[0].fileObject.type);
      }
      return true;
    })
    .required('File is required'),
});

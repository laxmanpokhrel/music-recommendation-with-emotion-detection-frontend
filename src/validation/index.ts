/* eslint-disable import/prefer-default-export */
import { object, string } from 'yup';

export const LoginFormValidation = object({
  username: string().required('Email is Required.'),
  password: string().required('Password is Required.'),
});

export const UploadMusiVakidation = object({
  title: string().required('Title is Required.'),
  album: string().required('Album is Required.'),
  duration: string().required('Duration is Required.'),
  singer: string().required('Singer is Required.'),
  writer: string().required('Writer is Required.'),
  composer: string().required('composer is Required.'),
  genre: string().required('Genre is Required.'),
  keywords: string().required('Keywords is Required.'),
});

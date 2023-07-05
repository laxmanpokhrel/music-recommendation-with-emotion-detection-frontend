import axios from 'axios';

const token = localStorage.getItem('token');

/* This code is creating an instance of the Axios library with default headers and timeout settings.
The `api` instance can be used to make HTTP requests to an API that accepts JSON data. */
export const api = axios.create({
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

/* `export const authenticatedApi` is creating an instance of the Axios library with default headers
and timeout settings, but with an additional `Authorization` header that includes a token. This
instance can be used to make HTTP requests to an API that requires authentication. The `token`
variable is retrieved from the `localStorage` and is used to authenticate the user. */
export const authenticatedApi = axios.create({
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkNPTlNVTUVSIiwiaWF0IjoxNjg4NDM3NDQzLCJleHAiOjE2ODg1MjM4NDN9.Ms7ucZIMLWe87VI_7KcLGJA4Qz3DUhvCEdS3OcWnU1k`,
  },
});
export const authenticatedFormDataApi = axios.create({
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkNPTlNVTUVSIiwiaWF0IjoxNjg4NDM3NDQzLCJleHAiOjE2ODg1MjM4NDN9.Ms7ucZIMLWe87VI_7KcLGJA4Qz3DUhvCEdS3OcWnU1k`,
  },
});

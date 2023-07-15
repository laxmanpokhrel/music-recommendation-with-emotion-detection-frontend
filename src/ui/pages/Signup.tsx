/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */

import ApiFactory from '@Api/ApiFactory';
import logo from '@Assets/images/logo.svg';
import FormRow from '@Atoms/FormRow';
import Image from '@Atoms/Image';
import useForm from '@Hooks/useForm';
import SubmitButton from '@Molecules/SubmitButton';
import FormControl from '@Templates/FormControl';
import { SignUpFormValidation } from '@Validation/index';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const SignupService = ApiFactory.createQuery({ key: '/login', url: '/auth/user/register' });
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    isError,
    isSuccess,
    mutate: signup,
  } = SignupService.postData({
    mutationParams: {
      onSuccess: (data) => {
        // console.log('🚀 ~ file: Signup.tsx:27 ~ Signup ~ data:', data);
        // navigate('/login');
        navigate('/verify-otp', { state: { email: data?.data?.email } });
        toast('Successfully Signedup. Please Verify your OTP');
      },
    },
  });

  const { register, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    validationSchema: SignUpFormValidation,
    service: signup,
    postDataInterceptor: (interceptorData) => {
      const { firstName, lastName, dateOfBirth, gender, ...rest } = interceptorData;
      return {
        ...rest,
        detail: {
          firstName,
          lastName,
          dateOfBirth: new Date(dateOfBirth).toISOString(),
          gender,
        },
      };
    },
  });
  return (
    <main className="w-full h-full flex flex-col items-center justify-center bg-gray-50 sm:px-4 pt-8">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center flex justify-center items-center flex-col">
          <Image src={logo} className="h-[1.5rem]" onClick={() => navigate('/')} />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create a New Account</h3>
            <p className="">
              Already Have an Account{' '}
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Login
              </a>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4  space-y-8 sm:p-6 sm:rounded-lg">
          {/* <div className="w-full"></div> */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormControl required label="Email" controlType="input" type="email" {...register('email')} />
            <FormControl required label="Password" controlType="input" type="password" {...register('password')} />
            <FormControl required label="Mobile Number" controlType="input" type="text" {...register('mobileNumber')} />
            <FormRow>
              <FormControl required label="FirstName" controlType="input" type="text" {...register('firstName')} />
              <FormControl required label="LastName" controlType="input" type="text" {...register('lastName')} />
            </FormRow>
            <FormControl required label="Date of Birth" controlType="input" type="text" {...register('dateOfBirth')} />
            <FormControl
              required
              label="Gender"
              controlType="dropDown"
              options={[
                { id: 1, label: 'Male', value: 'MALE' },
                { id: 2, label: 'Female', value: 'FEMALE' },
                { id: 3, label: 'Others', value: 'OTHERS' },
              ]}
              choose="value"
              {...register('gender')}
            />
            <SubmitButton isError={isError} isSubmitting={isLoading} isSuccess={isSuccess} error={error?.message}>
              Sign Up
            </SubmitButton>
          </form>
        </div>
        <div className="text-center">
          <a href="/forget-password" className="hover:text-indigo-600">
            Forgot password?
          </a>
        </div>
      </div>
    </main>
  );
}

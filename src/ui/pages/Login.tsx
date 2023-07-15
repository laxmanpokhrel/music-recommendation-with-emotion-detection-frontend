/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */

import ApiFactory from '@Api/ApiFactory';
import logo from '@Assets/images/logo.svg';
import Image from '@Atoms/Image';
import useForm from '@Hooks/useForm';
import SubmitButton from '@Molecules/SubmitButton';
import FormControl from '@Templates/FormControl';
import { LoginFormValidation } from '@Validation/index';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUser from '../../hooks/useUser';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const LoginService = ApiFactory.createQuery({ key: '/login', url: '/auth/user/login' });
  const { isLoading, error, isError, isSuccess, mutate } = LoginService.postData({
    mutationParams: {
      onSuccess: (data) => {
        if (data && data?.data?.isOTPVerified) {
          navigate('/');
          toast('Successfully logged in.');
          setUser({
            data: data?.data,
            tokens: data?.tokens,
          });
          window.location.reload();
        } else {
          toast.info('Please verify your email address.');
          navigate('/verify-otp', { state: { email: data?.data?.email } });
        }
      },
    },
  });
  const { register, formState, handleSubmit } = useForm({
    initialValues: { username: '', password: '' },
    validationSchema: LoginFormValidation,
    service: mutate,
  });

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center flex justify-center items-center flex-col">
          <Image src={logo} className="h-[1.5rem]" onClick={() => navigate('/')} />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
            <p className="">
              Don&apos;t have an account?
              <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4  space-y-8 sm:p-6 sm:rounded-lg">
          <div className="w-full"></div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <FormControl required label="Email" controlType="input" type="email" {...register('username')} />
            </div>
            <div>
              <FormControl required label="Password" controlType="input" type="password" {...register('password')} />
            </div>
            <SubmitButton
              isError={isError}
              isSubmitting={isLoading}
              isSuccess={isSuccess}
              type="submit"
              variant="primary"
              error={error?.message}
              className="w-full"
            >
              Login
            </SubmitButton>
          </form>
        </div>
        {/* <div className="text-center">
          <a href="#" className="hover:text-indigo-600">
            Forgot password?
          </a>
        </div> */}
      </div>
    </main>
  );
}

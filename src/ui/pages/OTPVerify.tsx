/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */

import logo from '@Assets/images/logo.svg';
import Image from '@Atoms/Image';
import { Group, PinInput } from '@mantine/core';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../api/config';
import useUser from '../../hooks/useUser';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function OTPVerify() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [otp, setOTP] = useState('');
  const { user, setUser } = useUser();
  const { mutate, error, data } = useMutation({
    mutationFn: (payload) => {
      return api.post(`${process.env.API_URL}/auth/user/verify-otp`, payload);
    },
  });
  if (error) {
    toast.error(error?.response?.data?.message);
  }

  if (data) {
    toast.success("Successfully verified. Let's login");
    navigate('/login');
  }

  const formSubmitHandler = (value?: string) => {
    if (value) setOTP(value);
    else {
      mutate({
        email: state?.email,
        otp: +otp,
      });
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center flex justify-center items-center flex-col">
          <Image src={logo} className="h-[1.5rem]" onClick={() => navigate('/')} />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl"> Verify Your OTP</h3>
          </div>
        </div>
        <div className="bg-white shadow p-4  space-y-8 sm:p-6 sm:rounded-lg">
          <div className="w-full"></div>
          <form className="space-y-5">
            <Group position="center">
              <PinInput length={5} type={'number'} onComplete={(value) => formSubmitHandler(value)} />
            </Group>
            <div className="flex justify-center">
              <button type="button" onClick={(e) => formSubmitHandler()} color="black" className="text-center">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

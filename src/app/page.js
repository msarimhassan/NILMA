'use client';

import React, { useState } from 'react';
import { Button, Input, Text3Xl, TextLg } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// import { useAuth } from '@/hooks';
// import { LoginSchema } from '@/validationSchemas';

import { useFormik } from 'formik';

const initialValues = {
  email: '',
  password: '',
};
const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (crdentials) => {
    console.log({ crdentials });
    router.push('/dashboard');
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    // validationSchema: LoginSchema,
    onSubmit,
  });

  return (
    <div className='flex h-screen'>
      {/* Form */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8'>
        {/* <div className='max-w-md w-full'> */}
        <Text3Xl text='Login to your account' classes='font-semibold' />
        <TextLg text='Please enter your details.' color='text-subheading' />
        <div className='mt-4 w-full'>
          <Input
            placeholder='Enter your email'
            value={values.email}
            error={errors.email && touched.email}
            errorText={errors.email}
            type='email'
            name='email'
            label='Email'
            onChange={handleChange}
            onBlur={handleBlur}
            textColor='text-black'
            borderRadius='rounded-none'
            labelColor='text-subheading'
            focusColor='focus:border-black'
            borderColor='border-primary'
            padding='p-3'
          />
          <div className='mt-4'>
            <Input
              type='password'
              placeholder='••••••••'
              name='password'
              label='Password'
              error={errors.password && touched.password}
              errorText={errors.password}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              iconProps={{
                className: 'text-subheading',
                iconWidth: 20,
              }}
              textColor='text-black'
              borderRadius='rounded-none'
              labelColor='text-subheading'
              focusColor='focus:border-black'
              borderColor='border-primary'
              padding='p-3'
            />
          </div>
          <div className='mt-5'>
            <Button
              onClick={handleSubmit}
              isLoading={isLoading}
              text='Sign In'
              isDisabled={isLoading}
              width='w-full'
            />
          </div>
        </div>
      </div>

      {/* Image */}
      <div className='hidden md:block md:w-1/2'>
        <Image
          width={100}
          height={100}
          src='https://via.placeholder.com/600x600'
          alt='Login'
          className='object-cover w-full h-screen'
        />
      </div>
    </div>
  );
};

export default LoginForm;

'use client';

import { useFormik } from 'formik';
import { Routes } from '@/common';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphones,
  faTag,
  faPersonMilitaryPointing,
  faCertificate,
  faGraduationCap,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';

import { Button, Input } from '@/components';
import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className='bg-black p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-white text-xl font-bold'>Logo</div>
        <div>
          <Link href={Routes.login}>
            <div className={` text-white`}>Already have an account?</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const RegisterForm = ({ title, setStep }) => {
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    confirm_email: '',
    password: '',
    confirm_password: '',
  };

  const onSubmit = async () => {};

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    // validationSchema: LoginSchema,
    onSubmit,
  });

  return (
    <div>
      <h1 className='text-4xl font-bold text-center'>{title}</h1>
      <div className='gap-4 mt-5 grid grid-cols-1 md:grid-cols-2'>
        <Input
          placeholder='Enter first name'
          value={values.first_name}
          error={errors.first_name && touched.first_name}
          errorText={errors.first_name}
          type='text'
          name='first_name'
          label='First Name'
          onChange={handleChange}
          onBlur={handleBlur}
          textColor='text-black'
          borderRadius='rounded-none'
          labelColor='text-subheading'
          focusColor='focus:border-black'
          borderColor='border-primary'
          padding='p-3'
        />
        <Input
          placeholder='Enter last name'
          value={values.last_name}
          error={errors.last_name && touched.last_name}
          errorText={errors.last_name}
          type='text'
          name='last_name'
          label='Last Name'
          onChange={handleChange}
          onBlur={handleBlur}
          textColor='text-black'
          borderRadius='rounded-none'
          labelColor='text-subheading'
          focusColor='focus:border-black'
          borderColor='border-primary'
          padding='p-3'
        />

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
        <Input
          placeholder='Confirm email'
          value={values.confirm_email}
          error={errors.confirm_email && touched.confirm_email}
          errorText={errors.confirm_email}
          type='email'
          name='email'
          label='Confirm Email'
          onChange={handleChange}
          onBlur={handleBlur}
          textColor='text-black'
          borderRadius='rounded-none'
          labelColor='text-subheading'
          focusColor='focus:border-black'
          borderColor='border-primary'
          padding='p-3'
        />
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
        <Input
          type='password'
          placeholder='••••••••'
          name='confirm_password'
          label='Confirm Password'
          error={errors.confirm_password && touched.confirm_password}
          errorText={errors.confirm_password}
          value={values.confirm_password}
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
      <div className='flex items-center justify-center mt-5'>
        <Button
          text={'Back'}
          isRounded
          isBordered
          colorText='black'
          classes='mr-1 bg-white text-black'
          onClick={() => setStep((prev) => prev - 1)}
        />
        <Button text={'Signup'} isRounded classes='ml-1' />
      </div>
    </div>
  );
};

const Signup = () => {
  const [mode, setMode] = useState('');
  const [step, setStep] = useState(1);

  const [iconAthlete, setIconAthlete] = useState('');

  const data = [
    {
      value: 'icon-athlete',
      icon: faPersonMilitaryPointing,
      title: 'Icon Athlete',
      description: 'For athletes wanting to sign endorsement deals.',
    },
    {
      value: 'icon-agent',
      icon: faHeadphones,
      title: 'Athelete Agent',
      description: 'For agents that manage multiple athletes.',
    },
    {
      value: 'icon-brand',
      icon: faTag,
      title: 'Brand + Marketing',
      description: 'For brands and agencies representing brand clients.',
    },
  ];

  const iconAthletes = [
    {
      value: 'professional',
      icon: faCertificate,
      title: 'Professional',
      description: 'Currently or previously  a part of professinal sports program.',
    },
    {
      value: 'collegiate',
      icon: faGraduationCap,
      title: 'Collegiate',
      description: 'Athelete that are currently enrolled in an educational institution.',
    },
    {
      value: 'high-school',
      icon: faSchool,
      title: 'High School',
      description: 'Atheltes that are currently attending high school.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow flex items-center justify-center'>
        {/* Your centered content goes here */}
        {step == 1 ? (
          <div className='text-center'>
            <h1 className='text-4xl font-bold'>Signup</h1>
            <p className='mt-4 text-lg'>Which role best describes you</p>

            <div className='mt-5 grid grid-cols-1 gap-4  md:grid-cols-3'>
              {data.map(({ icon, description, title, value }, index) => (
                <div
                  onClick={() => setMode(value)}
                  key={index}
                  className={`${
                    value == mode ? 'bg-black text-white' : ''
                  } cursor-pointer rounded border flex items-center justify-center flex-col h-48 w-72 hover:border-2 border-black`}
                >
                  <FontAwesomeIcon icon={icon} className='text-center' />
                  <p className='mt-2 font-bold uppercase'> {title}</p>
                  <p className='mt-2 px-2'>{description}</p>
                </div>
              ))}
            </div>

            <div className='flex justify-center mt-2'>
              <Button
                onClick={() => setStep((prev) => prev + 1)}
                isRounded
                isDisabled={!mode}
                text={'Next'}
              />
            </div>
          </div>
        ) : null}

        {/* Icon Athelete */}

        {step == 2 && mode == 'icon-athlete' ? (
          <div className='text-center'>
            <h1 className='text-4xl font-bold'>Icon level</h1>
            <p className='mt-4 text-lg'>Are you a professional, collegiate, high school athlete?</p>

            <div className='mt-5 grid grid-cols-1 gap-4  md:grid-cols-3'>
              {iconAthletes.map(({ icon, description, title, value }, index) => (
                <div
                  onClick={() => setIconAthlete(value)}
                  key={index}
                  className={`${
                    value == iconAthlete ? 'bg-black text-white' : ''
                  } cursor-pointer rounded border flex items-center justify-center flex-col h-48 w-72 hover:border-2 border-black`}
                >
                  <FontAwesomeIcon icon={icon} className='text-center' />
                  <p className='mt-2 font-bold uppercase'> {title}</p>
                  <p className='mt-2 px-2'>{description}</p>
                </div>
              ))}
            </div>

            <div className='flex justify-center mt-2'>
              {step > 1 ? (
                <Button
                  onClick={() => setStep((prev) => prev - 1)}
                  text={'Back'}
                  isBordered
                  isRounded
                  classes='bg-white border-black mr-2'
                  colorText='black'
                />
              ) : null}
              <Button
                onClick={() => setStep((prev) => prev + 1)}
                isRounded
                isDisabled={!iconAthlete}
                text={'Next'}
              />
            </div>
          </div>
        ) : null}

        {/* Athlete Agent */}

        {step == 2 && mode == 'icon-agent' ? (
          <RegisterForm setStep={setStep} title={'Athlete Agent'} />
        ) : null}

        {/* Brand+ Marketing */}

        {step == 2 && mode == 'icon-brand' ? (
          <RegisterForm setStep={setStep} title={'Brand'} />
        ) : null}

        {step == 3 && iconAthlete == 'professional' ? (
          <RegisterForm title={'Professional Athlete'} setStep={setStep} />
        ) : null}

        {step == 3 && iconAthlete == 'collegiate' ? (
          <RegisterForm title={'College Athlete'} setStep={setStep} />
        ) : null}

        {step == 3 && iconAthlete == 'high-school' ? (
          <RegisterForm title={'High School Athlete'} setStep={setStep} />
        ) : null}
      </div>
    </div>
  );
};
export default Signup;

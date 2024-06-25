'use client';

import React, { useState } from 'react';
import { TextError, TextMd } from './text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Input = ({
  id,
  type,
  name,
  placeholder,
  onChange,
  label,
  value,
  onBlur,
  isRequired = false,
  isDisabled = false,
  reference,
  maxLength,
  max,
  background = 'bg-inherit',
  error = false,
  errorText = '',
  icon = null,
  iconProps = null,
  borderRadius = 'rounded-lg',
  focusColor = 'focus:border-white',
  textColor = 'text-white',
  borderColor = 'border-solid-gray',
  labelColor = 'text-heading',
  padding = 'px-4 py-9',
  accept = '',
}) => {
  // States
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const checkType = type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type;

  if (!icon) {
    if (type === 'password' && !isPasswordVisible) {
      icon = faEye;
    }
    if (type === 'password' && isPasswordVisible) {
      icon = faEyeSlash;
    }
  }

  return (
    <div className={`w-full ${type === 'hidden' || type === 'file' ? 'hidden' : ''}`}>
      {label && (
        <label htmlFor={id} className={`block mb-2 text-[18px] font-medium ${labelColor}`}>
          {label} {isRequired && <span className='text-red-500'>*</span>}
        </label>
      )}
      <div className='flex w-full items-center relative'>
        <input
          ref={reference}
          type={checkType}
          max={max}
          name={name}
          onBlur={onBlur}
          id={id}
          accept={accept}
          required={isRequired}
          disabled={isDisabled}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${textColor} border ${borderColor} focus:ring-0 ${focusColor}  outline-0 transition-all duration-300 h-12 ${padding} w-full disabled:opacity-50 ${background} ${borderRadius} placeholder:text-placeholder`}
        />
        {!icon ? null : (
          <FontAwesomeIcon
            {...iconProps}
            onClick={type === 'password' ? () => setIsPasswordVisible(!isPasswordVisible) : null}
            icon={icon}
            className={`${iconProps?.className || ''} absolute right-3 cursor-pointer`}
          />
        )}
      </div>
      {error && <TextError classes='mt-2' text={errorText} />}
    </div>
  );
};

export default Input;

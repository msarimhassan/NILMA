import React from 'react';
import { SpinnerSmall } from './spinners';
import { TextMd } from './text';


const Button = ({
  width = 'w-28',
  height = 'h-12',
  padding = 'p-3',
  text,
  color = 'bg-black',
  colorText = 'text-white',
  onClick = null,
  classes = '',
  isBordered = false,
  isRounded = false,
  borderRadius = '',
  isDisabled = false,
  isLoading = false,
  type = 'button',w
  // icon = "FaCheckCircle",
}) => {
  return (
    <button
      type={type}
      onClick={onClick || null}
      className={`${width} ${height} ${padding} ${color} ${classes} ${isBordered ? 'border' : ''} ${
        isRounded ? 'rounded-full' : ''
      } disabled:opacity-50 flex gap-2 font-medium items-center justify-center ${borderRadius}`}
      disabled={isDisabled}
    >
      {isLoading ? <SpinnerSmall /> : <TextMd text={text} color={colorText} />}
    </button>
  );
};

export default Button;

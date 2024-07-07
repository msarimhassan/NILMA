import React from 'react';
import { SpinnerSmall } from './spinners';
import { TextMd } from './text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  type = 'button',
  icon = null,
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
      {isLoading ? (
        <SpinnerSmall />
      ) : (
        <div className='flex items-center'>
          {icon ? <FontAwesomeIcon icon={icon} className='w-4 text-white mr-1' /> : null}

          <TextMd text={text} color={colorText} />
        </div>
      )}
    </button>
  );
};

export default Button;

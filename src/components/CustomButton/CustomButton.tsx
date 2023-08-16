import React, { FC } from 'react';
import { ICustomButton } from './CustomButton.types';
import { ImDownload3 } from 'react-icons/im';

export const CustomButton: FC<ICustomButton> = ({
  title,
  onClick,
  type,
  isFilled = false,
  isGray = false,
}) => {
  const checkStyle = (filled: boolean, gray: boolean) => {
    if (filled) {
      return '-filled';
    } else if (gray) {
      return '-gray';
    }
    return '';
  };

  return (
    <button
      className={`button${checkStyle(isFilled, isGray)}`}
      onClick={onClick}
      type={type}
    >
      {title}
      {isGray && <ImDownload3 style={{ marginLeft: '10px' }} />}
    </button>
  );
};

import React, { FC } from 'react';
import { ICustomButton } from './CustomButton.style';
import { ImDownload3 } from 'react-icons/all';

export const CustomButton: FC<ICustomButton> = ({ title, isFilled = false, isGray = false }) => {
  const checkStyle = (filled: boolean, gray: boolean) => {
    if (filled) {
      return '-filled';
    } else if (gray) {
      return '-gray';
    }
    return '';
  };

  return (
    <button className={`button${checkStyle(isFilled, isGray)}`}>
      {title}
      {
        isGray && <ImDownload3 style={{ marginLeft: '10px' }}/>
      }
    </button>
  );
};

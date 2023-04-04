import React, { FC } from 'react';
import { ICustomButton } from './CustomButton.style';

export const CustomButton: FC<ICustomButton> = ({ title, isFilled }) => {
  return (
    <button className={`button${isFilled ? '-filled' : ''}`}>{title}</button>
  );
};

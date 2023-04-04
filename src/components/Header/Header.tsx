import React, { FC } from 'react';
import { IHeader } from './Header.style';

export const Header: FC<IHeader> = ({ subtitle, title }) => {
  return (
    <div className="header">
      <h2 className="header-title">{title}</h2>
      <h3 className="header-subtitle">
        {subtitle} <span className="header-line" />
      </h3>
    </div>
  );
};

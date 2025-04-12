import React, { FC } from 'react';
import { IHeader } from './Header.types';
import { useTranslation } from 'react-i18next';

export const Header: FC<IHeader> = ({ subtitle, title }) => {
  const { t } = useTranslation();
  return (
    <div className="header">
      <h2 className="header-title">{t(title)}</h2>
      <h3 className="header-subtitle">
        {t(subtitle)} <span className="header-line" />
      </h3>
    </div>
  );
};

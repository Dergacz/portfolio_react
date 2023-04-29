import React, { FC } from 'react';
import { IResumeItem } from './ResumeItem.style';
import { useTranslation } from 'react-i18next';

export const ResumeItem: FC<IResumeItem> = ({
  subtitle,
  years,
  description,
  title,
}) => {
  const { t } = useTranslation();
  return (
    <div className="resume-item">
      <p className="resume-item-years">{years}</p>
      <h5 className="resume-item-title">{t(title)}</h5>
      <p className="resume-item-subtitle">{t(subtitle)}</p>
      <p className="resume-item-description">{t(description)}</p>
    </div>
  );
};

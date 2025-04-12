import React, { FC } from 'react';
import { IResumeItem } from './ResumeItem.types';
import { useTranslation } from 'react-i18next';
import { CustomButton } from '../CustomButton/CustomButton';

export const ResumeItem: FC<IResumeItem> = ({ subtitle, years, description, title, link }) => {
  const { t } = useTranslation();
  return (
    <div className="resume-item">
      <p className="resume-item-years">{years}</p>
      <h5 className="resume-item-title">{t(title)}</h5>
      <p className="resume-item-subtitle">{t(subtitle)}</p>
      <p className="resume-item-description">{t(description)}</p>
      {link && (
        <div className="resume-item-link">
          <a href={link} target="_blank" rel="noreferrer">
            <CustomButton title={t('resume.view_certificate')} isGray />
          </a>
        </div>
      )}
    </div>
  );
};

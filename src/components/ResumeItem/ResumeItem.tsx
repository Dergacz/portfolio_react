import React, { FC } from 'react';
import { IResumeItem } from './ResumeItem.style';

export const ResumeItem: FC<IResumeItem> = ({
  subtitle,
  years,
  description,
  title,
}) => {
  return (
    <div className="resume-item">
      <p className="resume-item-years">{years}</p>
      <h5 className="resume-item-title">{title}</h5>
      <p className="resume-item-subtitle">{subtitle}</p>
      <p className="resume-item-description">{description}</p>
    </div>
  );
};

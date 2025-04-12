import React from 'react';
import { Header } from '../../components/Header/Header';
import { ResumeItem } from '../../components/ResumeItem/ResumeItem';
import * as constants from '../../constants/constants';
import LinearProgressWithProgress from '@mui/material/LinearProgress';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { onDownloadCV } from '../../utils/downloadCV';
import { Zoom } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { Collapse } from '../../components/Collapse/Collapse';

export const Resume = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <div className="container">
        <Zoom cascade triggerOnce>
          <div className="resume" id="resume">
            <Header title="resume.header.title" subtitle="resume.header.subtitle" />
            <div className="resume-items-wrapper">
              <div className="resume-items">
                <h4 className="resume-items-title">{t('resume.education.title')}</h4>
                {constants.EDUCATION_ITEMS.map((item) => {
                  return (
                    <ResumeItem
                      key={item.key}
                      years={item.years}
                      title={`resume.education.${item.key}.title`}
                      subtitle={`resume.education.${item.key}.subtitle`}
                      description={`resume.education.${item.key}.description`}
                    />
                  );
                })}
                <Collapse title={t('resume.my_certificates')}>
                  {constants.CERTIFICATES_ITEMS.map((item) => {
                    return (
                      <ResumeItem
                        key={item.key}
                        years={item.years}
                        title={`resume.education.${item.key}.title`}
                        subtitle={`resume.education.${item.key}.subtitle`}
                        description={`resume.education.${item.key}.description`}
                        link={item.link}
                      />
                    );
                  })}
                </Collapse>
              </div>
              <div className="resume-items">
                <h4 className="resume-items-title">{t('resume.work.title')}</h4>
                {constants.WORK_ITEMS.map((item) => {
                  return (
                    <ResumeItem
                      years={item.years}
                      key={item.key}
                      title={`resume.work.${item.key}.title`}
                      subtitle={`resume.work.${item.key}.subtitle`}
                      description={`resume.work.${item.key}.description`}
                    />
                  );
                })}
                <Collapse title={t('resume.my_additional_activities')}>
                  {constants.ADDITIONAL_ACTIVITIES_ITEMS.map((item) => {
                    return (
                      <ResumeItem
                        key={item.key}
                        years={item.years}
                        title={`resume.additional_activities.${item.key}.title`}
                        subtitle={`resume.additional_activities.${item.key}.subtitle`}
                        description={`resume.additional_activities.${item.key}.description`}
                      />
                    );
                  })}
                </Collapse>
              </div>
            </div>
            <h4 className="resume-items-title">{t('resume.skills.title')}</h4>
            <div className="resume-progress">
              {constants.PROGRESS_ITEMS.map((item) => {
                return (
                  <div className="resume-progress-wrapper" key={item.title}>
                    <div className="resume-progress-title">
                      <p>{t(`resume.skills.item.${item.title}`)}</p>
                      <p>{item.value}%</p>
                    </div>
                    <LinearProgressWithProgress
                      variant="determinate"
                      value={item.value}
                      sx={{
                        height: '0.5rem',
                        backgroundColor: '#111418',
                        borderRadius: '5px',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#20c997',
                        },
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="resume-button">
              <CustomButton
                title={t('resume.download_btn')}
                onClick={onDownloadCV}
                isGray
                isDownloadIcon
              />
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

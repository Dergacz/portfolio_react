import React from 'react';
import { Header } from '../../components/Header/Header';
import { ResumeItem } from '../../components/ResumeItem/ResumeItem';
import * as constants from '../../constants/constants';
import LinearProgressWithProgress from '@mui/material/LinearProgress';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { onDownloadCV } from '../../utils/downloadCV';

export const Resume = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="resume" id="resume">
          <Header title="summary" subtitle="resume" />
          <div className="resume-items-wrapper">
            <div className="resume-items">
              <h4 className="resume-items-title">My Education</h4>
              {constants.RESUME_ITEMS.map((item) => {
                return (
                  <ResumeItem
                    years={item.years}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                  />
                );
              })}
            </div>
            <div className="resume-items">
              <h4 className="resume-items-title">My Experience</h4>
              {constants.RESUME_ITEMS.map((item) => {
                return (
                  <ResumeItem
                    years={item.years}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
          <h4 className="resume-items-title">My Skills</h4>
          <div className="resume-progress">
            {constants.PROGRESS_ITEMS.map((item) => {
              return (
                <div className="resume-progress-wrapper" key={item.title}>
                  <div className="resume-progress-title">
                    <p>{item.title}</p>
                    <p>{item.value}%</p>
                  </div>
                  <LinearProgressWithProgress
                    variant="determinate"
                    value={item.value}
                    sx={{
                      height: '0.5rem',
                      backgroundColor: '#111418',
                      borderRadius: '5px',
                      '.css-5xe99f-MuiLinearProgress-bar1': {
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
              title={'Download CV'}
              onClick={onDownloadCV}
              isFilled={false}
              isGray={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

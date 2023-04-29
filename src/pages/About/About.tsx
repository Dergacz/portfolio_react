import React from 'react';
import { Header } from '../../components/Header/Header';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { onDownloadCV } from '../../utils/downloadCV';
import { Zoom } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <div className="container">
        <Zoom cascade triggerOnce>
          <div className="about" id="about">
            <Header
              title="about.header.title"
              subtitle="about.header.subtitle"
            />
            <div className="about-description">
              <div className="about-text">
                <h4 className="about-title">
                  {t('about.iam')} <span className="about-name">Stanislau Dziarhach,</span> {t('about.title')}
                </h4>
                <p>
                  {t('about.description_1')}
                </p>
                <p>
                  {t('about.description_2')}
                </p>
              </div>
              <div about="about-info">
                <ul className="about-info-list">
                  <li className="about-info-item">
                    <span className="about-info-item-title">{t('about.info.name')}:</span>
                    &#32;
                    <span>Stanislau Dziarhach</span>
                  </li>
                  <li className="about-info-item">
                    <span className="about-info-item-title">Email:</span>
                    &#32;
                    <a
                      className="about-info-item-link"
                      href="mailto:stanislav.dziarhach@gmail.com"
                    >
                      stanislav.dziarhach@gmail.com
                    </a>
                  </li>
                  <li className="about-info-item">
                    <span className="about-info-item-title">{t('about.info.age')}:</span>
                    &#32;
                    <span>27</span>
                  </li>
                  <li className="about-info-item">
                    <span className="about-info-item-title">{t('about.info.from')}:</span>
                    &#32;
                    <span>{t('about.info.city')}</span>
                  </li>
                </ul>
                <CustomButton
                  onClick={onDownloadCV}
                  title={t('about.download_btn')}
                  isFilled
                  isGray={false}
                />
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

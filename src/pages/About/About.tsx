import React from 'react';
import { Header } from '../../components/Header/Header';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { onDownloadCV } from '../../utils/downloadCV';
import { Zoom } from 'react-awesome-reveal';

export const About = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Zoom cascade triggerOnce>
          <div className="about" id="about">
            <Header title="about me" subtitle="know me more" />
            <div className="about-description">
              <div className="about-text">
                <h4 className="about-title">
                  I'm <span className="about-name">Stanislau Dziarhach,</span> a
                  Frontend Developer
                </h4>
                <p>
                  I am an experienced Frontend developer with 2.5 years of work experience. I have skills in HTML, CSS, JavaScript, and frameworks such as React, as well as proficiency in using Git. I am fluent in several languages, and I self improve every day.
                </p>
                <p>
                  I aim to help you bring all your ideas to life. I believe my professional skills and experience can make a valuable contribution to achieving business goals.
                  I use new IT tools in my projects and if any difficulty arises, I overcome it easily. Always focused on results - that's my motto.
                </p>
              </div>
              <div about="about-info">
                <ul className="about-info-list">
                  <li className="about-info-item">
                    <span className="about-info-item-title">Name:</span>
                    &#32;
                    <span>Stanislau Dziarhach</span>
                  </li>
                  <li className="about-info-item">
                    <span className="about-info-item-title">Email:</span>
                    &#32;
                    <a className="about-info-item-link" href="mailto:stanislav.dziarhach@gmail.com">
                      stanislav.dziarhach@gmail.com
                    </a>
                  </li>
                  <li className="about-info-item">
                    <span className="about-info-item-title">Age:</span>
                    &#32;
                    <span>27</span>
                  </li>
                  <li className="about-info-item">
                    <span className="about-info-item-title">From:</span>
                    &#32;
                    <span>Gdansk, Poland</span>
                  </li>
                </ul>
                <CustomButton
                  onClick={onDownloadCV}
                  title="Dovnload CV"
                  isFilled={true}
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

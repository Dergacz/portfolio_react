import React from 'react';
import { Header } from '../../components/Header/Header';
import { CustomButton } from '../../components/CustomButton/CustomButton';

export const About = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="about">
          <Header title="about me" subtitle="know me more" />
          <div className="about-description">
            <div className="about-text">
              <h4 className="about-title">
                I'm <span className="about-name">Stanislau Dziarhach,</span> a
                Frontend Developer
              </h4>
              <p>
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while working
                with our dedicated team. when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <p>
                Delivering work within time and budget which meets client’s
                requirements is our moto. Lorem Ipsum has been the industry's
                standard dummy text ever when an unknown printer took a galley.
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
                  <a className="about-info-item-link" href="#">sats96dergach@gmail.com</a>
                </li>
                <li className="about-info-item">
                  <span className="about-info-item-title">Age:</span>
                  &#32;
                  <span>26</span>
                </li>
                <li className="about-info-item">
                  <span className="about-info-item-title">From:</span>
                  &#32;
                  <span>Gdansk, Poland</span>
                </li>
              </ul>
              <CustomButton title="Dovnload CV" isFilled={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

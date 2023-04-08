import React from 'react';
import { Header } from '../../components/Header/Header';
import {
  AiFillMail,
  AiFillPhone,
} from 'react-icons/all';
import { IconContext } from 'react-icons';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import * as constants from '../../constants/constants';

export const Contact = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="contact">
          <Header title="contact" subtitle="get in touch" />
          <div className="contact-wrapper">
            <div className="contact-info">
              <h5>contact</h5>
              <IconContext.Provider value={{ color: '#20c997', size: '20px' }}>
                <p className="contact-info-date">
                  <span className="contact-info-icon">
                    <AiFillPhone />
                  </span>
                  +48791112379
                </p>
                <p className="contact-info-date">
                  <span className="contact-info-icon">
                    <AiFillMail />
                  </span>
                  sats96dergach@gmail.com
                </p>
              </IconContext.Provider>
              <h5>follow me</h5>
              <IconContext.Provider value={{ size: '22px' }}>
                <ul className="contact-info-media">
                  {constants.SOCIAL_MEDIA.map((item) => {
                    return (
                      <li className="contact-info-media-item">
                        <a href={item.link}>{item.icon}</a>
                      </li>
                    );
                  })}
                </ul>
              </IconContext.Provider>
            </div>
            <div className="contact-form">
              <h5>send us a note</h5>
              <div className="contact-form-wrapper">
                <form action="">
                  <div className="contact-form-inputs">
                    <input
                      className="contact-form-input"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      className="contact-form-input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <textarea
                    className="contact-form-textarea"
                    rows={5}
                    placeholder="Year message........."
                    required
                  />
                </form>
              </div>
              <div className="contact-form-button">
                <CustomButton
                  title="Send Message"
                  isFilled={true}
                  isGray={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

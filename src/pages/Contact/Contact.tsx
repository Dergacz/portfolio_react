import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { IconContext } from 'react-icons';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import * as constants from '../../constants/constants';
import emailjs from '@emailjs/browser';
import { CustomSnackbar } from '../../components/CustomSnackbar/CustomSnackbar';
import { Zoom } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpenSnackbar(false);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        constants.SERVICE_ID,
        constants.TEMPLATE_ID,
        e.target,
        constants.PUBLIC_KEY
      )
      .then(
        () => {
          setIsSuccess(true);
          setIsOpenSnackbar(true);
        },
        () => {
          setIsSuccess(false);
          setIsOpenSnackbar(true);
        }
      );
    e.target.reset();

    const timeOutID = setTimeout(() => {}, 5000);
    return () => {
      clearTimeout(timeOutID);
    };
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Zoom cascade triggerOnce>
          <div className="contact" id="contact">
            <Header
              title="contact.header.title"
              subtitle="contact.header.subtitle"
            />
            <div className="contact-wrapper">
              <div className="contact-info">
                <h5>{t('contact.title')}</h5>
                <IconContext.Provider
                  value={{ color: '#20c997', size: '20px' }}
                >
                  {constants.CONTACT_INFO_ITEMS.map((item) => {
                    return (
                      <p className="contact-info-date" key={item.title}>
                        <span className="contact-info-icon">{item.icon}</span>
                        {t(`contact.item.${item.title}`)}
                      </p>
                    );
                  })}
                </IconContext.Provider>
              </div>
              <div className="contact-form">
                <h5>{t('contact.form.title')}</h5>
                <div className="contact-form-wrapper">
                  <form onSubmit={(e) => sendEmail(e)}>
                    <div className="contact-form-inputs">
                      <input
                        className="contact-form-input"
                        type="text"
                        name="user_name"
                        placeholder={t('contact.form.item.name') || 'Name'}
                        required
                      />
                      <input
                        className="contact-form-input"
                        type="email"
                        name="user_email"
                        placeholder={t('contact.form.item.email') || 'Email'}
                        required
                      />
                    </div>
                    <textarea
                      className="contact-form-textarea"
                      rows={5}
                      placeholder={`${t('contact.form.item.message' || 'Your message')}...`}
                      name="message"
                      required
                    />
                    <div className="contact-form-button">
                      <CustomButton
                        type="submit"
                        title={t('contact.send_btn')}
                        isFilled
                        isGray={false}
                      />
                    </div>
                  </form>
                  <CustomSnackbar
                    isOpen={isOpenSnackbar}
                    handleClose={handleClose}
                    isSuccess={isSuccess}
                  />
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

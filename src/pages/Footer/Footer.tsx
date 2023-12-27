import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { SocialMedia } from '../../components/SocialMedia/SocialMedia';
import { yearsCount } from "../../utils/yearsCount";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="wrapper">
      <Zoom cascade triggerOnce>
        <footer className="footer">
          <p className="footer-copyright">
            Copyright © {currentYear}{' '}
            <span className="footer-copyright-name">
                Stanislau Dziarhach.
            </span>{' '}
            All Rights Reserved.
          </p>
          <SocialMedia />
        </footer>
      </Zoom>
    </div>
  );
};

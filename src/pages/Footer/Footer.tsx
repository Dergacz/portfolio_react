import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { SocialMedia } from '../../components/SocialMedia/SocialMedia';

export const Footer = () => {
  return (
    <div className="wrapper">
      <Zoom cascade triggerOnce>
        <footer className="footer">
          <p className="footer-copyright">
            Copyright © 2023{' '}
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

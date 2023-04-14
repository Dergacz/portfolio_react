import React from 'react';
import { IconContext } from 'react-icons';
import * as constants from '../../constants/constants';
import { Zoom } from 'react-awesome-reveal';

export const Footer = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Zoom cascade triggerOnce>
          <footer className="footer">
            <p className="footer-copyright">
              Copyright © 2023{' '}
              <span className="footer-copyright-name">
                Stanislau Dziarhach.
              </span>{' '}
              All Rights Reserved.
            </p>
            <div>
              <IconContext.Provider
                value={{ size: '22px', color: 'rgba(250, 250, 250, 0.8)' }}
              >
                <ul className="footer-media">
                  {constants.SOCIAL_MEDIA.map((item) => {
                    return (
                      <li className="footer-media-item" key={item.link}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.icon}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </IconContext.Provider>
            </div>
          </footer>
        </Zoom>
      </div>
    </div>
  );
};

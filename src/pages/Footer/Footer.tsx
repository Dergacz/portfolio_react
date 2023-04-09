import React from 'react';
import { IconContext } from 'react-icons';
import * as constants from '../../constants/constants';

export const Footer = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <footer className="footer">
          <p className="footer-copyright">Copyright © 2022 <span className="footer-copyright-name">Stanislau Dziarhach.</span> All Rights Reserved.</p>
          <div>
            <IconContext.Provider value={{ size: '22px', color: 'rgba(250, 250, 250, 0.8)' }}>
              <ul className="footer-media">
                {constants.SOCIAL_MEDIA.map((item) => {
                  return (
                    <li className="footer-media-item">
                      <a href={item.link} target="_blank" rel="noreferrer">{item.icon}</a>
                    </li>
                  );
                })}
              </ul>
            </IconContext.Provider>
          </div>
        </footer>
      </div>
    </div>
  );
};

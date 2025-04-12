import React from 'react';
import { IconContext } from 'react-icons';
import * as constants from '../../constants/constants';

export const SocialMedia = () => {
  return (
    <IconContext.Provider value={{ size: '22px', color: 'rgba(250, 250, 250, 0.8)' }}>
      <ul className="social-media">
        {constants.SOCIAL_MEDIA.map((item) => {
          return (
            <li className="social-media-item" key={item.link}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="social-media-item-link"
              >
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </IconContext.Provider>
  );
};

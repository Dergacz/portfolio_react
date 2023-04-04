import React from 'react';
import * as constants from '../../constants/constants';

export const Navbar = () => {
  return (
    <ul className="navbar">
      {
        constants.NAVBAR_ITEMS.map(item => {
          return (
            <li className="navbar-item">
              <a className="navbar-link" href={item.link}>
                {item.title}
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};

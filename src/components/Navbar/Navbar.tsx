import React, { FC } from 'react';
import * as constants from '../../constants/constants';
import { Link } from 'react-scroll';
import { INavbar } from './Navnar.types';

export const Navbar: FC<INavbar> = ({ scroll }) => {
  return (
    <ul className={`navbar ${scroll >= 200 ? 'navbar-fixed' : ''}`}>
      {constants.NAVBAR_ITEMS.map((item) => {
        return (
          <li className="navbar-item" key={item.title}>
            <Link
              className="navbar-link"
              isDynamic={true}
              href="#"
              spy={true}
              to={item.link}
              smooth={true}
              delay={100}
              duration={1000}
              offset={-80}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

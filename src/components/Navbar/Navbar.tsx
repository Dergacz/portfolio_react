import React from 'react';
import * as constants from '../../constants/constants';
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <ul className="navbar">
      {constants.NAVBAR_ITEMS.map((item) => {
        return (
          <li className="navbar-item" key={item.title}>
            <Link
              className="navbar-link"
              href="#"
              to={item.link}
              smooth={true}
              duration={1000}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

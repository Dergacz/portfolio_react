import React, { FC, useState } from 'react';
import * as constants from '../../constants/constants';
import { Link } from 'react-scroll';
import { INavbar } from './Navbar.types';
import { RxHamburgerMenu, VscChromeClose } from 'react-icons/all';
import { IconContext } from 'react-icons';

export const Navbar: FC<INavbar> = ({ scroll }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <ul className={`navbar ${scroll >= 200 ? 'navbar-fixed' : ''} ${isOpen ? 'navbar-show' : ''}`}>
        {constants.NAVBAR_ITEMS.map((item) => {
          return (
            <li className="navbar-item" key={item.title}>
              <Link
                onClick={() => setIsOpen(false)}
                className="navbar-link"
                isDynamic={true}
                href={`#${item.link}`}
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
      <IconContext.Provider value={{ color: '#20c997', size: '25px' }}>
        <div className="navbar-button" onClick={() => setIsOpen(!isOpen)}>
          {
            isOpen ? <VscChromeClose /> : <RxHamburgerMenu />
          }
        </div>
      </IconContext.Provider>
    </>

  );
};

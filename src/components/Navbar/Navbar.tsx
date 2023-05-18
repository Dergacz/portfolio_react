import React, { FC, useState } from 'react';
import * as constants from '../../constants/constants';
import { Link } from 'react-scroll';
import { INavbar } from './Navbar.types';
import { RxHamburgerMenu, VscChromeClose } from 'react-icons/all';
import { IconContext } from 'react-icons';
import { Languages } from '../Languages/Languages';
import { useTranslation } from 'react-i18next';
import { SocialMedia } from '../SocialMedia/SocialMedia';

export const Navbar: FC<INavbar> = ({ scroll }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="navbar">
      <Languages isSelectOpen={isOpen} scroll={scroll} />
      <IconContext.Provider value={{ color: '#20c997', size: '25px' }}>
        <div className="navbar-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <VscChromeClose /> : <RxHamburgerMenu />}
        </div>
      </IconContext.Provider>
      <ul
        className={`navbar-items ${scroll >= 200 ? 'navbar-fixed' : ''} ${
          isOpen ? 'navbar-show' : ''
        }`}
      >
        {constants.NAVBAR_ITEMS.map((item) => {
          return (
            <li className="navbar-item" key={item.title}>
              <Link
                onClick={() => setIsOpen(false)}
                className="navbar-link"
                activeClass="navbar-active"
                isDynamic
                href={`#${item.link}`}
                spy
                to={item.link}
                smooth
                delay={100}
                duration={1000}
                offset={-80}
              >
                {t(`navbar.${item.title}`)}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={`navbar-media ${scroll >= 200 ? 'navbar-fixed' : ''}`}>
        <SocialMedia />
      </div>
    </div>
  );
};

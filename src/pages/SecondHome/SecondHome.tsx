import React, { FC } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { IHome } from '../Home/Home.types';
import { Particle } from '../../components/Particle/Particle';
import photo_1 from '../../../public/images/photo_1.jpg';
import photo_2 from '../../../public/images/photo_2.jpg';
import { Tilt } from 'react-tilt';
import { Navbar } from '../../components/Navbar/Navbar';
import { useTranslation } from 'react-i18next';
import {IoIosArrowDown} from "react-icons/io";

export const SecondHome: FC<IHome> = ({ scroll }) => {
  const {t} = useTranslation();

  return (
    <>
      <Navbar scroll={scroll} />
      <div className="container">
        <div className="second-home" id="home">
          <Particle />
          <div className="second-home-description">
            <p className="second-home-hello">{t('home.hello')}</p>
            <h1 className="second-home-title">
              {t('home.title.iam') === 'I\'m' && t('home.title.iam')}&#32;
              <ReactTypingEffect
                text={[
                  t('home.title.name'),
                  t('home.title.profession.first'),
                  t('home.title.profession.second'),
                ]}
                speed={70}
                eraseSpeed={70}
                typingDelay={300}
                eraseDelay={300}
              />
            </h1>
            <h2 className="second-home-subtitle">{t('home.based')}</h2>
            <Link
              to="contact"
              isDynamic
              href="#"
              spy
              smooth
              delay={100}
              duration={1500}
              offset={-80}
            >
              <CustomButton title={t('home.button')} isFilled={false} isGray={false} />
            </Link>
          </div>
          <div className="second-home-photo">
            <Tilt option={{ max: '25' }} style={{ position: 'relative' }}>
              <span className="second-home-photo-border" />
              <img src={`${t('home.photo') === '1' ? photo_1 : photo_2}` || photo_1} alt="my_photo" />
            </Tilt>
          </div>
          <Link
            className="second-home-arrow"
            to="about"
            isDynamic={true}
            href="#"
            spy={true}
            smooth={true}
            delay={100}
            duration={1000}
            offset={-80}
          >
            <span className="second-home-arrow-animated">
              <IoIosArrowDown size={28} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

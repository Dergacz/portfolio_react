import React, { FC } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { IoIosArrowDown } from 'react-icons/all';
import { IHome } from '../Home/Home.types';
import { Particle } from '../../components/Particle/Particle';
import photo from '../../../public/images/photo.jpg';
import { Tilt } from 'react-tilt';
import { Navbar } from '../../components/Navbar/Navbar';

export const SecondHome: FC<IHome> = ({ scroll }) => {
  return (
    <>
      <Navbar scroll={scroll} />
      <div className="container">
        <div className="second-home" id="home">
          <Particle />
          <div className="second-home-description">
            <p className="second-home-hello">Welcome</p>
            <h1 className="second-home-title">
              I'm&#32;
              <ReactTypingEffect
                text={[
                  'Stanislau Dziarhach.',
                  'a Frontend Developer.',
                  'a Software Engineer.',
                ]}
                speed={70}
                eraseSpeed={70}
                typingDelay={300}
                eraseDelay={300}
              />
            </h1>
            <h2 className="second-home-subtitle">based in Poland, Gdansk</h2>
            <Link
              to="contact"
              isDynamic={true}
              href="#"
              spy={true}
              smooth={true}
              delay={100}
              duration={1500}
              offset={-80}
            >
              <CustomButton title="Hire me" isFilled={false} isGray={false} />
            </Link>
          </div>
          <div className="second-home-photo">
            <Tilt option={{ max: '25' }} style={{ position: 'relative' }}>
              <span className="second-home-photo-border" />
              <img src={photo} alt="my_photo" />
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

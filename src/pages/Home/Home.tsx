import React, { FC } from 'react';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { Navbar } from '../../components/Navbar/Navbar';
import { Link } from 'react-scroll';
import { IoIosArrowDown } from 'react-icons/all';
import ReactTypingEffect from 'react-typing-effect';
import { IHome } from './Home.types';

export const Home: FC<IHome> = ({ scroll }) => {
  return (
    <div className="home" id="home">
      <Navbar scroll={scroll} />
      {/*<BurgerNavbar scroll={scroll} />*/}
      <p className="home-hello">Welcome</p>
      <h1 className="home-title">
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
      <h2 className="home-subtitle">based in Poland, Gdansk</h2>
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
      <Link
        className="home-arrow"
        to="about"
        isDynamic={true}
        href="#"
        spy={true}
        smooth={true}
        delay={100}
        duration={1000}
        offset={-80}
      >
        <span className="home-arrow-animated">
          <IoIosArrowDown size={28} />
        </span>
      </Link>
    </div>
  );
};

import '../public/sass/main.scss';
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills';
import { Resume } from './pages/Resume/Resume';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Contact } from './pages/Contact/Contact';
import { Footer } from './pages/Footer/Footer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { SecondHome } from './pages/SecondHome/SecondHome';
import {IoIosArrowUp} from "react-icons/io";

function App() {
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <SecondHome scroll={scroll} />
      <About />
      <Skills />
      <Resume />
      {/*<Portfolio />*/}
      <Contact />
      <Footer />
      {scroll >= 200 && (
        <Link
          to="home"
          className="arrow-wrapper"
          isDynamic
          href="#"
          spy
          smooth
          delay={100}
          duration={1000}
        >
          <IoIosArrowUp size={20} />
        </Link>
      )}
    </div>
  );
}

export default App;

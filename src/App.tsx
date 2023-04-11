import '../public/sass/main.scss';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills';
import { Resume } from './pages/Resume/Resume';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Contact } from './pages/Contact/Contact';
import { Footer } from './pages/Footer/Footer';
import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/all';
import { Link } from 'react-scroll';

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
      <Home scroll={scroll} />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      {scroll >= 200 && (
        <Link
          to="home"
          className="arrow-wrapper"
          isDynamic={true}
          href="#"
          spy={true}
          smooth={true}
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

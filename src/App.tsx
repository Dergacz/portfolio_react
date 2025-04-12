import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-scroll';
import '../public/sass/main.scss';
import { CustomSnackbar } from './components/CustomSnackbar/CustomSnackbar';
import { Provider } from './components/Provider/Provider';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Footer } from './pages/Footer/Footer';
import { Resume } from './pages/Resume/Resume';
import { SecondHome } from './pages/SecondHome/SecondHome';
import { Skills } from './pages/Skills/Skills';

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
    <Provider>
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
        <CustomSnackbar />
      </div>
    </Provider>
  );
}

export default App;

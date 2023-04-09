import '../public/sass/main.scss';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills';
import { Resume } from './pages/Resume/Resume';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Contact } from './pages/Contact/Contact';
import { Footer } from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

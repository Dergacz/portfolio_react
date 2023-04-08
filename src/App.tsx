import '../public/sass/main.scss';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills';
import { Resume } from './pages/Resume/Resume';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Contact } from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

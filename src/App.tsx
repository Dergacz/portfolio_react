import '../public/sass/main.scss';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills';
import { Resume } from './pages/Resume/Resume';
import { Portfolio } from './pages/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;

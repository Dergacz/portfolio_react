import '../public/sass/main.scss';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;

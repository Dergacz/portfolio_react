import '../public/sass/main.scss';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Home />
      <div className="wrapper">
        <div className="container">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;

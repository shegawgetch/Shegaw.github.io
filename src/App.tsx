import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './components/pages/MainContent';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { PrivateRout } from './components/pages/PrivateRout';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio ';

function App() {
  return (
    <div className="App">
      <Router basename="/Shegaw.github.io"> {/* Set basename to your repo name */}
        <MainContent>
          <Routes>
            <Route element={<PrivateRout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </MainContent>
      </Router>
    </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainContent from './components/pages/MainContent';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import { PrivateRout } from './components/pages/PrivateRout';
import Portfolio from './components/pages/Portfolio ';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <MainContent>
        <Routes>
        <Route  element={<PrivateRout/>} >
        <Route  path='/' element={<Home/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/portfolio' element={<Portfolio/>} />
        <Route  path='/contact' element={<Contact/>} />
        </Route>
        </Routes>
        </MainContent>
        <Footer/>
        </Router>


    </div>
  );
}

export default App;

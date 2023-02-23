import './App.css';
import Home from './pages/Home/Home';
import background from './assets/images/backgrounAI.png'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing Page/LandingPage';
import GenericDetails from './pages/Generic-Details/Generic_Details';

const App = () => {

  return (
    <div className="app">
      <img
        className='background'
        src={background}
        alt='background' />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={<GenericDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

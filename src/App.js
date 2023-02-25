import './App.css';
import Home from './pages/Home/Home';
import background from './assets/images/backgrounAI.png'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing Page/LandingPage';
import GenericDetails from './pages/Generic-Details/Generic_Details';
import { gameSelector } from './store/gameSlice';
import { useSelector } from 'react-redux';
console.log(gameSelector);

const App = () => {
  const state = useSelector(gameSelector);
  console.log(state?.pageDetails.backgroundImage ?? background);

  return (
    <div className="app">
      <img
        className={state?.pageDetails.backgroundImage ? 'noAniBackground' : 'background'}
        src={state?.pageDetails.backgroundImage ?? background}
        alt='background' />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={state?.pageDetails.backgroundImage ? <GenericDetails /> : <Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

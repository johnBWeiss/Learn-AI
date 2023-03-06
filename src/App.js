import './App.css';
import Home from './pages/Home/Home';
import background from './assets/images/backgrounAI.png'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenericDetails from './pages/Generic-Details/Generic_Details';
import { gameSelector } from './store/gameSlice';
import { useSelector } from 'react-redux';
import EnlargedImage from './pages/Enlarged_Image';

const App = () => {
  const state = useSelector(gameSelector);

  return (
    <div className="app">
      <img
        className={state?.pageDetails.backgroundImage ? 'noAniBackground' : 'background'}
        src={state?.pageDetails.backgroundImage ?? background}
        alt='background' />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={`/details/:${state?.pageDetails.navTitle}`} element={state?.pageDetails.backgroundImage ? <GenericDetails /> : <Home />} />
          {/* <Route exact path={`/image-details`} element={<EnlargedImage /> } /> */}
          <Route exact path={`/image-details`} element={state?.pageDetails.backgroundImage ? <EnlargedImage /> : <Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

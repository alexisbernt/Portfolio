// App.js
import React from 'react';
import './css/App.css';
import './css/Navbar.css';
import './css/PortfolioGrid.css';
import './css/RunningLog.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import PortfolioGrid from './PortfolioGrid';

import About from './pages/About';
import TheraText from './pages/TheraText';
import CyberClub from './pages/CyberClub';
import More from './pages/More';
import RunningLog from './pages/RunningLog';
import LearningLog from './pages/LearningLog';
import Funding from './pages/Funding';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<PortfolioGrid />} />
            <Route path="/about" element={<About />} />
            <Route path="/theratext" element={<TheraText />} />
            {/* <Route path="/cyberclub" element={<CyberClub />} /> */}
            <Route path="/more" element={<More />} />
            <Route path="/running-log" element={<RunningLog />} />
            <Route path="/learninglog" element={<LearningLog />} />
            <Route path="/funding" element={<Funding />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

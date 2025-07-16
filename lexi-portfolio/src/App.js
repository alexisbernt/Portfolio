// App.js
import React from 'react';
import './css/App.css';
import './css/Navbar.css';
import './css/PortfolioGrid.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import PortfolioGrid from './PortfolioGrid';

import About from './pages/About';
import TheraText from './pages/TheraText';
import CyberClub from './pages/CyberClub';
import More from './pages/More';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PortfolioGrid />} />
          <Route path="/about" element={<About />} />
          <Route path="/theratext" element={<TheraText />} />
          <Route path="/cyberclub" element={<CyberClub />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

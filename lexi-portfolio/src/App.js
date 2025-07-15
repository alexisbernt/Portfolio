// App.js
// App.js
import React from 'react';
import './css/App.css';

import Navbar from './Navbar';
import './css/Navbar.css';

import PortfolioGrid from './PortfolioGrid';
import './css/PortfolioGrid.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PortfolioGrid />
    </div>
  );
}

export default App;

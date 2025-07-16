// PortfolioGrid.js
import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioGrid() {
  return (
    <div className="grid-container">
      <Link to="/about" className="grid-box">About</Link>
      <Link to="/theratext" className="grid-box">TheraText</Link>
      <Link to="/cyberclub" className="grid-box">Lexi's Cyber Club</Link>
      <Link to="/more" className="grid-box">More</Link>
    </div>
  );
}

export default PortfolioGrid;

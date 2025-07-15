// PortfolioGrid.js
import React from 'react';
import './css/PortfolioGrid.css';


function PortfolioGrid() {
  return (
    <div className="grid-container">
      <div className="grid-box" id="about">About</div>
      <div className="grid-box" id="theratext">TheraText</div>
      <div className="grid-box" id="cyberclub">Lexi's Cyber Club</div>
      <div className="grid-box" id="more">More</div>
    </div>
  );
}
export default PortfolioGrid;
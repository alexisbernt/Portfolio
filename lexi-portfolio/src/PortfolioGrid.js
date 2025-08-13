// PortfolioGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/PortfolioGrid.css'

function PortfolioGrid() {
  return (
    <div className="portfolio-container">
      {/* Banner with overlay heading */}
      <div className="portfolio-banner-wrapper">
        <img 
          src="/bannerA.png" 
          alt="Portfolio Banner" 
          className="portfolio-banner"
        />
        <Link to="/funding" className="portfolio-heading-link">
          <h2 className="portfolio-heading">
            A basic website that needs a good name 101:
          </h2>
        </Link>
      </div>

      <div className="portfolio-grid">
        <Link to="/about" className="portfolio-box">About</Link>
        <Link to="/theratext" className="portfolio-box">TheraText</Link>
        <Link to="/cyberclub" className="portfolio-box">Lexi's Cyber Club</Link>
        <Link to="/more" className="portfolio-box">More</Link>
        <Link to="/learninglog" className="portfolio-box">Learning Log</Link>
      </div>
    </div>
  );
}

export default PortfolioGrid;

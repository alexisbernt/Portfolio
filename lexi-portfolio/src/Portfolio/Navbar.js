// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Lexi's Portfolio</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#theratext">TheraText</a></li>
        <li><a href="#cyberclub">Lexi's Cyber Club</a></li>
        <li><a href="#more">More</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

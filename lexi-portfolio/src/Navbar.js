// Navbar.js
import React from 'react';
import './css/Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Lexi's Portfolio</div>
      <ul className="nav-links">
        <li><a href="/about">About</a></li>
        <li><a href="https://www.theratext.site/">TheraText</a></li>
        <li><a href="/cyberclub">Lexi's Cyber Club</a></li>
        <li><a href="/more">More</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

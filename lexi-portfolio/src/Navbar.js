import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">Lexi's Portfolio</Link>
      <ul className="nav-links">
        <li><Link to="/about">🥳About</Link></li>
        <li><Link to="/theratext">📝TheraText</Link></li>
        <li><Link to="/cyberclub">🧠Lexi's Cyber Club</Link></li>
        <li><Link to="/more">✨More</Link></li>
        <li><Link to="/running-log">🏃Running Log</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

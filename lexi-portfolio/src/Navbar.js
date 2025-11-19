import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FaGithub, FaInstagram, FaTiktok, FaPinterest, FaYoutube, FaEnvelope, FaHome } from "react-icons/fa";
import './css/Navbar.css';
import { useState } from 'react';

function ThreeMenu() {
  return (
    <Canvas style={{ height: "200px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 5]} />
      <mesh rotation={[0.4, 0.2, 0]}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate />
    </Canvas>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      {/* LEFT: Social Icons */}
      <div className="social-icons">
        <a href="https://github.com/alexisbernt//" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:alexisbernthal4@gmail.com"><FaEnvelope /></a>
        <a href="https://www.instagram.com/alexis.wink/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
        <a href="https://www.youtube.com/@lexicyber" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>

      {/* RIGHT: Home + 3D Dropdown */}
      <div className="right-menu">
        <Link to="/" className="home-icon">
          <FaHome />
        </Link>
        <div className="dropdown-container">
          <button className="dropdown-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          {menuOpen && (
            <div className="dropdown-menu">
              <ThreeMenu />
              <ul>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/learninglog" onClick={() => setMenuOpen(false)}>Learning Log: Your Daily Learning</Link></li>
                <li><Link to="/ai" onClick={() => setMenuOpen(false)}>AI Toolkit: Technical Blog Posts</Link></li>
                <li><Link to="/coins" onClick={() => setMenuOpen(false)}>Selling Coins: What YOU Need to Know About eBay</Link></li>
                <li><Link to="/theratext" onClick={() => setMenuOpen(false)}>TheraText: Solutions for Therapists</Link></li>
                {/* <li><Link to="/cyberclub" onClick={() => setMenuOpen(false)}>Lexi's Cyber Club</Link></li> */}
                <li><Link to="/giftcycle" onClick={() => setMenuOpen(false)}>Gift Cycle: Cheap Gifts</Link></li>
                <li><Link to="/more" onClick={() => setMenuOpen(false)}>More</Link></li>
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                {/* <li><Link to="/running-log" onClick={() => setMenuOpen(false)}>Running Log ✨</Link></li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


      {/* CENTER: Logo */}
      {/* <Link to="/" className="nav-brand">
        <img 
          src="/lexi-sketch.png"  
          alt="Lexi's Portfolio Logo"
          className="nav-logo"
        />
      </Link> */}

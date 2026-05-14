import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">

      {/* LOGO + TITLE */}
      <div className="navbar-top">
        <img src="/logo.png" alt="Digital Women KC Logo" className="logo" />
        <h1 className="brand-title">
          &lt;/ News In A <span>Wink </span>&gt; 
        </h1>
      </div>

      {/* NAV LINKS */}
      <div className="navbar-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
          About Us
        </Link>
        <Link to="/sign-up" className={location.pathname === "/sign-up" ? "active" : ""}>
          Join News League
        </Link>
        <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>
          Blog
        </Link>
        {/* <Link to="/minicon" className={location.pathname === "/minicon" ? "active" : ""}>
          MiniCon 2026
        </Link> */}
        <Link to="/newsinawink" className={location.pathname === "/newsinawink" ? "active" : ""}>
          More...
        </Link>
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

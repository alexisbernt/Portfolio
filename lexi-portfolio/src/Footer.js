// Footer.js
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerStyle = {
    backgroundColor: "#f9fafb",
    padding: "2rem 1rem",
    borderTop: "1px solid #e5e7eb",
    marginTop: "3rem",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "1rem",
  };

  const linksStyle = {
    display: "flex",
    gap: "1.5rem",
    marginTop: "0.5rem",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const linkStyle = {
    color: "#1e40af", // blue accent
    fontWeight: "500",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const linkHover = {
    color: "#2563eb",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#111827" }}>
          Explore
        </h3>
        <div style={linksStyle}>
          <Link
            to="/about"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = linkHover.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}
          >
            About
          </Link>
          <Link
            to="/sign-up"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = linkHover.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}
          >
            Mailing List
          </Link>
          <a
            href="https://instagram.com/alexis.wink"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = linkHover.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@lexicyber"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = linkHover.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}
          >
            YouTube
          </a>
        </div>
        <p style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "1rem" }}>
          © {new Date().getFullYear()} Lexi Bernthal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

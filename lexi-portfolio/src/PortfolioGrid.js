// PortfolioGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/PortfolioGrid.css'

function PortfolioGrid() {
  const posts = [
    { title: "About", desc: "A glimpse into my journey and passions.", link: "/about" },
    { title: "TheraText", desc: "An AI-powered writing companion for mental clarity.", link: "/theratext" },
    { title: "Lexi's Cyber Club", desc: "A hub for tech lovers and security enthusiasts.", link: "/cyberclub" },
    { title: "More", desc: "Other cool things I’m working on right now.", link: "/more" },
    { title: "Learning Log", desc: "Tracking my progress & growth along the way.", link: "/learninglog" }
  ];

  return (
    <div className="portfolio-container">
      {/* Blog-style Banner */}
      <div className="portfolio-banner-wrapper">
        <img 
          src="/bannerB.png" 
          alt="Portfolio Banner" 
          className="portfolio-banner"
        />
        <Link to="/funding" className="portfolio-heading-link">
          <h1 className="portfolio-heading">
            Kind In Business
          </h1>
        </Link>
      </div>

      {/* Blog Post Style Cards */}
      <div className="portfolio-grid blog-style">
        {posts.map((post, index) => (
          <div key={index} className="portfolio-post-card">
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <Link to={post.link} className="read-more">Read More →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioGrid;

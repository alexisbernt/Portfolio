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
    <div>
    {/* Full-width Banner */}
    <div className="portfolio-banner-wrapper">
      <Link to="/funding" className="portfolio-banner-link">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="portfolio-banner"
        >
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Link>
    </div>

    {/* Framed Main Content */}
    {/* <div className="main-container">
      <PortfolioGrid />
    </div> */}

      {/* Intro Area */}
      {/* Hey! What's UP? 
... Aside from the headache that comes with funding and living the life that you want for you and your family ...
        NOT MUCH
The constant race of working to find a job that pays better, allows for a better work-life balance, let's you work from home, is exhausting.
Kind In Business supports you and your needs when it comes to navigating your job in business.  */}
      {/* "Hi , I'm Lexi and this is my real take on starting a job in corporate America in 2025.
This site is full of incredible resources and ideas that can help you as you navigate your career path." */}

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

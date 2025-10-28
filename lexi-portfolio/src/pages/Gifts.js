import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import '../css/Gifts.css';

function ModernLandingPage() {
  const headerPosts = [
    {
      title: 'Gifts That Give Back',
      desc: '13% of all proceeds support environmental recovery initiatives.',
      link: '/donate',
      img: 'give.png'
    },
    {
      title: 'Upcycling Gifts',
      desc: 'We give new life to excess and pre-owned goods through cleaning, reimagining, and transforming them into the perfect custom-curated gift.',
      link: '/create-gift',
      img: 'shop-bag.png'
    }
  ];

  const cardPosts = [
    { title: 'About', desc: 'Learn more about the person behind this website and its mission.', link: '/about' },
    { title: 'Order A Gift', desc: 'Create a cheap, custom arranged, gift!', link: '/create-gift' },
    { title: 'More', desc: 'Discover other projects and ideas currently in progress.', link: '/more' },
  ];

  return (
    <div className="shop-container">
      {/* --- Hero Video Section --- */}
      <section className="hero-video">
        <div className="video-overlay">
            <iframe
              src="https://www.youtube.com/embed/FJuH50udo40?autoplay=1&mute=1&loop=1&playlist=FJuH50udo40&controls=0&showinfo=0&modestbranding=1&rel=0"
              title="Promo Video"
              allow="autoplay; fullscreen"
              frameborder="0"
              allowfullscreen
            ></iframe>
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Create A Custom Gift Today!
            </motion.h1>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/create-gift" className="hero-btn">Shop Gifts →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Featured Section --- */}
      <section className="featured-section">
        <div className="featured-grid">
          {headerPosts.map((post, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="featured-card">
              <Link to={post.link}>
                <img src={post.img} alt={post.title} className="featured-img" />
                <div className="featured-content">
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}

          <div className="profile-card">
            <img src="lug.png" alt="Profile" className="profile-img" />
            <h2>Hi! Looking For A Gift?</h2>
            <p>
              Lexi's Gift Cycle helps you create custom gifts for affordable prices.
              Born from a love of gifting and sustainability, we make giving back simple.
            </p>
            <Link to="/create-gift" className="profile-link">Create Your Custom Gift →</Link>
            <Link to="/signup" className="profile-link">Join the Club →</Link>
          </div>
        </div>
      </section>

      {/* --- Info Cards Section --- */}
      <section className="cards-section">
        <h2 className="section-header">The Things</h2>
        <div className="card-grid">
          {cardPosts.map((post, index) => {
            const isExternal = post.link.startsWith('http');
            const content = (
              <div className="info-card-content">
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <span className="read-more">Read More →</span>
              </div>
            );

            return (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="info-card">
                {isExternal ? (
                  <a href={post.link} target="_blank" rel="noopener noreferrer">{content}</a>
                ) : (
                  <Link to={post.link}>{content}</Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ModernLandingPage;

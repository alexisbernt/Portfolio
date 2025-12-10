import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import '../css/Gifts.css';

function NewsPage1() {
  return (
    <div className="shop-container diary-layout">
      {/* --- Hero Video (Diary Header) --- */}
      <section className="hero-video diary-hero">
        <div className="video-overlay diary-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/uI13dmzfg_E?autoplay=1&mute=1&loop=1&playlist=uI13dmzfg_E&controls=0&modestbranding=1&rel=0"
            title="Diary Video"
            allow="autoplay; fullscreen"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* --- Diary Text Section --- */}
      <section className="diary-text-section">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="diary-title"
        >
          The goal is to provide unbiased news pulling from information across various news sources.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="diary-paragraph"
        >
          Netflix announced that it agreed to acquire Warner Bros Discovery's film studio and HBO assets between $72 billion and $82.7 billion (including debt).
- Hollywood Unions aren't happy about this
- Trump is weighing in
- The acquisition would mean the world's largest paid streaming service has even more power over theater owners and entertainment industry unions.

There is scrutiny by lawmakers over the September 2nd strikes against an alleged drug boat off the Venezuela coast. They're reviewing a video and determining if it will be released to the public. Individuals were killed and there is a lot of controversy around if Defense Secretary Pete Hegseth, Admiral Bradley, and the United States violated international law.

War continues between Ukraine and Russia as Russia rejected the most recent Peace Deal. Now Trump is saying Zelenskyy, the president of Ukraine, didn't read the most recent Peace Deal proposed.
Trumps efforts to create a Peace Deal relate to his desire to be considered to win the Nobel Peace Prize. Zelensky will be in London

ICE is taking part in an immigration crackdown. ICE is arresting and detaining individuals. Recently New York City mayor elect posted a video responding telling New Yorkers about their right to not comply with ICE.

College Football released the playoff bracket for 2025. 12 teams make this playoff with an attempt at glory. One of the teams not to make it is the Notre Dame fighting Irish. In response to not making it, the team decided to withdraw from bowl consideration which is causing controversy in the sports world. The Number 1 seed in coming into the playoffs is Indiana. 
        </motion.p>
      </section>

      {/* --- Buttons to Navigate --- */}
      <section className="diary-actions">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/create-gift" className="hero-btn diary-btn">Create a Gift →</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/signup" className="hero-btn diary-btn secondary">Join the Club →</Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default NewsPage1;

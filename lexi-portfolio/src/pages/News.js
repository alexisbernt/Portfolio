// NewsPage1.js (no breaking changes)
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import "../css/NewsPage1.css";

function NewsPage1() {
  return (
    <div className="news-container fade-in">

      {/* --- Hero Header + Recent Episode --- */}
      <section className="hero-section slide-up">
        <div className="hero-left">
          <h1 className="hero-title">Latest Episode</h1>
          <p className="hero-sub">Week of 12/15/25: Episode 2.</p>
        </div>

        <div className="hero-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/M1Gl_k-uM5w?autoplay=1&mute=1&playsinline=1"
            title="Latest News Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>

      </section>

      {/* --- Previous Episodes Section --- */}
      <section className="previous-section slide-up">
        <h2 className="section-title">Previous Episodes</h2>

        <div className="video-card">
          <div className="video-thumb">
            <iframe
              src="https://www.youtube.com/embed/uI13dmzfg_E?autoplay=1&mute=1&loop=1&playlist=uI13dmzfg_E&controls=0"
              title="Episode 1"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className="video-info">
            <h3>Week of 12/8/25: Episode 1</h3>
            <p>
              Covering a major acquisition in the streaming world,
              geopolitical tensions, ICE, and sports updates.
            </p>
          </div>
        </div>

        <div className="video-card">
          <div className="video-thumb">
            <iframe
              src="https://www.youtube.com/embed/ClEBQ588Z8Y"
              title="Prior Content"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className="video-info">
            <h3>Technology & AI Weekly Recap</h3>
            <p>
              Covering breakthroughs in AI, tech policy shifts,
              and how innovation is shaping the future.
            </p>
          </div>
        </div>
      </section>

      {/* --- Actions --- */}
      <section className="action-buttons slide-up">
        <Link to="/news-signup" className="btn-primary">Sign-Up! →</Link>
        <Link to="/sign-up" className="btn-secondary">Join the Club →</Link>
      </section>

      <Footer />
    </div>
  );
}

export default NewsPage1;



//           Netflix announced that it agreed to acquire Warner Bros Discovery's film studio and HBO assets between $72 billion and $82.7 billion (including debt).
// - Hollywood Unions aren't happy about this
// - Trump is weighing in
// - The acquisition would mean the world's largest paid streaming service has even more power over theater owners and entertainment industry unions.

// There is scrutiny by lawmakers over the September 2nd strikes against an alleged drug boat off the Venezuela coast. They're reviewing a video and determining if it will be released to the public. Individuals were killed and there is a lot of controversy around if Defense Secretary Pete Hegseth, Admiral Bradley, and the United States violated international law.

// War continues between Ukraine and Russia as Russia rejected the most recent Peace Deal. Now Trump is saying Zelenskyy, the president of Ukraine, didn't read the most recent Peace Deal proposed.
// Trumps efforts to create a Peace Deal relate to his desire to be considered to win the Nobel Peace Prize. Zelensky will be in London

// ICE is taking part in an immigration crackdown. ICE is arresting and detaining individuals. Recently New York City mayor elect posted a video responding telling New Yorkers about their right to not comply with ICE.

// College Football released the playoff bracket for 2025. 12 teams make this playoff with an attempt at glory. One of the teams not to make it is the Notre Dame fighting Irish. In response to not making it, the team decided to withdraw from bowl consideration which is causing controversy in the sports world. The Number 1 seed in coming into the playoffs is Indiana.
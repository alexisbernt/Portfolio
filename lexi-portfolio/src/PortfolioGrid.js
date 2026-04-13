import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { MessageSquareText, Newspaper } from "lucide-react";

function ModernLandingPage() {

  const container = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "clamp(20px,4vw,40px)",
    fontFamily: '"Inter", system-ui, sans-serif',
    position: "relative",
    backgroundColor: "#6b7280",
    minHeight: "100vh",
  };

  const section = {
    marginTop: "clamp(40px, 6vw, 80px)",
  };

  const sectionHeader = (text) => (
    <div style={{ margin: '80px 0 40px 0' }}>
      <h2 style={{
        fontSize: '2.3rem',
        fontWeight: 800,
        color: '#fff',
        fontFamily: '"Playfair Display", Georgia, serif',
        letterSpacing: '-0.02em',
      }}>
        {text}
      </h2>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#e5e7eb', marginTop: '10px' }} />
    </div>
  );

  return (
    <div style={container}>

      {/* --- PROMO HERO --- */}
      <div style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "50px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        minHeight: "220px",
      }}>
        <iframe
          src="https://www.youtube.com/embed/0TZ_UzZETCs?autoplay=1&mute=1&loop=1&playlist=0TZ_UzZETCs&controls=0"
          title="Promo Video"
          allow="autoplay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // ✅ vertical center
            alignItems: 'center',     // ✅ horizontal center
            textAlign: 'center',
            color: '#fff',
            padding: '20px',
            zIndex: 1,
            filter: 'brightness(0.6)',
          }}
        />

        <div style={{
          position: 'relative',
          color: '#fff',
          textAlign: 'center',
          padding: '70px 20px',
        }}>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 700 }}>
            “The Week Ahead, Made Clear.”
          </h1>

          <Link to="/newsinawink" style={{
            marginTop: "20px",
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: '#fff',
            color: '#111',
            borderRadius: '10px',
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            Get The News Forecast →
          </Link>
        </div>
      </div>

      {/* --- 📰 LATEST STORIES (NEW BLOG SECTION) --- */}
      <div style={{ marginBottom: "60px" }}>
        {sectionHeader("Latest Stories")}

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {[
            {
              title: "Seeking an understanding of the Royal Family and their endeavors",
              desc: "Subject Matter Expert: Amanda Matta.",
              img: "/blog1.png",
              link: "/story/1",
            },
            {
              title: "Women Athletes & Founders (Volleyball & Alix Earle’s Brand)",
              desc: "Featured: Reese (UNI Volleyball Player).",
              img: "/@reese_news.png",
              link: "/story/2",
            },
            {
              title: "New Story Coming Soon: The Future of AI Hacking",
              desc: "Coming Friday, April 10, 2026.",
              img: "/Monochrome logo of News In A Wink.png",
              link: "/newsinawink",
            },
          ].map((post, i) => (
            <Link key={i} to={post.link} style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ y: -6 }}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ height: "180px" }}>
                  <img src={post.img} alt="" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }} />
                </div>

                <div style={{ padding: "18px" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111" }}>
                    {post.title}
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "#555" }}>
                    {post.desc}
                  </p>

                  <span style={{
                    marginTop: "10px",
                    display: "inline-block",
                    color: "#2563eb",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                  }}>
                    Read More →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* --- FEATURED VIDEOS --- */}
      <div style={section}>
        {sectionHeader("Featured Videos")}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {[
            "https://www.youtube.com/embed/5g8bPzI7ATk",
            "https://www.youtube.com/embed/aO8flTH06-8",
            "https://www.youtube.com/embed/1CNhia3X828",
          ].map((src, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
            }}>
              <iframe
                src={src}
                title="video"
                style={{ width: "100%", height: "200px" }}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- SURVEY SECTION --- */}
      <motion.section
        style={{
          margin: "50px 0",
          padding: "30px",
          borderRadius: "20px",
          background: "#fff",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div style={{ textAlign: "center", flex: 1 }}>
          <MessageSquareText size={28} color="#2563eb" />
          <h3>What News Is On Your Mind?</h3>
          <a href="https://docs.google.com/forms" target="_blank" rel="noreferrer">
            Take Survey
          </a>
        </div>

        <div style={{ textAlign: "center", flex: 1 }}>
          <Newspaper size={28} color="#10b981" />
          <h3>Get Your News</h3>
          <Link to="/newsinawink">Go →</Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default ModernLandingPage;
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { ArrowRight, Sparkles } from "lucide-react";

function ModernLandingPage() {
  const stories = [
    {
      title: "AI Is Moving Fast: What You Should Be Watching Right Now",
      desc: "An Assessment by News In A Wink.",
      img: "/anthropic.png",
      link: "/story/3",
    },
    {
      title:
        "Women Athletes & Founders (Volleyball & Alix Earle’s Brand)",
      desc: "Featured: Reese (UNI Volleyball Player).",
      img: "/@reese_news.png",
      link: "/story/2",
    },
    {
      title:
        "Seeking an understanding of the Royal Family and their endeavors",
      desc: "Subject Matter Expert: Amanda Matta.",
      img: "/blog1.jpeg",
      link: "/story/1",
    },
  ];

  const featured = stories[0];

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#ffffff",
      color: "#111827",
      fontFamily: "serif",
    },

    container: {
      maxWidth: "1320px",
      margin: "0 auto",
      padding: "2rem 1.5rem",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "2.5rem",
      alignItems: "start",
    },

    card: {
      border: "1px solid #e5e7eb",
      background: "#fff",
    },

    label: {
      fontSize: "0.75rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      fontWeight: 600,
      marginBottom: "0.5rem",
      color: "#6b7280",
    },

    h1: {
      fontSize: "2.8rem",
      lineHeight: 1.1,
      fontWeight: 700,
      marginBottom: "1rem",
    },

    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    text: {
      fontSize: "0.95rem",
      color: "#4b5563",
      lineHeight: 1.6,
    },

    button: {
      marginTop: "1rem",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontWeight: 600,
      fontSize: "0.9rem",
      borderBottom: "1px solid #111827",
      paddingBottom: "2px",
    },

    sidebarTitle: {
      fontSize: "1.8rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },

    sidebarCard: {
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      gap: "1rem",
      borderBottom: "1px solid #e5e7eb",
      paddingBottom: "1rem",
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* TOP GRID */}
        <div style={styles.grid}>
      {/* LEFT FEATURE STORY */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div style={styles.card}>
          
          {/* VIDEO INSTEAD OF IMAGE */}
          <div
            style={{
              width: "100%",
              height: "420px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/0TZ_UzZETCs?autoplay=1&mute=1&loop=1&playlist=0TZ_UzZETCs&controls=0"
              title="Promo Video"
              allow="autoplay"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                filter: "brightness(0.7)",
              }}
            />
          </div>

          <div style={{ padding: "1.5rem" }}>
            <div style={styles.label}>Welcome To News In A Wink</div>

            <h1 style={styles.h1}>
              Changing Your Perspective On The News 
            </h1>

            <p style={styles.text}>
              Find the types of news stories that excite you. Ranging from technology, to health, to culture, and more - we break down the news into categories that make it easy to find what you care about.
            </p>

            <Link to={featured.link} style={styles.button}>
              Explore the latest <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>

          {/* RIGHT SIDEBAR */}
          <div>
            <h2 style={styles.sidebarTitle}>
              NEW <span style={{ fontStyle: "italic" }}>and</span> NOW
            </h2>

            {stories.map((s, i) => (
              <Link
                key={i}
                to={s.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div style={styles.sidebarCard}>
                  <img
                    src={s.img}
                    alt=""
                    style={{
                      width: "100px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />

                  <div>
                    <div style={styles.label}>
                      {i === 0
                        ? "What To Watch In AI"
                        : i === 1
                        ? "Women & Athletics"
                        : "World News & The Royal Family"}
                    </div>

                    <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                      {s.title}
                    </div>
                  </div>
                </div>
                
              </Link>
            ))}
            <div style={{ marginTop: "1rem" }}>
                    <Link to="/sign-up" style={styles.button}>
                     Get The Newsletter: News In A Wink Weekly Recap (It's Free! Sent Out Every Monday) <ArrowRight size={16} />
                    </Link>
                  </div>
          </div>
        </div>

        {/* VIDEO SECTION (kept but simplified layout) */}
        <section style={{ marginTop: "4rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={styles.label}>Videos</div>
            <h2 style={styles.h2}>Watch More</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {[
              "https://www.youtube.com/embed/5g8bPzI7ATk",
              "https://www.youtube.com/embed/aO8flTH06-8",
              "https://www.youtube.com/embed/1CNhia3X828",
            ].map((src, i) => (
              <div key={i} style={{ border: "1px solid #e5e7eb" }}>
                <iframe
                  src={src}
                  title="video"
                  style={{ width: "100%", height: "220px", border: "none" }}
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER (kept minimal like editorial footer card)
        <section style={{ marginTop: "4rem", borderTop: "1px solid #e5e7eb", paddingTop: "3rem" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={styles.h2}>Stay Ahead of the Week</h2>
            <p style={{ ...styles.text, maxWidth: "600px", margin: "1rem auto" }}>
              Get the clearest, fastest news breakdown delivered to you.
            </p>

            <input
              placeholder="Enter your email"
              style={{
                padding: "10px 12px",
                border: "1px solid #d1d5db",
                width: "280px",
              }}
            />

            <div style={{ marginTop: "1rem" }}>
              <Link to="/sign-up" style={styles.button}>
                Get Newsletter <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section> */}
      </div>

      <Footer />
    </div>
  );
}

export default ModernLandingPage;
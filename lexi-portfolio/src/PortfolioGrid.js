import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { ArrowRight, Sparkles } from "lucide-react";

function ModernLandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stories = [
    {
      title:
        "The 2026 FIFA World Cup Has Kicked Off",
      desc: "What we are watching at one of the FIFA Host Sites.",
      img: "/world-cup.png",
      link: "/theme-world-cup",
    },
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
      gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
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
      gridTemplateColumns: isMobile ? "80px 1fr" : "100px 1fr",
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
          {/* LEFT SIDEBAR (NEW and NOW) */}
          <div style={{ order: isMobile ? 2 : 1 }}>
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
                      width: "100%",
                      height: isMobile ? "70px" : "80px",
                      objectFit: "cover",
                    }}
                  />

                  <div>
                    <div style={styles.label}>
                      {i === 0
                        ? "What You Need To Know"
                        : i === 1
                        ? "What To Watch In AI"
                        : i === 2
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
                     Get The Newsletter: (It's Free!) <ArrowRight size={16} />
                    </Link>
                  </div>
            {/* NEWSLETTER + NEWS LEAGUE (TIGHT VERSION) */}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                style={{
                  marginTop: "0.75rem",
                  border: "1px solid #e5e7eb",
                  padding: "0.75rem",
                  background: "#fafafa",
                  lineHeight: 1.3,
                }}
              >

                <div style={{ fontSize: "1rem", fontWeight: 800, marginTop: "0.25rem" }}>
                  NEWS IN A WINK NEWSLETTER
                </div>

                <p
                  style={{
                    ...styles.text,
                    marginTop: "0.35rem",
                    marginBottom: "0.4rem",
                    fontSize: "0.9rem",
                  }}
                >
                 Sign up between now and August 1st 2026 for a chance to win <strong>$100</strong>.
                </p>

                <Link
                  to="/sign-up"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    borderBottom: "1px solid #111827",
                    paddingBottom: "1px",
                    marginTop: "0.2rem",
                  }}
                >
                  Enter <ArrowRight size={14} />
                </Link>
              </motion.div>
          </div>

          {/* RIGHT FEATURE STORY (Promo Video) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ order: isMobile ? 1 : 2 }}
          >
            <div style={styles.card}>

              {/* VIDEO INSTEAD OF IMAGE */}
              <div
                style={{
                  width: "100%",
                  height: isMobile ? "240px" : "420px",
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
                  One Topic. One Week.
                </h1>

                <p style={styles.text}>
                  News In A Week is a themed newsletter that takes one major topic dominating headlines and breaks it down into an easy-to-understand guide. Instead of trying to follow everything happening in the world, spend one week gaining a deeper understanding of one important story.
                </p>

                <Link to={featured.link} style={styles.button}>
                  Explore the latest <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default ModernLandingPage;
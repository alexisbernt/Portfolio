import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Newspaper,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import "../css/About.css";
import Footer from "../Footer";

const timelineEvents = [
  {
    date: "Est. 2025",
    title: "Built for the Next Generation",
    img: "business-image.png",
    description:
      "News In A Wink was created to make staying informed feel fast, modern, and actually enjoyable.",
  },
  {
    date: "Fresh Global Coverage Every Week",
    title: "The World of Tech, Business & Culture",
    img: "VS_Git_Alexis.png",
    description:
      "Every week, News In A Wink delivers the biggest headlines, emerging tech trends, and global business updates.",
  },
  {
    date: "Growing Every Day",
    title: "A Mission Bigger Than News",
    img: "iPhone_Alexis.png",
    description:
      "The goal is simple: help more young adults become informed, confident thinkers in a fast-moving world.",
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background:
      "linear-gradient(135deg, #0f172a 0%, #111827 45%, #1e3a8a 100%)",
    overflowX: "hidden",
  },

  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    boxSizing: "border-box",
  },

  heroGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "3rem",
    alignItems: "center",
    width: "100%",
  },

  glassCard: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "24px",
    backdropFilter: "blur(14px)",
    boxSizing: "border-box",
    width: "100%",
    overflow: "hidden",
  },

  sectionTitle: {
    fontSize: "clamp(2rem, 6vw, 4.5rem)",
    lineHeight: "1.05",
    fontWeight: "800",
    marginBottom: "1.25rem",
    color: "white",
    wordBreak: "break-word",
  },

  paragraph: {
    fontSize: "clamp(1rem, 2vw, 1.1rem)",
    lineHeight: "1.8",
    color: "#cbd5e1",
    width: "100%",
    wordBreak: "break-word",
  },
};

export default function About() {
  return (
    <div style={styles.page}>
      {/* HERO */}
      <section
        style={{
          padding: "clamp(4rem, 8vw, 6rem) 0 4rem",
          width: "100%",
        }}
      >
        <div style={styles.container}>
          <div style={styles.heroGrid}>
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                width: "100%",
                minWidth: 0,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.1)",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap",
                  maxWidth: "100%",
                }}
              >
                <Sparkles size={18} color="#60a5fa" />
                <span
                  style={{
                    color: "white",
                    fontSize: "0.9rem",
                  }}
                >
                  Modern News For Modern Minds
                </span>
              </div>

              <h1 style={styles.sectionTitle}>
                News that respects your time.
              </h1>

              <p
                style={{
                  ...styles.paragraph,
                  marginBottom: "2rem",
                }}
              >
                Stay informed with fast, high-impact updates designed for people
                who want clarity without information overload.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginBottom: "2.5rem",
                  width: "100%",
                }}
              >
                {[
                  "⚡ Quick updates in minutes",
                  "🌍 Global stories that matter",
                  "📈 Business & tech insights",
                  "🧠 Built for ambitious readers",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      color: "#e2e8f0",
                      width: "100%",
                    }}
                  >
                    <CheckCircle
                      size={20}
                      color="#60a5fa"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />

                    <span
                      style={{
                        wordBreak: "break-word",
                        lineHeight: "1.6",
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/sign-up"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "14px 22px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                  color: "white",
                  fontWeight: "700",
                  flexWrap: "wrap",
                  maxWidth: "100%",
                  textAlign: "center",
                }}
              >
                Join The Community
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                display: "grid",
                gap: "1.5rem",
                width: "100%",
                minWidth: 0,
              }}
            >
              {[
                {
                  icon: <Newspaper size={28} />,
                  title: "5 Essential Headlines",
                  desc: "Curated stories that help you stay informed fast.",
                },
                {
                  icon: <TrendingUp size={28} />,
                  title: "Tech & Business Trends",
                  desc: "Learn where the world is heading next.",
                },
                {
                  icon: <Globe size={28} />,
                  title: "Global Perspective",
                  desc: "Stay connected to important global events.",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  style={{
                    ...styles.glassCard,
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      color: "#60a5fa",
                      marginBottom: "1rem",
                    }}
                  >
                    {card.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      color: "white",
                      marginBottom: "0.75rem",
                      wordBreak: "break-word",
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      color: "#cbd5e1",
                      lineHeight: "1.7",
                      wordBreak: "break-word",
                    }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section
        style={{
          width: "100%",
          padding: "1rem 0 5rem",
        }}
      >
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              width: "100%",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "white",
                marginBottom: "1rem",
                wordBreak: "break-word",
              }}
            >
              Why News In A Wink Exists
            </h2>

            <p
              style={{
                ...styles.paragraph,
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Built to help people stay informed without endless scrolling and
              overwhelming news feeds.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gap: "2rem",
              width: "100%",
            }}
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  ...styles.glassCard,
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(280px, 1fr))",
                  alignItems: "stretch",
                }}
              >
                {/* IMAGE */}
                <div
                  style={{
                    width: "100%",
                    minHeight: "250px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={event.img}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                {/* CONTENT */}
                <div
                  style={{
                    padding: "clamp(1.5rem, 4vw, 2rem)",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <p
                    style={{
                      color: "#60a5fa",
                      fontWeight: "700",
                      marginBottom: "1rem",
                      wordBreak: "break-word",
                    }}
                  >
                    {event.date}
                  </p>

                  <h3
                    style={{
                      fontSize: "clamp(1.5rem, 4vw, 2rem)",
                      color: "white",
                      marginBottom: "1rem",
                      lineHeight: "1.2",
                      wordBreak: "break-word",
                    }}
                  >
                    {event.title}
                  </h3>

                  <p style={styles.paragraph}>{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "0 0 5rem",
          width: "100%",
        }}
      >
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              ...styles.glassCard,
              padding: "clamp(2rem, 5vw, 4rem)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "white",
                marginBottom: "1rem",
                lineHeight: "1.1",
                wordBreak: "break-word",
              }}
            >
              Stay Ahead Of The Curve ✉️
            </h2>

            <p
              style={{
                ...styles.paragraph,
                maxWidth: "700px",
                margin: "0 auto 2rem",
              }}
            >
              Join readers who want smarter news, faster insights, and a better
              understanding of the world.
            </p>

            <Link
              to="/sign-up"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "15px 24px",
                borderRadius: "14px",
                textDecoration: "none",
                background:
                  "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                color: "white",
                fontWeight: "700",
                flexWrap: "wrap",
                textAlign: "center",
                maxWidth: "100%",
              }}
            >
              Join The Mailing List
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "auto",
          width: "100%",
        }}
      >
        <Footer />
      </footer>
    </div>
  );
}
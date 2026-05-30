import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  BookOpen,
  Flame,
  Sparkles,
  ArrowRight,
  CheckCircle,
  PenSquare,
} from "lucide-react";

import "../css/About.css";
import Footer from "../Footer";

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
    fontSize: "clamp(2rem, 4vw, 3rem)",
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

export default function LearningLog() {
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
                  marginBottom: "1rem",
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
                  Build Knowledge Every Day
                </span>
              </div>

              <h1 style={styles.sectionTitle}>
                Share what you learn and track your growth daily.
              </h1>

              <p
                style={{
                  ...styles.paragraph,
                  marginBottom: "1.5rem",
                }}
              >
                Your Learning Log is a space to document insights, discoveries,
                skills, and ideas you learn every single day.
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
                  "🧠 Log new concepts and lessons daily",
                  "🔥 Build learning streaks and consistency",
                  "📚 Share knowledge with the community",
                  "✍️ Reflect on growth and progress over time",
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
                Start Logging Today
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
                  icon: <PenSquare size={28} />,
                  title: "Daily Learning Entries",
                  desc: "Write short posts about what you learned today — whether it's coding, business, AI, productivity, or life lessons.",
                },
                {
                  icon: <Brain size={28} />,
                  title: "Grow Your Knowledge Base",
                  desc: "Over time your learning log becomes a personal archive of ideas, reflections, and skills you can revisit anytime.",
                },
                {
                  icon: <BookOpen size={28} />,
                  title: "Learn From Others",
                  desc: "Explore community posts to discover new insights, perspectives, and useful resources from other learners.",
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
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* GLOW EFFECT */}
            <div
              style={{
                position: "absolute",
                top: "-120px",
                right: "-120px",
                width: "250px",
                height: "250px",
                background: "rgba(59,130,246,0.18)",
                filter: "blur(90px)",
                borderRadius: "50%",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.08)",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  marginBottom: "1.5rem",
                  color: "#bfdbfe",
                  fontWeight: "600",
                }}
              >
                🔥 Daily Learning Challenge
              </div>

              <h2
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                  color: "white",
                  marginBottom: "1rem",
                  lineHeight: "1.05",
                  fontWeight: "800",
                  wordBreak: "break-word",
                }}
              >
                Learn Something New.
                <br />
                Every Single Day.
              </h2>

              <p
                style={{
                  ...styles.paragraph,
                  maxWidth: "760px",
                  margin: "0 auto 2rem",
                  fontSize: "1.08rem",
                }}
              >
                Join a community of curious learners documenting their growth,
                building consistency, and sharing valuable insights with others.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginBottom: "2rem",
                }}
              >
                {[
                  "🧠 Daily Knowledge Posts",
                  "🔥 Streak Tracking",
                  "🌍 Community Learning",
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "10px 16px",
                      borderRadius: "999px",
                      color: "#e2e8f0",
                      fontWeight: "500",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/sign-up"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "16px 28px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  color: "white",
                  fontWeight: "800",
                  fontSize: "1rem",
                  flexWrap: "wrap",
                  textAlign: "center",
                  maxWidth: "100%",
                  boxShadow: "0 12px 30px rgba(37,99,235,0.35)",
                }}
              >
                Create Your Learning Log
                <ArrowRight size={18} />
              </Link>
            </div>
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
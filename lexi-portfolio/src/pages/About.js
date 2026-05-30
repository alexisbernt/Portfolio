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
  Users,
} from "lucide-react";

import "../css/About.css";
import Footer from "../Footer";

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#f7f6f3",
    overflowX: "hidden",
    color: "#111111",
  },

  container: {
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1.5rem",
    boxSizing: "border-box",
  },

  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "2rem",
    alignItems: "stretch",
    width: "100%",
  },

  card: {
    background: "#ffffff",
    border: "1px solid #e7e5e4",
    borderRadius: "28px",
    overflow: "hidden",
    boxSizing: "border-box",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
  },

  sectionTitle: {
    fontSize: "clamp(2.5rem, 5vw, 4.4rem)",
    lineHeight: "0.95",
    fontWeight: "800",
    marginBottom: "1.4rem",
    color: "#111111",
    letterSpacing: "-2px",
  },

  paragraph: {
    fontSize: "1.05rem",
    lineHeight: "1.8",
    color: "#5f5f5f",
  },
};

export default function LearningLog() {
  return (
    <div style={styles.page}>
      {/* HERO */}
      <section
        style={{
          padding: "3rem 0 4rem",
          width: "100%",
        }}
      >
        <div style={styles.container}>
          <div style={styles.heroGrid}>
            {/* LEFT MAIN CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                ...styles.card,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* TOP CONTENT */}
              <div
                style={{
                  padding: "3rem",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#f3f4f6",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    marginBottom: "1.5rem",
                    fontWeight: "600",
                    color: "#444",
                  }}
                >
                  <Sparkles size={16} />
                  Daily Learning Platform
                </div>

                <h1 style={styles.sectionTitle}>
                  One place to
                  <br />
                  track everything
                  <br />
                  you learn.
                </h1>

                <p
                  style={{
                    ...styles.paragraph,
                    marginBottom: "2rem",
                    maxWidth: "620px",
                  }}
                >
                  Build a public learning log where you can document ideas,
                  coding discoveries, business insights, AI breakthroughs, and
                  personal growth every day.
                </p>

                {/* FEATURES */}
                <div
                  style={{
                    display: "grid",
                    gap: "1rem",
                    marginBottom: "2.5rem",
                  }}
                >
                  {[
                    "Write and publish daily learning posts",
                    "Build streaks and stay consistent",
                    "Learn from the community",
                    "Create your personal knowledge archive",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.08 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        color: "#222",
                        fontWeight: "500",
                      }}
                    >
                      <CheckCircle size={18} color="#2563eb" />
                      {item}
                    </motion.div>
                  ))}
                </div>

                <Link
                  to="/sign-up"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#111111",
                    color: "white",
                    padding: "16px 24px",
                    borderRadius: "14px",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "1rem",
                  }}
                >
                  Start learning
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* BOTTOM PANEL */}
              <div
                style={{
                  background: "#f87171",
                  padding: "2.5rem",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "24px",
                    padding: "2rem",
                    minHeight: "260px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "700",
                        fontSize: "1.1rem",
                      }}
                    >
                      Today's Learning Log
                    </div>

                    <div
                      style={{
                        background: "#f3f4f6",
                        padding: "8px 14px",
                        borderRadius: "999px",
                        fontSize: "0.9rem",
                        color: "#555",
                      }}
                    >
                      AI productivity tips
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: "1rem",
                    }}
                  >
                    {[
                      "Learned how vector databases improve AI memory retrieval.",
                      "Studied React performance optimization with memoization.",
                      "Discovered a faster workflow for TypeORM queries.",
                    ].map((item, index) => (
                      <div
                        key={index}
                        style={{
                          padding: "1rem",
                          borderRadius: "14px",
                          background: "#fafafa",
                          border: "1px solid #ececec",
                          color: "#444",
                          lineHeight: "1.6",
                        }}
                      >
                        ✍️ {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                display: "grid",
                gap: "1.5rem",
              }}
            >
              {/* CARD 1 */}
              <div style={styles.card}>
                <div
                  style={{
                    padding: "2.2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#666",
                      marginBottom: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    Community Learning
                  </div>

                  <h2
                    style={{
                      fontSize: "2.3rem",
                      lineHeight: "1",
                      fontWeight: "800",
                      marginBottom: "1rem",
                      color: "#111",
                      letterSpacing: "-1px",
                    }}
                  >
                    Learn from people
                    <br />
                    every day.
                  </h2>
                </div>

                {/* BLUE SECTION */}
                <div
                  style={{
                    background: "#60a5fa",
                    padding: "2rem",
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      borderRadius: "22px",
                      padding: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "#111",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "700",
                        }}
                      >
                        A
                      </div>

                      <div>
                        <div
                          style={{
                            fontWeight: "700",
                          }}
                        >
                          Alex's Learning Streak
                        </div>

                        <div
                          style={{
                            color: "#666",
                            fontSize: "0.9rem",
                          }}
                        >
                          42 day streak 🔥
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gap: "1rem",
                      }}
                    >
                      {[
                        "Learning advanced AI prompting techniques",
                        "Reading about startup growth systems",
                        "Building a React dashboard project",
                      ].map((item, index) => (
                        <div
                          key={index}
                          style={{
                            background: "#f8fafc",
                            padding: "1rem",
                            borderRadius: "14px",
                            border: "1px solid #ececec",
                            color: "#444",
                          }}
                        >
                          📚 {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* SMALL FEATURE CARDS */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                {[
                  {
                    icon: <Flame size={28} />,
                    title: "Streaks",
                    desc: "Stay consistent daily.",
                  },
                  {
                    icon: <Users size={28} />,
                    title: "Community",
                    desc: "Share knowledge publicly.",
                  },
                ].map((card, index) => (
                  <motion.div
                    whileHover={{ y: -4 }}
                    key={index}
                    style={{
                      ...styles.card,
                      padding: "1.8rem",
                    }}
                  >
                    <div
                      style={{
                        color: "#111",
                        marginBottom: "1rem",
                      }}
                    >
                      {card.icon}
                    </div>

                    <h3
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "700",
                        marginBottom: "0.6rem",
                        color: "#111",
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        color: "#666",
                        lineHeight: "1.6",
                      }}
                    >
                      {card.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
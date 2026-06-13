import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Flame,
  Sparkles,
  ArrowRight,
  CheckCircle,
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
    padding: "0 clamp(1rem, 4vw, 2rem)",
    boxSizing: "border-box",
  },

  card: {
    background: "#ffffff",
    border: "1px solid #e7e5e4",
    borderRadius: "28px",
    overflow: "hidden",
    boxSizing: "border-box",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    width: "100%",
  },

  sectionTitle: {
    fontSize: "clamp(2.2rem, 7vw, 4.5rem)",
    lineHeight: "0.95",
    fontWeight: "800",
    marginBottom: "1.4rem",
    color: "#111111",
    letterSpacing: "-2px",
    wordBreak: "break-word",
  },

  paragraph: {
    fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
    lineHeight: "1.8",
    color: "#5f5f5f",
  },
};

export default function LearningLog() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 968);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section
        style={{
          padding: "clamp(1.5rem, 4vw, 3rem) 0 4rem",
          width: "100%",
        }}
      >
        <div style={styles.container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
              gap: "clamp(1.25rem, 3vw, 2rem)",
              alignItems: "stretch",
              width: "100%",
            }}
          >
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
                  padding: "clamp(1.5rem, 5vw, 3rem)",
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
                    fontSize: "0.9rem",
                    flexWrap: "wrap",
                  }}
                >
                  <Sparkles size={16} />
                  Weekly Deep-Dive Publication
                </div>

                <h1 style={styles.sectionTitle}>
                  One trending
                  <br />
                  story.
                </h1>

                <p
                  style={{
                    ...styles.paragraph,
                    marginBottom: "2rem",
                    maxWidth: "620px",
                  }}
                >
                  Each week we pick a trending news theme and publish an
                  in-depth piece on it. Less noise, more understanding.
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
                      "One trending news theme picked every week",
                      "A single in-depth piece, not a feed of headlines",
                      "Researched, written, and fact-checked for clarity",
                      "Built for curious students and professionals",
                    ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.08 }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        color: "#222",
                        fontWeight: "500",
                        lineHeight: "1.5",
                      }}
                    >
                      <CheckCircle
                        size={18}
                        color="#2563eb"
                        style={{
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />

                      <span>{item}</span>
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
                    background: "#111111",
                    color: "white",
                    padding: "16px 24px",
                    borderRadius: "14px",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "1rem",
                    flexWrap: "wrap",
                    width: isMobile ? "100%" : "fit-content",
                    boxSizing: "border-box",
                  }}
                >
                  Read this week's story
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* BOTTOM PANEL */}
              <div
                style={{
                  background: "#f87171",
                  padding: "clamp(1.25rem, 4vw, 2.5rem)",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "24px",
                    padding: "clamp(1.25rem, 4vw, 2rem)",
                    minHeight: isMobile ? "auto" : "260px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      justifyContent: "space-between",
                      alignItems: isMobile ? "flex-start" : "center",
                      gap: "1rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "700",
                        fontSize: "1.1rem",
                      }}
                    >
                      This Week's Theme
                    </div>

                    <div
                      style={{
                        background: "#f3f4f6",
                        padding: "8px 14px",
                        borderRadius: "999px",
                        fontSize: "0.9rem",
                        color: "#555",
                        width: isMobile ? "100%" : "auto",
                        textAlign: "center",
                        boxSizing: "border-box",
                      }}
                    >
                      The Rise of AI Agents
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: "1rem",
                    }}
                  >
                    {[
                      "How AI agents are reshaping daily workflows.",
                      "What the latest funding wave means for the industry.",
                      "The risks experts are watching closely this year.",
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
                          wordBreak: "break-word",
                          fontSize: "0.95rem",
                        }}
                      >
                        📰 {item}
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
                    padding: "clamp(1.5rem, 5vw, 2.2rem)",
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
                    Reader Discussion
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(2rem, 6vw, 2.5rem)",
                      lineHeight: "1.05",
                      fontWeight: "800",
                      marginBottom: "1rem",
                      color: "#111",
                      letterSpacing: "-1px",
                    }}
                  >
                    See how others
                    <br />
                    interpret the
                    <br />
                    story.
                  </h2>
                </div>

                {/* BLUE SECTION */}
                <div
                  style={{
                    background: "#60a5fa",
                    padding: "clamp(1.25rem, 4vw, 2rem)",
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      borderRadius: "22px",
                      padding: "clamp(1.25rem, 4vw, 1.5rem)",
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
                          minWidth: "42px",
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
                            fontSize: "0.98rem",
                          }}
                        >
                          Alex on this week's piece
                        </div>

                        <div
                          style={{
                            color: "#666",
                            fontSize: "0.9rem",
                          }}
                        >
                          42 weeks of reading streak 🔥
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
                        "This week's deep dive changed how I see AI agents.",
                        "Shared three takeaways with my team this morning.",
                        "Started a side project inspired by the analysis.",
                      ].map((item, index) => (
                        <div
                          key={index}
                          style={{
                            background: "#f8fafc",
                            padding: "1rem",
                            borderRadius: "14px",
                            border: "1px solid #ececec",
                            color: "#444",
                            lineHeight: "1.6",
                            fontSize: "0.95rem",
                            wordBreak: "break-word",
                          }}
                        >
                          💬 {item}
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
                  gridTemplateColumns: isMobile
                    ? "1fr"
                    : "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {[
                  {
                    icon: <Flame size={28} />,
                    title: "Weekly Drop",
                    desc: "A new theme, every week.",
                  },
                  {
                    icon: <Users size={28} />,
                    title: "Community",
                    desc: "Discuss the story together.",
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
                        fontSize: "0.95rem",
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
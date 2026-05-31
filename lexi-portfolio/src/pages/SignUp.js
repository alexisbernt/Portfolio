import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Flame,
  Users,
  BookOpen,
} from "lucide-react";

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
    fontSize: "clamp(2.2rem, 7vw, 4.8rem)",
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

  input: {
    width: "100%",
    padding: "16px 18px",
    borderRadius: "16px",
    border: "1px solid #e5e7eb",
    background: "#fafafa",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    background: "#111111",
    color: "white",
    border: "none",
    padding: "18px",
    borderRadius: "16px",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
};

export default function SignUp() {
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    learningGoal: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 968);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          learning_goal: formData.learningGoal,
        },
        "YOUR_PUBLIC_KEY"
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        learningGoal: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
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
              gridTemplateColumns: isMobile ? "1fr" : "1fr 0.9fr",
              gap: "clamp(1.25rem, 3vw, 2rem)",
              alignItems: "stretch",
              width: "100%",
            }}
          >
            {/* LEFT SIDE */}
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
                  Join The Learning Community
                </div>

                <h1 style={styles.sectionTitle}>
                  Start building
                  <br />
                  your learning
                  <br />
                  streak today.
                </h1>

                <p
                  style={{
                    ...styles.paragraph,
                    marginBottom: "2rem",
                    maxWidth: "580px",
                  }}
                >
                  Document what you learn every day, build consistency, and
                  share your ideas with a growing community of learners,
                  developers, and creators.
                </p>

                <div
                  style={{
                    display: "grid",
                    gap: "1rem",
                    marginBottom: "2.5rem",
                  }}
                >
                  {[
                    "Track your learning journey",
                    "Build public learning streaks",
                    "Connect with ambitious learners",
                    "Share insights and discoveries",
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
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* BOTTOM PANEL */}
              <div
                style={{
                  background: "#60a5fa",
                  padding: "clamp(1.25rem, 4vw, 2.5rem)",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "24px",
                    padding: "clamp(1.25rem, 4vw, 2rem)",
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
                        width: "44px",
                        height: "44px",
                        minWidth: "44px",
                        borderRadius: "50%",
                        background: "#111",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "700",
                      }}
                    >
                      M
                    </div>

                    <div>
                      <div
                        style={{
                          fontWeight: "700",
                          fontSize: "clamp(0.95rem, 2vw, 1rem)",
                        }}
                      >
                        Maya's Learning Log
                      </div>

                      <div
                        style={{
                          color: "#666",
                          fontSize: "0.9rem",
                        }}
                      >
                        58 day streak 🔥
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
                      "Learning advanced React architecture patterns.",
                      "Exploring AI startup growth systems.",
                      "Building scalable Node.js backend workflows.",
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
                        📚 {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                display: "grid",
                gap: "1.5rem",
              }}
            >
              {/* SIGN UP FORM */}
              <div style={styles.card}>
                <div
                  style={{
                    padding: "clamp(1.5rem, 5vw, 2.5rem)",
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
                    Create Account
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(2rem, 6vw, 2.8rem)",
                      lineHeight: "1.05",
                      fontWeight: "800",
                      marginBottom: "1rem",
                      color: "#111",
                      letterSpacing: "-1px",
                    }}
                  >
                    Join thousands
                    <br />
                    of learners.
                  </h2>

                  <p
                    style={{
                      color: "#666",
                      lineHeight: "1.7",
                      marginBottom: "2rem",
                      fontSize: "clamp(0.95rem, 2vw, 1rem)",
                    }}
                  >
                    Sign up to start logging your daily learning journey and
                    connect with a community focused on growth.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: "grid",
                      gap: "1rem",
                    }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={styles.input}
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={styles.input}
                    />

                    <textarea
                      name="learningGoal"
                      placeholder="What are you currently learning?"
                      value={formData.learningGoal}
                      onChange={handleChange}
                      rows={5}
                      required
                      style={{
                        ...styles.input,
                        resize: "vertical",
                        fontFamily: "inherit",
                        minHeight: "140px",
                      }}
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      style={styles.button}
                    >
                      {loading ? "Submitting..." : "Start Learning"}
                      <ArrowRight size={18} />
                    </button>

                    {success && (
                      <div
                        style={{
                          background: "#ecfdf5",
                          color: "#065f46",
                          padding: "14px",
                          borderRadius: "14px",
                          fontWeight: "600",
                          textAlign: "center",
                          marginTop: "0.5rem",
                          lineHeight: "1.5",
                        }}
                      >
                        🎉 You're officially on the list!
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* FEATURE CARDS */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "1fr"
                    : "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "1rem",
                }}
              >
                {[
                  {
                    icon: <Flame size={26} />,
                    title: "Streaks",
                    desc: "Stay consistent.",
                  },
                  {
                    icon: <Users size={26} />,
                    title: "Community",
                    desc: "Learn together.",
                  },
                  {
                    icon: <BookOpen size={26} />,
                    title: "Knowledge",
                    desc: "Track progress.",
                  },
                ].map((card, index) => (
                  <motion.div
                    whileHover={{ y: -4 }}
                    key={index}
                    style={{
                      ...styles.card,
                      padding: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "1rem",
                      }}
                    >
                      {card.icon}
                    </div>

                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        color: "#666",
                        lineHeight: "1.5",
                        fontSize: "0.92rem",
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
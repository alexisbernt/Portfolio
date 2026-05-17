// src/pages/SignUp.js

import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../Footer";
import { motion } from "framer-motion";
import {
  Trophy,
  DollarSign,
  Mail,
  User,
  CheckCircle,
  Newspaper,
  Clock3,
  Brain,
} from "lucide-react";

// Initialize EmailJS
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agree: true,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const emailData = {
      user_name: formData.name,
      user_email: formData.email,
      competition_name: "Weekly News League",
      signup_date: new Date().toLocaleDateString(),
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailData
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);

          setStatus(
            "🏆 You're officially in the News League! Check your inbox."
          );

          setFormData({
            name: "",
            email: "",
            agree: true,
          });

          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error.text);

          setStatus("❌ Something went wrong. Please try again.");

          setLoading(false);
        }
      );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 45%, #1d4ed8 100%)",
      }}
    >
      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1.5rem",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            width: "100%",
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.1)",
                padding: "8px 14px",
                borderRadius: "999px",
                marginBottom: "1.5rem",
              }}
            >
              <Trophy size={18} color="#facc15" />

              <span
                style={{
                  color: "white",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                }}
              >
                Weekly News League
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: "1.1",
                marginBottom: "1rem",
                fontWeight: "900",
                color: "white",
              }}
            >
              Stay informed.
              <br />
              Win <span style={{ color: "#facc15" }}>$250.</span>
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#cbd5e1",
                marginBottom: "2rem",
                maxWidth: "560px",
              }}
            >
              Join the free News League competition. Every Monday you'll receive
              a quick 5-question news survey. The member with the best overall
              score wins the $250 cash prize.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                {
                  icon: <DollarSign size={20} color="#4ade80" />,
                  text: "$250 cash prize",
                },
                {
                  icon: <Clock3 size={20} color="#60a5fa" />,
                  text: "5 quick questions every Monday",
                },
                {
                  icon: <Brain size={20} color="#c084fc" />,
                  text: "Starting June 8th, 2026. Runs until July 13th, 2026.",
                },
                {
                  icon: <Newspaper size={20} color="#f97316" />,
                  text: "Stay updated on current events. Test your knowledge.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "#e2e8f0",
                  }}
                >
                  <CheckCircle color="#60a5fa" size={20} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "24px",
              padding: "2rem",
              backdropFilter: "blur(18px)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              boxSizing: "border-box",
            }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "0.5rem",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Join the Competition
              </h2>

              <p style={{ color: "#cbd5e1" }}>
                Free entry. Weekly challenge. $250 prize.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* NAME */}
              <div style={{ marginBottom: "1.2rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#e2e8f0",
                    fontWeight: "500",
                  }}
                >
                  Full Name
                </label>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "0 14px",
                  }}
                >
                  <User size={18} color="#94a3b8" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    style={{
                      width: "100%",
                      padding: "14px",
                      border: "none",
                      background: "transparent",
                      color: "white",
                      outline: "none",
                      fontSize: "1rem",
                    }}
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div style={{ marginBottom: "1.2rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#e2e8f0",
                    fontWeight: "500",
                  }}
                >
                  Email Address
                </label>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "0 14px",
                  }}
                >
                  <Mail size={18} color="#94a3b8" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    style={{
                      width: "100%",
                      padding: "14px",
                      border: "none",
                      background: "transparent",
                      color: "white",
                      outline: "none",
                      fontSize: "1rem",
                    }}
                  />
                </div>
              </div>

              {/* CHECKBOX */}
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "1.8rem",
                  color: "#cbd5e1",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  style={{ marginTop: "3px" }}
                />

                Receive the weekly Monday news survey and league updates.
              </label>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "15px",
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  boxShadow: "0 10px 25px rgba(37,99,235,0.4)",
                }}
              >
                <Trophy size={18} />

                {loading ? "Joining..." : "Enter the League"}
              </motion.button>
            </form>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  marginTop: "1.5rem",
                  color: "#93c5fd",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                {status}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          width: "100%",
          marginTop: "auto",
        }}
      >
        <Footer />
      </footer>
    </div>
  );
}

export default SignUp;
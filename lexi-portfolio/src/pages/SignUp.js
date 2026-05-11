// src/pages/SignUp.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../Footer";
import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Mail,
  User,
  CheckCircle,
} from "lucide-react";

// Initialize EmailJS
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    newsletter: true,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      ...formData,
      newsletter: formData.newsletter ? "Yes" : "No",
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

          setStatus("🚀 You're officially on the insider list!");

          setFormData({
            name: "",
            email: "",
            newsletter: true,
          });
        },
        (error) => {
          console.error("FAILED...", error.text);

          setStatus("❌ Something went wrong. Please try again.");
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
          "linear-gradient(135deg, #0f172a 0%, #111827 40%, #1e3a8a 100%)",
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
          <div style={{ width: "100%" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
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
                  backdropFilter: "blur(10px)",
                  flexWrap: "wrap",
                }}
              >
                <Sparkles size={18} color="#60a5fa" />
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "white",
                  }}
                >
                  Exclusive Community Access
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.2rem, 6vw, 4rem)",
                  lineHeight: "1.1",
                  marginBottom: "1rem",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                Join the people building the future.
              </h1>

              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.15rem)",
                  lineHeight: "1.8",
                  color: "#cbd5e1",
                  marginBottom: "2rem",
                  maxWidth: "550px",
                }}
              >
                Get exclusive insights, early feature access, productivity
                strategies, and member-only updates delivered straight to your
                inbox.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {[
                  "🚀 Early access to new features",
                  "📈 Weekly growth & productivity tips",
                  "🔥 Insider-only announcements",
                  "💡 Exclusive resources and tools",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#e2e8f0",
                      flexWrap: "wrap",
                    }}
                  >
                    <CheckCircle color="#60a5fa" size={20} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              backdropFilter: "blur(18px)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              boxSizing: "border-box",
            }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.3rem)",
                  marginBottom: "0.5rem",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Become an Insider
              </h2>

              <p style={{ color: "#cbd5e1" }}>
                Free to join. Valuable from day one.
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
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  style={{ marginTop: "3px" }}
                />
                Send me exclusive updates and insider content.
              </label>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
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
                <Rocket size={18} />
                Join Now
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

      {/* FOOTER ALWAYS AT BOTTOM */}
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
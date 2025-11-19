// src/pages/SignUp.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../Footer";

// Initialize EmailJS using your public key
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    newsletter: false,
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

    // Convert boolean to readable text if needed
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
          setStatus("✅ Signed up successfully!");
          setFormData({ name: "", email: "", newsletter: false });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("❌ Failed to submit. Try again later.");
        }
      );
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "1.5rem",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <h2>Join Our Mailing List</h2>

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "8px" }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "8px" }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "12px" }}>
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />{" "}
          I agree to receive non-spam newsletters.
        </label>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>

      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default SignUp;

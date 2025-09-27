// src/pages/SignUp.js
import React, { useState } from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Signed up successfully!");
        setFormData({ name: "", email: "", newsletter: false });
      } else {
        const errorData = await response.json();
        setStatus(`⚠️ ${errorData.error || "Failed to sign up."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Server error. Try again later.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", padding: "1.5rem", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fff" }}>
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
          style={{ padding: "10px 20px", backgroundColor: "#2563eb", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          Sign Up
        </button>
      </form>
      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </div>
  );
}

export default SignUp;

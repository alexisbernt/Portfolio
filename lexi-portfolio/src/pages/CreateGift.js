import React, { useState } from "react";
import emailjs from "emailjs-com"; // ✅ Import EmailJS
import "../css/CreateGift.css"; 
// import emailjs from "@emailjs/browser";

// Initialize EmailJS with your Public Key
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

function CreateGift() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    giftType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ EmailJS send call
    emailjs
    .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData
    )
    .then(
        (result) => {
        console.log("SUCCESS!", result.text);
        setSubmitted(true);
        },
        (error) => {
        console.error("FAILED...", error.text);
        }
    );

  };

  return (
    <div className="gift-form-container">
      <div className="gift-form-hero">
        <h1>Create Your Custom Gift</h1>
        <p>
          Tell us about your perfect gift idea — we’ll help make it sustainable,
          affordable, and personal.
        </p>
      </div>

      {submitted ? (
        <div className="gift-success">
          <h2>Thank you for reaching out!</h2>
          <p>We’ll contact you soon to discuss your custom gift details.</p>
        </div>
      ) : (
        <form className="gift-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Gift Type
            <select
              name="giftType"
              value={formData.giftType}
              onChange={handleChange}
              required
            >
              <option value="">Select a type...</option>
              <option value="eco-basket">Less than $10</option>
              <option value="upcycled-item">$10-20</option>
              <option value="personalized-box">$25</option>
              <option value="mystery-gift">$50</option>
            </select>
          </label>

          <label>
            Gift Description
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us what makes this gift special... Any particular themes, colors, or items?"
              required
            />
          </label>

          <button type="submit" className="gift-submit-btn">
            Send Gift Request →
          </button>
        </form>
      )}
    </div>
  );
}

export default CreateGift;

import React from "react";
import { Link } from "react-router-dom";

function StoryOne() {
  const container = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: '"Inter", system-ui, sans-serif',
    lineHeight: 1.7,
    color: "#111",
  };

  const titleStyle = {
    fontSize: "2.4rem",
    fontWeight: 800,
    marginBottom: "10px",
  };

  const subtitle = {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "20px",
  };

  const sectionHeader = {
    fontSize: "1.3rem",
    fontWeight: 700,
    marginTop: "30px",
    marginBottom: "10px",
  };

  return (
    <div style={container}>

      {/* Back Link */}
      <Link to="/" style={{ color: "#2563eb", textDecoration: "none" }}>
        ← Back to Home
      </Link>

      {/* Title */}
      <h1 style={titleStyle}>
        Global Tensions Rise in Eastern Europe
      </h1>

      <p style={subtitle}>
        A quick breakdown of what’s happening and why it matters.
      </p>

      {/* Image */}
      <img
        src="/blog1.jpg"
        alt="Eastern Europe tensions"
        style={{
          width: "100%",
          borderRadius: "12px",
          margin: "20px 0",
        }}
      />

      {/* CONTENT */}

      <h2 style={sectionHeader}>🧠 The Situation</h2>
      <p>
        Tensions in Eastern Europe have escalated in recent weeks as military
        activity, political disagreements, and economic pressure continue to
        build between regional powers. Increased troop movements and strategic
        positioning have raised concerns among global leaders.
      </p>

      <h2 style={sectionHeader}>🌍 Why It Matters</h2>
      <p>
        Conflicts in this region have historically had ripple effects across the
        world. Rising tensions could impact energy markets, global trade routes,
        and international alliances. For everyday people, this may translate to
        higher prices, economic uncertainty, or shifts in foreign policy.
      </p>

      <h2 style={sectionHeader}>⚖️ The Bigger Picture</h2>
      <p>
        This situation highlights the ongoing struggle between national
        sovereignty and global cooperation. Countries are balancing their own
        security interests while trying to avoid large-scale conflict.
      </p>

      <h2 style={sectionHeader}>🚀 What To Watch</h2>
      <ul>
        <li>Diplomatic talks between key nations</li>
        <li>Changes in military positioning</li>
        <li>Economic sanctions or trade restrictions</li>
      </ul>

      <h2 style={sectionHeader}>💡 In A Wink</h2>
      <p>
        Rising tensions don’t always mean conflict—but they do signal important
        changes. Staying informed helps you understand how global events may
        affect your future.
      </p>

    </div>
  );
}

export default StoryOne;
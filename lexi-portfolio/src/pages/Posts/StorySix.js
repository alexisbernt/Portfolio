import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer";

function StorySix() {

  const page = {
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
    paddingBottom: "60px",
  };

  const container = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: '"Inter", system-ui, sans-serif',
    lineHeight: 1.8,
    color: "#111",
  };

  const card = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  };

  const backLink = {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: 500,
    display: "inline-block",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "2.6rem",
    fontWeight: 800,
    marginBottom: "10px",
    lineHeight: 1.2,
  };

  const subtitle = {
    fontSize: "1.15rem",
    color: "#6b7280",
    marginBottom: "30px",
  };

    const imageStyle = {
    width: "100%",
    maxWidth: "500px",   // controls size
    display: "block",
    margin: "0 auto 30px auto", // centers it + spacing below
    borderRadius: "12px",
    };

  const sectionHeader = {
    fontSize: "1.4rem",
    fontWeight: 700,
    marginTop: "40px",
    marginBottom: "12px",
  };

  const paragraph = {
    marginBottom: "16px",
    color: "#374151",
  };

  const listStyle = {
    paddingLeft: "20px",
    marginBottom: "16px",
    color: "#374151",
  };

  return (
    <div style={page}>
      <div style={container}>

        <Link to="/" style={backLink}>
          ← Back to Home
        </Link>

        <div style={card}>

          {/* Title */}
          <h1 style={titleStyle}>
            Adulting 101: The Fundamentals of What Nobody Tells You
          </h1>

          <p style={subtitle}>
            A real look at your early 20s—where everything starts shifting and nothing feels fully figured out.
          </p>

          {/* Hero Image */}
          <img 
            src="/adulting-101.png" 
            alt="Adulting 101" 
            style={imageStyle} 
          />

          {/* CONTENT */}

          <h2 style={sectionHeader}>🧠 The Shift</h2>
          <p style={paragraph}>
            There’s a moment in your early 20s where things quietly shift. No one announces it. No ceremony. No guidebook.
            Just a growing realization that you’re now expected to figure it out—your career, identity, relationships,
            beliefs—all while the world itself feels increasingly uncertain.
          </p>
          <p style={paragraph}>
            On top of that, somehow, you’re supposed to do it all correctly.
          </p>
          <p style={paragraph}>
            There are periods where everything feels like it’s going sideways—relationships fading, work stress building,
            finances uncertain, and an overwhelming list of things to do.
          </p>

          <h2 style={sectionHeader}>🤖 The Constant: “You Used AI for That, Right?”</h2>
          <p style={paragraph}>
            One of the strangest parts of modern adulting is the assumption that your work isn’t fully yours.
          </p>
          <p style={paragraph}>
            Write something thoughtful? “ChatGPT?” <br />
            Build something impressive? “AI helped, right?”
          </p>
          <p style={paragraph}>
            Tools are becoming normal. They help—but they also blur the line between assistance and authorship.
          </p>
          <p style={paragraph}>
            The truth: you’re not wrong for using tools. But you are responsible for thinking.
          </p>

          <h2 style={sectionHeader}>🌍 The World Is Complicated</h2>
          <p style={paragraph}>
            At some point, you start paying attention to the world beyond headlines—and it gets overwhelming fast.
          </p>
          <p style={paragraph}>
            You realize global instability isn’t isolated. It’s part of a bigger, constantly evolving system.
          </p>
          <p style={paragraph}>
            There is no clear “good vs. bad” anymore.
          </p>

          <h2 style={sectionHeader}>🧩 Your Brain Is Still Catching Up</h2>
          <p style={paragraph}>
            While everything is happening externally, something just as intense is happening internally.
          </p>
          <ul style={listStyle}>
            <li>Overthinking small decisions</li>
            <li>Questioning your path</li>
            <li>Comparing yourself to others</li>
            <li>Feeling behind (even when you’re not)</li>
            <li>Shifting between confidence and doubt</li>
          </ul>
          <p style={paragraph}>
            Your brain is still developing. Your identity is still forming. That’s where the friction comes from.
          </p>

          <h2 style={sectionHeader}>🔍 The Unspoken Truth</h2>
          <p style={paragraph}>
            Nobody has it fully figured out.
          </p>
          <p style={paragraph}>
            Everyone is making decisions with incomplete information and adjusting as they go.
          </p>

          <h2 style={sectionHeader}>💡 What Actually Helps</h2>

          <h3 style={{ marginTop: "20px" }}>1. Use Technology, But Think for Yourself</h3>
          <ul style={listStyle}>
            <li>Do I actually understand this?</li>
            <li>Would I stand behind this without the tool?</li>
          </ul>

          <h3 style={{ marginTop: "20px" }}>2. Stay Informed Without Overloading Yourself</h3>
          <ul style={listStyle}>
            <li>Follow a few reliable sources</li>
            <li>Focus on context, not just headlines</li>
            <li>Accept multiple perspectives</li>
          </ul>

          <h3 style={{ marginTop: "20px" }}>3. Regulate Your Emotions</h3>
          <ul style={listStyle}>
            <li>Build small habits</li>
            <li>Create space before reacting</li>
            <li>Treat emotions as signals</li>
          </ul>

          <h2 style={sectionHeader}>🧭 Final Thought</h2>
          <p style={paragraph}>
            Adulting isn’t about having everything figured out.
          </p>
          <p style={paragraph}>
            If it feels overwhelming or uncertain, you’re not behind.
          </p>
          <p style={paragraph}>
            You’re right on schedule.
          </p>

        </div>

        <Footer />
      </div>
    </div>
  );
}

export default StorySix;
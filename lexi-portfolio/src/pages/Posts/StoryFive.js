import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer";

function StoryFive() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
        How I coded this website - from scratch and for free 
      </h1>

      <p style={subtitle}>
        Exposing how I built this website from scratch using free tools and resources. Plus, an awareness of some of the cybersecurity risks that come with building your own site and how to mitigate them.
      </p>

      {/* CONTENT */}

      <h2 style={sectionHeader}>🧠 The Story</h2>
      <p>
        I recently had the opportunity to meet Amber Ferguson, and it's one of those conversations that has stuck with me. Her awareness of everything happening around us is phenomenal. Not just surface-level awareness, but a deep understanding of how culture, media, and society all connect in real time.
      </p>
      <p>
        She is a real professional. The way she thinks, listens, and connects ideas is through intentional story. 
      </p>
      <p>
        For me, seeing that this early in my career was incredibly valuable. It set a standard for what it means to not just work in a field, but to truly understand the world surrounding it. Amber demonstrates that is what journalists do.
      </p>

      <h2 style={sectionHeader}>💬 What We Talked About</h2>
      <p>
        Our conversation covered a wide range of topics.
      </p>
      <p>
        We talked about WAGs (wives and girlfriends of NFL players) and how they influence culture more than people give them credit for. What seems like a niche topic actually ties into branding, media visibility, and identity.
      </p>
      <p>
        We also discussed what’s happening in the beauty industry. From luxury services like $7,500 hair extensions to the broader idea of beauty as status, it’s clear the space is evolving fast and not always in obvious ways.
      </p>
      <p>
        From there, the conversation shifted to steroid usage among young men. This wasn’t just about fitness, it connected to body image, social pressure, and how media influences perception. 
      </p>
      <p>
        We even touched on trending TV shows and how entertainment continues to shape conversations, identity, and what people pay attention to on a daily basis. Specifically, Survivor 50 and Real Housewives.
      </p>

      <h2 style={sectionHeader}>⚖️ Why It Matters</h2>
      <p>
        What made this conversation stand out wasn’t just the topics. It was the fact that everything has a deeper story. Nothing exists in isolation. 
      </p>
      <p>
        That’s what made it so valuable for me. Early in your career, it’s easy to focus narrowly and just on the headline. But this experience showed me how important it is to zoom in and understand the details as well.
      </p>

      <h2 style={sectionHeader}>🌍 Takeaways</h2>
      <p>
        If there’s one takeaway from meeting Amber Ferguson, it’s this: Being great at what you do isn’t just about knowing the information. It’s about awareness and detail.
      </p>
      <p>
        Awareness of trends. Awareness of people. Awareness of how everything happening around us connects.
      </p>

      <h2 style={sectionHeader}>💡 Sources</h2>
      <p>NY Post – NYC stylist charging $7,500 for hair extensions</p>
      <p>NFL – Celebrity WAGs gallery</p>
      <p>PMC – Hair product chemical exposure research</p>
      <p>CBC – Steroid use and male body dysmorphia coverage</p>

      <Footer />

    </div>
  );
}

export default StoryFive;
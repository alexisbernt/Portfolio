import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function StoryThree() {

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
        AI Is Moving Fast: What You Should Be Watching Right Now
      </h1>

      <p style={subtitle}>
        A quick breakdown of the biggest forces shaping AI—from global competition to lawsuits and next-gen models.
      </p>

      {/* YouTube Embed */}
      <div style={{ margin: "30px 0", display: "flex", justifyContent: "center" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/2ePf9rue1Ao"
          title="AI Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: "540px", borderRadius: "12px" }}
        />
      </div>

      {/* CONTENT */}

      <h2 style={sectionHeader}>🧠 The Story</h2>
      <p>
        So much is happening with AI right now. But if you want to actually track where some things are going, here are a few key areas worth paying attention to.
      </p>
      <p>
        First, there’s a growing global race (especially between the United States and China) to build the most powerful and efficient AI models. Data from Stanford’s AI Index and recent reporting shows that performance gaps are shrinking. On the flip side, it is investment and competition are accelerating.
      </p>
      <p>
        At the same time, AI-specific lawsuits are starting to shape the industry. One of the most important cases right now involves xAI suing the state of Colorado over a new law targeting algorithmic discrimination. Beyond that, we’re seeing legal battles over copyright, data center pollution, and the broader ethical responsibilities of AI companies.
      </p>
      <p>
        And while all of this is happening, the technology itself is evolving quickly. AI agents and more advanced models are moving from concept to reality faster than expected.
      </p>

      <h2 style={sectionHeader}>🤖 What’s Changing</h2>
      <p>
        New model developments are pushing AI beyond simple chat interfaces. Projects like Anthropic’s Glasswing and Mythos are focused on more capable, structured reasoning systems, while OpenAI’s Spud model represents a shift toward more efficient and adaptable architectures.
      </p>
      <p>
        These systems are part of a broader move toward AI agents—tools that don’t just respond to prompts but can complete tasks, make decisions, and interact with software on their own.
      </p>
      <p>
        According to sources like MIT Technology Review and industry newsletters, this shift is happening faster than many expected. What used to feel experimental is quickly becoming usable in real workflows.
      </p>

      <h2 style={sectionHeader}>⚖️ Why It Matters</h2>
      <p>
        The combination of rapid innovation and increasing legal pressure is creating a unique moment. On one side, companies are racing to build better models. On the other, governments and courts are trying to define the rules in real time.
      </p>
      <p>
        The outcome of lawsuits—like the one in Colorado—could determine how much control regulators have over AI systems. At the same time, decisions around copyright and environmental impact could reshape how companies train and deploy their models.
      </p>
      <p>
        Meanwhile, advances in agents and model design are bringing AI closer to actually replacing workflows, not just assisting with them.
      </p>

      <h2 style={sectionHeader}>🌍 The Bigger Picture</h2>
      <p>
        When you zoom out, all of this points to one thing: AI is no longer just a technology trend—it’s becoming infrastructure.
      </p>
      <p>
        There’s a global race to build the best models, a legal system trying to catch up, and a wave of new tools that are fundamentally changing how work gets done.
      </p>
      <p>
        If you’re trying to keep up, don’t just watch product launches. Watch the competition between countries, the court cases, and the shift toward AI agents. That’s where the real story is unfolding.
      </p>

      <h2 style={sectionHeader}>💡 Sources</h2>
      <p>Stanford HAI AI Index Report</p>
      <p>MIT Technology Review, “State of AI” coverage</p>
      <p>Colorado Sun, xAI lawsuit coverage</p>
      <p>Anthropic Glasswing announcement</p>
      <p>MindStudio, OpenAI Spud model breakdown</p>
      <p>The Rundown AI newsletter</p>

    </div>
  );
}

export default StoryThree;
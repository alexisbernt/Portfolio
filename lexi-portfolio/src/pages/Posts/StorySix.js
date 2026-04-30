import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer";

function StorySix() {

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
        Adulting 101: The Fundamentals of What Nobody Tells You
      </h1>

      <p style={subtitle}>
        A real look at your early 20s—where everything starts shifting and nothing feels fully figured out.
      </p>

      {/* CONTENT */}

      <h2 style={sectionHeader}>🧠 The Shift</h2>
      <p>
        There’s a moment in your early 20s where things quietly shift. No one announces it. No ceremony. No guidebook. 
        Just a growing realization that you’re now expected to figure it out. Your career, identity, relationships, beliefs, and all while the world itself feels increasingly uncertain.
      </p>
      <p>
        On top of that, somehow, you’re supposed to do it all correctly.
      </p>
      <p>
        Personally, I experience these periods where it feels like so many things in my life are going sideways. 
        Fading relationships, work stress, financial uncertainty, not liking my appearance, an overwhelming amount of things to do. 
        If you’re feeling any of this, I’ve candidly spoken with multiple other 20-some year olds and have done a deep dive for some answers on what might help overcome the overflow of adulthood.
      </p>

      <h2 style={sectionHeader}>🤖 The Constant: “You Used AI for That, Right?”</h2>
      <p>
        One of the strangest parts of modern adulting is the quiet assumption that your work isn’t fully yours.
      </p>
      <p>
        Write something thoughtful? “ChatGPT?”
        <br />
        Build something impressive? “AI helped, right?”
      </p>
      <p>
       We’re living through a moment where tools like AI are becoming normal. 
       While they can make work easier, they also blur the line between assistance and authorship. 
       That creates a weird tension: you’re trying to grow, learn, and produce meaningful work… while people question whether it’s even yours.
      </p>
      <p>
        The truth?
        You’re not wrong for using tools. But you are responsible for thinking.
      </p>
      <p>
        Adulting today means learning how to integrate technology without letting it replace your voice. That’s harder than it sounds. 
      </p>

      <h2 style={sectionHeader}>🌍 The World Is Complicated</h2>
      <p>
        At some point, you start paying attention to the world beyond headlines—and it gets overwhelming fast.
      </p>
      <p>
        You see ongoing conflicts across multiple regions. You realize global instability isn’t isolated—it’s
        part of a larger pattern. Countries are constantly balancing interests, power, and uncertainty.
      </p>
      <p>
        Here’s what nobody tells you:
        <br />
        There is no clear “good vs. bad” anymore.
      </p>
      <p>
        Every side has a story. Every decision has consequences. Even experts disagree. Even leaders don’t
        fully know what comes next.
      </p>
      <p>
        Adulting means learning to sit with that discomfort.
      </p>

      <h2 style={sectionHeader}>🧩 Your Brain Is Still Catching Up</h2>
      <p>
        While everything is happening externally, something just as intense is happening internally.
      </p>
      <p>
        Your early 20s are a kind of quiet chaos:
      </p>
      <ul>
        <li>Overthinking small decisions</li>
        <li>Questioning your path</li>
        <li>Comparing yourself to others</li>
        <li>Feeling behind (even when you’re not)</li>
        <li>Shifting between confidence and doubt</li>
      </ul>
      <p>
        Your brain is still developing. Your identity is still forming. And yet, you’re being asked to make
        long-term decisions with limited clarity.
      </p>
      <p>
        That’s where the friction comes from.
      </p>

      <h2 style={sectionHeader}>🔍 The Unspoken Truth</h2>
      <p>
        Nobody has it fully figured out.
      </p>
      <p>
        Not celebrities. Not politicians. Not your boss. Not your professors. Not the people posting their
        “perfect” lives online.
      </p>
      <p>
        Everyone is making decisions with incomplete information and adjusting as they go.
      </p>
      <p>
        That realization can feel unsettling—but it’s also freeing.
      </p>

      <h2 style={sectionHeader}>💡 What Actually Helps</h2>

      <h3 style={{ marginTop: "20px" }}>1. Use Technology, But Think for Yourself</h3>
      <p>
        AI is a tool, not a replacement for effort. Use it to brainstorm or refine—but always ask:
      </p>
      <ul>
        <li>Do I actually understand this?</li>
        <li>Would I stand behind this without the tool?</li>
      </ul>
      <p>
        One practical habit: keep a running list of things you don’t understand. Come back to them. Learn them.
        Check them off. That’s how you build real knowledge.
      </p>

      <h3 style={{ marginTop: "20px" }}>2. Stay Informed Without Overloading Yourself</h3>
      <p>
        Instead of doom-scrolling:
      </p>
      <ul>
        <li>Follow a few reliable sources</li>
        <li>Focus on context, not just headlines</li>
        <li>Accept that multiple perspectives can be true</li>
      </ul>
      <p>
        You don’t need to solve global problems—you just need to understand them well enough to think critically.
      </p>

      <h3 style={{ marginTop: "20px" }}>3. Regulate Your Emotions (Don’t Eliminate Them)</h3>
      <p>
        You won’t eliminate stress or uncertainty. That’s not realistic.
      </p>
      <p>
        Instead:
      </p>
      <ul>
        <li>Build small habits (walking, journaling, lifting, quiet time)</li>
        <li>Create space between reaction and response</li>
        <li>Treat emotions as signals, not instructions</li>
      </ul>
      <p>
        Emotional control isn’t about feeling less—it’s about responding better.
      </p>

      <h2 style={sectionHeader}>🧭 Final Thought</h2>
      <p>
        Adulting isn’t about having everything figured out.
      </p>
      <p>
        It’s about learning how to operate with what you know, adapting as you go, and focusing on what you
        can control.
      </p>
      <p>
        If it feels overwhelming or uncertain, that doesn’t mean you’re behind.
      </p>
      <p>
        It means you’re right on schedule.
      </p>

      <Footer />

    </div>
  );
}

export default StorySix;
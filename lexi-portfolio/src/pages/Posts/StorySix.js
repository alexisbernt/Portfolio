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

          {/* HERO SECTION (IMAGE + INTRO TEXT) */}
            <div
            style={{
                display: "flex",
                gap: "30px",
                alignItems: "center",
                flexWrap: "wrap", // makes it mobile-friendly
                marginBottom: "30px",
            }}
            >
            {/* Image */}
            <img
                src="/adulting-101.png"
                alt="Adulting 101"
                style={{
                width: "100%",
                maxWidth: "380px",
                borderRadius: "12px",
                flex: "1",
                }}
            />

            {/* Right-side text */}
            <div style={{ flex: "1", minWidth: "260px" }}>
                <p style={{ color: "#374151", marginBottom: "12px" }}>
                There’s a moment in your early 20s where things quietly shift. No one announces it. No ceremony. 
                No guidebook. Just a growing realization that you’re now expected to figure it out. 
                Your career, identity, relationships, beliefs, and all while the world itself feels increasingly uncertain.
                </p>

                <p style={{ color: "#374151", marginBottom: "12px" }}>
                On top of that, somehow, you’re supposed to do it all correctly.
                </p>

                <p style={{ color: "#374151" }}>
                Personally, I experience these periods where it feels like so many things in my life are going sideways. 
                Fading relationships, work stress, financial uncertainty, not liking my appearance, an overwhelming amount of things to do. 
                If you’re feeling any of this, I’ve candidly spoken with multiple other 20-some year olds and have done a deep dive for some answers on what might help overcome the overflow of adulthood.
                </p>
            </div>
            </div>

          {/* CONTENT */}

          <h2 style={sectionHeader}>🤖 The Constant - “You Must Be Using AI for That, Right?”</h2>
          <p style={paragraph}>
            One of the strangest parts of modern adulting is the quiet assumption that your work isn’t fully yours.
          </p>
          <p style={paragraph}>
            Write something thoughtful? “ChatGPT?” <br />
            Build something impressive? “AI helped, right?”
          </p>
          <p style={paragraph}>
            Tools are becoming normal. They help, but they also blur the line between assistance and authorship.
          </p>
          <p style={paragraph}>
            We’re living through a moment where tools like AI are becoming normal. While they can make work easier, they also blur the line between assistance and authorship. 
            That creates a weird tension: you’re trying to grow, learn, and produce meaningful work… while people question whether it’s even yours.
          </p>
          <p style={paragraph}>
            The truth?
            You’re not wrong for using tools. But you are responsible for thinking.
            </p>
          <p style={paragraph}>
            Adulting today means learning how to integrate technology without letting it replace your voice. 
            That’s harder than it sounds. 
          </p>

          <h2 style={sectionHeader}>🌍 The World Is Complicated (And Nobody Has the Answers)</h2>
          <p style={paragraph}>
            At some point, you start paying attention to the news. Not just headlines, but the patterns. And it’s overwhelming.
          </p>
          <p style={paragraph}>
            You see ongoing conflicts. Some big ones right now are the war in Ukraine, tensions in Gaza, and rising instability in places like Sudan and Myanmar. 
            These aren’t isolated events. 
            Instead, they’re part of a global pattern of conflict that continues to grow and evolve.
          </p>
          <p style={paragraph}>
            The U.S. is often involved, financially, diplomatically, or militarily, in multiple regions at once. 
            At the same time, experts warn that the risk of broader global conflict is still very real.
          </p>
          <p style={paragraph}>
            Here’s the part nobody tells you:
            There is no clear “good vs. bad” narrative anymore.
          </p>
          <p style={paragraph}>
            Every side has a story. Every country has interests. Every decision has consequences. Even experts disagree. 
            Even leaders don’t fully know what will happen next.
          </p>
          <p style={paragraph}>
            Adulting means sitting with that discomfort. Realizing the world is messy, and certainty is rare.
         </p>

          <h2 style={sectionHeader}>🧩 Your Brain Is Still Catching Up</h2>
          <p style={paragraph}>
            While all of this is happening externally, something just as intense is happening internally.
            Your early 20s are emotional chaos, but not in a dramatic, obvious way. 
          </p>
          <p style={paragraph}>
            It’s subtle:
            </p>
          <ul style={listStyle}>
            <li>Overthinking small decisions</li>
            <li>Questioning your path</li>
            <li>Comparing yourself to others and letting it steal your joy</li>
            <li>Feeling behind (even when you’re not)</li>
            <li>Shifting between confidence and doubt</li>
          </ul>
          <p style={paragraph}>
            Medical experts explain that your brain is still developing. That means your identity is still forming. 
            And, while all of this is happening, you’re being asked to make long-term decisions with short-term clarity.
            That creates friction.
        </p>
        <p style={paragraph}>
            We’re learning how to regulate emotions we didn’t fully understand as a teenager. 
            Then there’s stress, competition, uncertainty, and pressure. And there’s no universal method. What works for one person doesn’t work for another.
            That’s why adulting feels so personal - and so confusing.
            </p>

          <h2 style={sectionHeader}>🔍 The Unspoken Truth</h2>
          <p style={paragraph}>
            Nobody has it fully figured out.
          </p>
          <p style={paragraph}>
            Not the celebrity. Not the politician. Not your boss. Not your professors.
            Not the people on networks all across the spectrum from Instagram to LinkedIn posting about their “perfect journeys.”
          </p>
          <p style={paragraph}>
            They’re just going along in the same process: making decisions with incomplete information, adapting as they go.
            That realization can be unsettling… but also freeing.
          </p>

          <h2 style={sectionHeader}>💡 What Actually Helps</h2>
          <h3 style={{ marginTop: "20px" }}>1. Use Technology, But Think for Yourself: </h3>
            <p style={paragraph}>
                AI is a tool, not a replacement for effort. Use it to brainstorm, refine, or accelerate. Then, always ask:
            </p>
          <ul style={listStyle}>
            <li>Do I actually understand this?</li>
            <li>Would I stand behind this without the tool?</li>
          </ul>
                <p style={paragraph}>
                    If not, get someone or something to help explain it. What I’ve started to do is make a list. 
                    That list lives in my planner. If I don’t understand something I’ll write it down. 
                    If I have time then and there, I’ll research it and then get to check it off the list as understood. 
                    If I don’t have time, it lives in the planner not checked off until I get time to learn more. You naturally prioritize that way.
                </p>
          <h3 style={{ marginTop: "20px" }}>2. Follow the News Without Letting It Overwhelm You: </h3>
          <p style={paragraph}>
                Instead of doom-scrolling:
            </p>
          <ul style={listStyle}>
            <li>Pick 2–3 reliable sources and stick to them</li>
            <li>Focus on context, not just headlines</li>
            <li>Accept that multiple perspectives can be true at once</li>
          </ul>
          <p style={paragraph}>
            You’re not trying to solve global conflict. You’re trying to understand it well enough to think critically. 
            And, if you want to try to do your best to solve a problem you’re really passionate about, 
            the beauty of things like the internet and social media is you can probably find some type of way to get involved. 
            </p>

          <h3 style={{ marginTop: "20px" }}>3. Practice Regulating Your Emotions: </h3>
          <p style={paragraph}>
                You won’t “fix” stress or uncertainty. That’s not the goal. Instead:
            </p>
          <ul style={listStyle}>
            <li>Build small habits (walks, journaling, lifting weights, silence)</li>
            <li>Create space between reaction and response (know that time helps everything)</li>
            <li>Recognize that emotions are signals, not instructions (ask 'how am I feeling?')</li>
          </ul>

          <h2 style={sectionHeader}>🧭 Final Thought</h2>
          <p style={paragraph}>
            Adulting isn’t about having everything figured out.
          </p>
          <p style={paragraph}>
            It’s about learning how to operate based on past experiences and based on what you can control. 
          </p>
          <p style={paragraph}>
            And if it feels confusing, overwhelming, or uncertain, know you’re not behind. You’re right on schedule.
          </p>

        </div>

        <Footer />
      </div>
    </div>
  );
}

export default StorySix;
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
        The World's Biggest Soccer Party Has Officially Begun
      </h1>

      <p style={subtitle}>
        The 2026 FIFA World Cup has kicked off across North America, and the energy is impossible to ignore.
      </p>

      {/* CONTENT */}

      <h2 style={sectionHeader}>⚽ The Story</h2>
      <p>
        The wait is over. The FIFA World Cup 2026 is finally underway, and the energy surrounding the tournament is already impossible to ignore.
      </p>
      <p>
        For the first time in history, the World Cup is being hosted across three countries—Canada, Mexico, and the United States—and it's also the largest tournament ever, featuring 48 national teams competing on soccer's biggest stage. The opening match saw co-host Mexico take on South Africa, officially kicking off a month of unforgettable moments, dramatic upsets, and global celebration.
      </p>

      <h2 style={sectionHeader}>🏟️ The Atmosphere</h2>
      <p>
        North American fans have wasted no time embracing the excitement. Stadiums are filling, watch parties are popping up across major cities, and host venues are preparing to welcome millions of visitors. In the United States alone, dozens of matches will be played, including six at the San Francisco Bay Area Stadium, formerly known as Levi's Stadium.
      </p>

      <h2 style={sectionHeader}>🇺🇸🇨🇦 The Host Nations</h2>
      <p>
        The host nations are already making headlines. Team USA opened its tournament with an impressive 4–1 victory over Paraguay, while Canada began its World Cup journey with a hard-fought draw against Bosnia and Herzegovina.
      </p>

      <h2 style={sectionHeader}>🌍 Why It Matters</h2>
      <p>
        What makes the World Cup special isn't just the soccer. It's the feeling that, for a few weeks, the entire planet is watching the same event. Different languages, different cultures, different flags—but one shared passion. Every match brings a new story, a new hero, and a new reason to believe anything can happen.
      </p>

      <h2 style={sectionHeader}>🔥 Takeaways</h2>
      <p>
        With dozens of matches still ahead and some of the sport's biggest stars yet to take the field, the 2026 FIFA World Cup is just getting started. Grab your jersey, pick a favorite team (or three), and enjoy the ride. The world's biggest sporting event is officially here.
      </p>

      <Footer />

    </div>
  );
}

export default StoryFive;
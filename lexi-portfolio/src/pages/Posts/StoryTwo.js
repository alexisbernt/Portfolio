import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function StoryTwo() {

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
        Women’s Sports, Volleyball, and Brand Launches: What’s Trending Right Now
      </h1>

      <p style={subtitle}>
        A quick breakdown of what’s happening in volleyball and the rise of creator-led brands.
      </p>

      {/* YouTube Embed */}
      <div style={{ margin: "30px 0", display: "flex", justifyContent: "center" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/tnB1ZZqbtbA"
          title="YouTube Short"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: "540px", borderRadius: "12px" }}
        />
      </div>

      {/* CONTENT */}

      <h2 style={sectionHeader}>🧠 The Story</h2>
      <p>
        Women’s sports are having a moment. If you’re paying attention like Reese, my cousin and a college volleyball player, you know it’s not just about what happens on the court. It’s about culture, momentum, and the growing intersection between sports, media, and business.
      </p>
      <p>
        From high-stakes volleyball matchups to influencers launching full-scale brands, the landscape is evolving fast... and it’s all connected. Reese stays tapped into everything: the game, professional sports, the beauty/content scene, and what’s trending in the world.
      </p>
      <p>
        One of the biggest moments in volleyball right now comes from the League One Volleyball (LOVB) playoffs. In a dramatic semifinal matchup, Austin secured its place in the championship after defeating Atlanta in a high-pressure “golden set.” After Atlanta pushed the series to the limit, Austin pulled away with a 15–8 win in the final deciding set.
      </p>
      <p>
        This golden set format—fast-paced and unforgiving—perfectly captures the intensity and growth of the sport. Volleyball is becoming faster, more competitive, and more exciting for fans to follow as it is quickly growing on a professional level.
      </p>

      <h2 style={sectionHeader}>🌍 Why It Matters</h2>
      <p>
        Volleyball’s rise is part of a much larger trend: Women’s sports are gaining visibility and investment. With stronger media coverage, expanding professional leagues, and a built-in pipeline from college athletics, the game is reaching new audiences every day.
      </p>
      <p>
        What makes this moment especially important is how athletes and fans are engaging beyond just the game. There’s a cultural shift happening where sports are no longer separate from media, branding, and storytelling. Now they are all connected.
      </p>
      <p>
        Creators are stepping into a new role. Instead of just promoting products, they’re building companies. A perfect example is Alix Earle, who recently launched her own skincare brand.
      </p>
      <p>
        This move highlights a bigger trend: Creators now have the ability to turn influence into full-scale businesses. With loyal audiences and direct platforms like TikTok and Instagram, they can launch brands with immediate traction and credibility.
      </p>

      <h2 style={sectionHeader}>⚖️ The Bigger Picture</h2>
      <p>
        What’s fascinating is how these worlds overlap. Athletes are becoming creators, creators are there is more overlap between business and online presence.
      </p>
      <p>
        Women’s volleyball is growing fast, and moments like Austin’s nailbiter of a playoff win show just how exciting the sport has become. At the same time, creator-led brands are proving that influence can translate into real business success.
      </p>
      <p>
        Put together, we are in a new era. One where sports, culture, and entrepreneurship are all moving in an intertwined direction. All fast, competitive, and impossible to ignore.
      </p>

      <h2 style={sectionHeader}>💡 Sources</h2>
      <p>
        KXAN, "Austin clinches LOVB championship series berth with golden set win over Atlanta"
      </p>
      <p>
        Real Actives: https://www.instagram.com/realeactives/
      </p>

    </div>
  );
}

export default StoryTwo;
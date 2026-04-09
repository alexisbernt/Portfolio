import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function StoryOne() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Re-process embeds if already loaded
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
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
        Seeking an understanding of the Royal Family and their endeavors
      </h1>

      <p style={subtitle}>
        A quick breakdown of what’s happening and why it matters.
      </p>

      {/* Instagram Embed */}
      <div style={{ margin: "30px 0", display: "flex", justifyContent: "center" }}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DW5Cv3VgmOr/"
          data-instgrm-version="14"
          style={{
            maxWidth: "540px",
            width: "100%",
          }}
        />
      </div>

      {/* CONTENT */}

      <h2 style={sectionHeader}>🧠 The Story</h2>
      <p>
        As an American, I’ve always found the British Royal Family to be fascinating. There’s something captivating about the blend of history, ceremony, and modern public life that surrounds them. At the same time, it can be incredibly complex and difficult to keep up with. Between evolving roles, public appearances, and constant media coverage, understanding what’s actually happening requires more than just the occasional headline.
At its core, the Royal Family operates within a constitutional monarchy. This means the monarch serves as the ceremonial head of state, while elected officials govern the country.
Still, that simple explanation barely scratches the surface of “What are royals?”. The relationships, responsibilities, and public expectations placed on different members of the family create a dynamic system full of surprises. As someone used to the structure of American government, where we operate on our own three branches of government, the Royal Family presents a very different kind of influence: Tradition, symbolism, and public perception.
That’s why discovering the Off With Their Headlines podcast drew me in. Hosted by Amanda Matta (known for “Matta of Fact”) and Meredith Constant, the podcast breaks down royal news in a way that’s both engaging and accessible. It takes all of these different royal headlines and turns them into something you can actually follow and enjoy.
Inspired by the podcast, I reached out to Amanda (https://www.amandamatta.com/), who generously agreed to collaborate with me on a comprehensive rundown of everything “Royal” that has happened so far in 2026. 
      </p>

      <h2 style={sectionHeader}>🌍 Why It Matters</h2>
      <p>
        To say there’s a lot would be an understatement. From major public appearances and evolving royal roles to ongoing media narratives and global reactions, this year alone has been packed with developments that highlight just how influential - and scrutinized - the Royal Family remains.
What stood out most to me through this collaboration was not just the volume of events, but the context behind them. Amanda’s expertise helped me better understand not only what is happening, but why it matters: How certain actions fit into long-standing traditions. How the institution continues to adapt in a modern world. How we can learn and be inspired by different systems.
Paying attention to systems like the British monarchy has reinforced something important: Understanding different forms of government matters. Even though the United States does not operate under a monarchy, examining how other countries structure leadership, tradition, and public accountability provides valuable perspective. It challenges assumptions, deepens global awareness, and highlights the many ways power and influence can take shape.
      </p>

      <h2 style={sectionHeader}>⚖️ The Bigger Picture</h2>
        <p>
        Through this experience, I’ve gained a much clearer understanding of how the Royal Family functions, the significance of their actions, and what might come next. Thanks to voices like Amanda’s, it’s a lot easier (and more interesting) to follow along. 

        If 2026 has proven anything so far, it’s that the story of the Royal Family is far from static. Our world is far from static. It’s evolving in real time. 

        To start finally feeling equipped to keep up, check out the Royal Family Rundown of 2026{" "}
        <a
            href="https://www.instagram.com/p/DW5Cv3VgmOr/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
            color: "#2563eb",
            fontWeight: 600,
            textDecoration: "underline",
            }}
        >
            here
        </a>.
        </p>

      {/* <h2 style={sectionHeader}>🚀 What To Watch</h2>
      <ul>
        <li>Diplomatic talks between key nations</li>
        <li>Changes in military positioning</li>
        <li>Economic sanctions or trade restrictions</li>
      </ul> */}

      <h2 style={sectionHeader}>💡 Sources shown in order: </h2>
      <p>
        The Australian Women's Weekly, "The complete list of current working royals"
Time, "King Charles' Upcoming State Visit to the U.S. With Trump, Explained"
NPR, "King Charles III says early diagnosis allows his cancer treatment to be reduced"
CNN, "King Charles makes surprise front-row appearance at London Fashion Week"
NPR, "U.K.'s ex-Prince Andrew is released after his arrest over Epstein revelations"
BBC News, "Police asking Andrew's protection officers what 'they saw or heard' as part of Epstein files review"
National Post, "UK royal family's dilemma over Andrew's daughters"
USA Today, "Princesses Beatrice and Eugenie skip Easter after dad Andrew's arrest"
Town & Country, "Former Prince Andrew's Absence From the Easter Sunday Service Marks a New Chapter for the Royal Family"
      </p>

    </div>
  );
}

export default StoryOne;
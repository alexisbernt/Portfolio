import "../../css/Post2.css";
import Footer from "../../Footer";

function Post2() {
  return (
    <div className="post-page">
      {/* 🔹 Hero Section */}
      <section className="post-hero">
        <div className="post-hero-content">
          <h1>AI Prompt Formula</h1>
          <p className="subtitle">How do you optimize for the best AI-generated responses?</p>
          <p className="tagline">The formula is simple: Role + Task + Context + Format</p>
        </div>
      </section>

      {/* 🔹 Embedded YouTube Video */}
      <div className="learning-log-video">
        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/ClEBQ588Z8Y"
          title="AI Prompt Formula Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* 🔹 Blog Content */}
      <article className="post-content">
        <h2>Crafting the Perfect Prompt</h2>
        <p>
          AI is being incorporated into workflows more regularly. One thing to be aware of is that
          AI can hallucinate. The more descriptive and precise your prompt, the better the answer.
          Use the following formula: <strong>Role + Task + Context + Format.</strong>
        </p>

        <div className="highlight-box">
          <h3>The Four Steps to an Effective Prompt:</h3>
          <ul>
            <li>
              <strong>Role:</strong> Define your stance or persona. Example: act as a lawyer,
              teacher, or scientist — and choose a tone such as enthusiastic, formal, or witty.
            </li>
            <li>
              <strong>Task:</strong> State clearly what you want to accomplish. Be specific about
              the goal or deliverable.
            </li>
            <li>
              <strong>Context:</strong> Provide the necessary background information or scenario to
              frame the AI’s response.
            </li>
            <li>
              <strong>Format:</strong> Specify what kind of output you expect — text, image, code,
              etc.
            </li>
          </ul>
        </div>

        <p>
          Having clear goals helps AI understand what you're testing and what metrics you need.
          Requirements (prompts) and acceptance criteria (validation points) must be clear to get
          thoughtful output. Always review and validate AI results for accuracy.
        </p>

        <p>
          Start the AI discussion early in a project to get an initial draft, then refine it.
          Collaboration between human intent and AI generation creates the most powerful outcomes.
        </p>
      </article>

      {/* Mailing List CTA */}
      <div className="cta">
        <h2>Stay in the loop ✉️</h2>
        <p>Sign up for my mailing list and never miss an update.</p>
        <a href="/signup" className="cta-button">
          Join the Mailing List
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default Post2;

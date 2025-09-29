import "../../css/Post1.css";
import Footer from "../../Footer";

function Post2() {
  return (
    <div>
      {/* Header Section */}
      <header className="about-header">
        <div className="framed-text">
          <h1>AI Prompt Formula</h1>
          <p>How do you optimize for the best AI-generated responses?</p>
          <br />
          <p>
            The formula is simple: Role + Task + Context + Format
          </p>
          <p>Read more for more info!</p>
        </div>
      </header>
    <div className="post-layout">
    {/* Left: Image Section */}
    <div className="post-image-container">
        <img src="/ai-formula.png" alt="Post" className="post-image" />
    </div>
    </div>

        {/* Right: Extra Text Section */}
        <div className="post-extra-text">
            <h2>Here are the four steps of crafting the perfect prompt to enter into AI:</h2>
            <ul>
            <li>One</li>
            <li>Twee</li>
            <li>Three</li>
            <li>Four</li>
            </ul>
        </div>

        {/* Content Section (below full width) */}
        <div className="post-content">
        <p>
            AI is being incorporated into workflow more regularly. Something to be fully aware of is
            that AI can hallucinate. When using AI, the more descriptive and precise, the better the
            answer. Use the following formula: Role + Task + Context + Format
        </p>
        </div>
        <Footer/>
    </div>

  );
}

export default Post2;
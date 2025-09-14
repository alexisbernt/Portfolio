import "../../css/Post1.css";

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

    {/* Image Section */}
    <div className="post-image-container">
    <img src="/rag.jpg" alt="Post" className="post-image" />
    </div>

      {/* Content Section */}
      <div className="post-content">
        <p>AI is being incorporated into workflow more regularly. Something to be fully aware of is that AI can hallucinate.
           When using AI, the more descriptive and precise, the better the answer.
           Use the following formula: Role + Task + Context + Format
        </p>
      </div>
    </div>
  );
}

export default Post2;
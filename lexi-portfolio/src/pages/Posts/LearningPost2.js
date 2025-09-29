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
            <li><bold>Role: </bold>What type of stance are you taking on? Once you understand the perspective (ex: working like a lawyer, writing like a teacher, investigating like a scientist) and persona (ex: diplomatic, enthusiastic, direct, funny), list that in your prompt.</li>
            <li><bold>Task: </bold>What are you trying to do? Explain in simple terms what you are doing. State the goal at hand and the deliverable you are seeking.</li>
            <li><bold>Context: </bold>What is the background information? Provide the information that is helpful to understand the scope. State why you are creating the deliverable that you are looking for.</li>
            <li><bold>Format: </bold>What are you trying to get out of this particular prompt? Blatantly state what you are looking for. This could be text, an image, code, or something else.</li>
            </ul>
        </div>

        {/* Content Section (below full width) */}
        <div className="post-content">
        <p>
            AI is being incorporated into workflow more regularly. Something to be fully aware of is
            that AI can hallucinate. When using AI, the more descriptive and precise, the better the
            answer. Use the following formula: Role + Task + Context + Format
        </p>
        {/* Example prompt here  */}
        </div>
        <Footer/>
    </div>

  );
}

export default Post2;
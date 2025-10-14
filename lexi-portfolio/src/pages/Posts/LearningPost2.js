import "../../css/Post1.css";
import Footer from "../../Footer";

function Post2() {
  return (
    <div>
      {/* 🔹 Embedded YouTube Video */}
      <div className="learning-log-video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/ClEBQ588Z8Y"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Header Section */}
      <header className="about-header">
        <div className="framed-text">
          <h1>AI Prompt Formula</h1>
          <p>How do you optimize for the best AI-generated responses?</p>
          <br />
          <p>The formula is simple: Role + Task + Context + Format</p>
          <p>Read more for more info!</p>
        </div>
      </header>

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
        <p>
          Having clear goals and clear prompts helps AI know what you're testing and what metrics you need.
          Moreover, requirements (prompts) and acceptance criteria (validation points) must be clear to get thoughtful test design.
          Carefully review to understand the AI oupt and review for accuracy.
          AI does think differently. As a user, you can take advantage of that. You can collaboarate with AI to get the best results.
          Start the AI discussion early in a project to help get an initial draft and then refine it.
        </p>
        {/* Example prompt here  */}
        </div>
        <Footer/>
    </div>

  );
}

export default Post2;
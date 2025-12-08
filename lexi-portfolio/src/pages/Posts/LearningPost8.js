import "../../css/Post1.css";
import Footer from "../../Footer";

function Post7() {
  return (
    <div>
      {/* Header Section */}
      <header className="about-header">
        <div className="framed-text">
          <h1>AI Token Usage: How Does AI Process Our Requests?</h1>
          <p>AI is here. How can we help it up our work productivity?</p>
        <p>All while keeping genuine content. Read and watch for more.</p>
        <div class="about-meta">
            <span>By: Alexis Bernthal</span>
            <span class="dot">•</span>
            <span>December 4, 2025</span>
          </div>
        </div>
      </header>
    <div className="post-layout">
    {/* Left: Image Section */}
    <div className="post-image-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Dn1843rgyGk?si=9FkU78lHq6cyuzZv"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full rounded-xl shadow-lg"
      ></iframe>
    </div>
    </div>

        {/* Right: Extra Text Section */}
        <div className="post-extra-text">
            <p> Introduction to token usage: What is a token? A token is a fundamental unit of text that an AI model processes. 
                Using tokens allows models to handle characters, words, parts of words, or sentences. 
                A token is a small chunk of text—like a word or part of a word—that the model reads and understands. 
                AI processes language by breaking it into these tokens, which helps it predict and generate responses. 
                For example, the sentence "I love cats" might be split into three tokens: "I", "love", and "cats".
            </p>
            <p>AI model processes tokens by turning them into numbers that represent meaning. It then uses patterns it learned during training to understand the context of those tokens and predict what comes next. 
                This is how it generates responses, answers questions, or completes tasks based on your input.
                Why do tokens matter? Because efficient token use = faster processing, lower costs, and better performance for AI systems.
                How to count tokens? There are open source libraries like tiktoken, NLTK, and Gensin</p>
        </div>
        <h2>Token Management Matters - every 1m tokens costs money -</h2>
        <ul>
        <li>(1) Know Your Token Limit
Each AI model has a maximum number of tokens it can handle in one request (e.g., 4,000 or 8,000 tokens). This includes both your input and the AI’s response.</li>
        <li>(2) Keep Inputs Concise
Write clear and brief prompts. Avoid unnecessary details or repetition to reduce token usage.</li>
        <li>(3) Use Summaries
If you're working with long documents or conversations, summarize them before inputting to save tokens. </li>
        <li>(4) Chunk Large Texts
Break long texts into smaller parts and process them one at a time if they exceed the token limit. </li>
        <li>(5) Monitor Usage
If you're using a platform that charges by token (like OpenAI), check your usage dashboard to track how many tokens you're spending.</li>
        </ul>
        {/* Content Section (below full width) */}
        <div className="post-content">
        <p>
           OpenAI Platform:
- Can generate your API key. My test key: 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
- An API (Application Programming Interface) is a way for different software systems to talk to each other. In simple terms
- An API key from OpenAI is like a password that lets your app or script securely connect to OpenAI’s services. It identifies you as the user and tracks your usage, so the system knows who is making requests and how many tokens are being used. You use it in your code to access models like GPT or DALL·E.
- OpenAI uses both: GPT (Generative Pre-trained Transformer) is used for understanding and generating text—like answering questions, writing code, summarizing content, or chatting. AND DALL·E is used for generating images from text descriptions—like creating artwork, illustrations, or visual concepts.
           </p>
        </div>
        <div className="post-image-container">
          <iframe
            img = "/token-usage.png"
            width="560"
            height="315"
          ></iframe>
        </div>
        <Footer/>
    </div>

  );
}

export default Post7;
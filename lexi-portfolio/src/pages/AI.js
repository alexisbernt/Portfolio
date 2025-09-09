import "../css/AI.css";
import "../css/About.css";

function AI() {
  return (
    <div>
      {/* Animated Framed Header */}
      <header className="about-header">
        <div className="framed-text">
          <h1>Welcome to your personal AI Toolkit</h1>
          <p>This is where I post the hot AI tools that can help</p>
          {/* <br /> */}
          {/* <p>
            If you like business or bad jokes (or even better business AND bad
            jokes) you're at the right place.
          </p> */}
          <p>Read more for more info!</p>
        </div>
      </header>

      {/* AI Grid Section */}
      <div className="ai-container">
        <div className="ai-grid">
          {/* Lifestyle */}
          <div className="ai-box">
            <h3>AI For Lifestyle</h3>
            <ul>
              <li>
                <strong>ChatGPT (OpenAI)</strong> – Conversational AI for Q&A,
                brainstorming, writing, coding, and learning.
              </li>
              <li>
                <strong>Canva AI</strong> – AI design assistant for
                presentations, posters, and social posts.
              </li>
              <li>
                <strong>Runway</strong> – Video editing, background removal, and
                creative effects.
              </li>
              <li>
                <strong>Perplexity AI</strong> – AI search engine that
                summarizes info with sources.
              </li>
              <li>
                <strong>Khanmigo (Khan Academy)</strong> – AI tutor for
                personalized learning.
              </li>
              <li>
                <strong>Reclaim AI</strong> – Smart calendar assistant that
                schedules tasks automatically.
              </li>
              <li>
                <strong>Replika</strong> – AI chatbot companion for conversation
                and emotional support.
              </li>
              <li>
                <strong>Socratic (Google)</strong> – Homework helper with
                step-by-step explanations.
              </li>
              <li>
                <strong>Goblin Tools</strong> – Small, simple tools for breaking
                down tasks.
              </li>
            </ul>
            <p>
              <em>People who speak on AI:</em> CatGPT (@CatGPT on Instagram),{" "}
              <a
                href="https://arjancodes.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ArjanCodes
              </a>
              .
            </p>
          </div>

          {/* Business */}
          <div className="ai-box">
            <h3>AI For Business</h3>
            <ul>
              <li>
                <strong>Tableau</strong> – Data visualization tool.
              </li>
              <li>
                <strong>Qualisync</strong> – AI calendar assistant with Google
                Calendar.
              </li>
              <li>
                <strong>Zapier (AI Calendar Management)</strong> – Automates
                syncing, generates summaries, adapts events dynamically.
              </li>
              <li>
                <strong>Microsoft 365 Copilot</strong> – Integrated across Word,
                Excel, PowerPoint, Outlook, and Teams.
              </li>
              <li>
                <strong>GitHub Copilot</strong> – AI code assistant that
                autocompletes and suggests functions in VS Code.
              </li>
            </ul>
          </div>

          {/* School */}
          <div className="ai-box">
            <h3>AI For School</h3>
            <ul>
              <li>
                <strong>Socratic (Google)</strong> – Homework helper with
                explanations.
              </li>
              <li>
                <strong>Khanmigo (Khan Academy)</strong> – AI tutor with
                step-by-step support.
              </li>
              <li>
                <strong>Common LLMs</strong>: ChatGPT, Gemini, Copilot, Claude.
              </li>
              <li>
                <strong>ChatGPT Study Mode</strong> – Personal tutor that
                creates quizzes, flashcards, and explanations.
              </li>
              <li>
                <strong>Google NotebookLM</strong> – Note-taking assistant for
                asking questions about your documents.
              </li>
            </ul>
          </div>

          {/* Athletics */}
          <div className="ai-box">
            <h3>AI For Athletics</h3>
            <ul>
              <li>
                <strong>Workouts</strong> → Fitbod, Freeletics, Vi Trainer.
              </li>
              <li>
                <strong>Nutrition</strong> → Lumen, Noom, Nutrium.
              </li>
              <li>
                <strong>Sleep/Recovery</strong> → Whoop, Oura, Fitbit.
              </li>
              <li>
                <strong>Health Tracking</strong> → Ada Health, Headspace AI,
                Wellory.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AI;


import "../../css/Post1.css";

function Post3() {
  return (
    <div>
      {/* Header Section */}
      <header className="about-header">
        <div className="framed-text">
          <h1>Is there such thing as "Too Much" Learning?</h1>
          <p>What is information overload? Can your mind take in too much? Is there such thing as too much information?</p>
          <br />
          <p>
            All the answers and "hacks" to being a more productive worker.
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
            <h2>(1) What is information overload? Can you consume too much information?</h2>
            <p>Information overload occurs when the amount of information coming in a person's mind exceeds a person’s ability to effectively process, understand, or use that information. 
              Research shows that our working memory capacity is limited to around 3–4 chunks of information at once (Cowan, 2010).
              When information surpasses this limit, performance and learning decline.
So yes, you can consume too much information. For example, studies on cognitive load theory (Sweller, 1988) demonstrate that either (a) excessive or (b) poorly structured material overwhelms working memory and reduces learning effectiveness. 
Other phenomena, like the attentional blink (Raymond, Shapiro & Arnell, 1992), show how rapid streams of input can temporarily block our ability to perceive the next piece of information. 
Likewise, reviews on decision fatigue (Pignatiello et al., 2018) show that when people face too many choices, their quality of decisions declines.
In short: the mind can be overwhelmed when information comes too quickly. More information isn’t always better. If the information coming in is not structured well, it can actually impair learning.</p>
        </div>

        {/* Content Section (below full width) */}
        <div className="post-content">
        <h2>(2) What are some techniques to avoid overloading your brain?</h2>
        <p>
           I was thinking about all of the information that is now readily avaliable at our fingertips. 
           When too much of this information is taken in at once, our brains can become overloaded and it becomes difficult to process and retain the information.
           This is especially true when trying to learn new skills or concepts, as our brains are already working hard to understand and integrate the new information.
Several research-backed strategies can help prevent cognitive overload:
- Chunk and space information: Break content into smaller units and spread learning across time. This improves retention.
- Reduce extraneous load: Focus only on information relevant to the task or goal. Removing distractions and irrelevant details prevents wasted mental effort.
- Match learning to expertise: Beginners benefit from step-by-step guidance. However, when you're an advanced learner, you often do better with less scaffolding (temporary support provided to a learner to help them learn a new skill or concept). This is known as the “expertise reversal effect."
- Control information flow: Avoid multitasking.Instead, process one source of information at a time.
- Manage decision fatigue: Spread complex decisions over time. Use checklists. Prioritize important choices earlier in the day when your mind is fresh.
By structuring information more deliberately and pacing intake, you can make learning more sustainable and prevent your brain from being overloaded.
        </p>
        </div>
    </div>

  );
}

export default Post3;
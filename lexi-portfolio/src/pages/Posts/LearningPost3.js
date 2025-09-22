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
           I was thinking about all of the information that is now readily avaliable at our fingertips. 
        </p>
        </div>
    </div>

  );
}

export default Post3;
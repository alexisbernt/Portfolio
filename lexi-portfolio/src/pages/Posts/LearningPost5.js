import "../../css/Post1.css";

function Post5() {
  return (
    <div>
      {/* Header Section */}
      <header className="about-header">
        <div className="framed-text">
          <h1>$$$ Post</h1>
          <p>Teaching people how to consider the good consequences of money</p>
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
            <h2>(1)</h2>
            <p></p>
        </div>

        {/* Content Section (below full width) */}
        <div className="post-content">
        <h2>(2) </h2>
        <p>
            Thinking
        </p>
        </div>
    </div>

  );
}

export default Post5;
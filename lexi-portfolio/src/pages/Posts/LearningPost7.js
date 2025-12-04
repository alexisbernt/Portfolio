import "../../css/Post1.css";
import Footer from "../../Footer";

function Post7() {
  return (
    <div>
      {/* Header Section */}
      <header className="about-header">
        <div className="framed-text">
          <h1>5 WAYS TO USE AI IN WORK</h1>
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
            <p> AI is here. And it is making waves.
                Personally, I don't think it is about replacing humans, but rather enhancing our work.
                The workers that are going to keep their jobs are going to be the ones that can use AI to their advantage.
                Here are 5 ways you can use AI to help you at work:
            </p>
        </div>
        <h2>Summary of the 5 Ways:</h2>
        <ul>
        <li>(1) Replying to emails quicker.</li>
        <li>(2) Generating draft spreadsheets. </li>
        <li>(3) Creating a plan for projects: Templating. </li>
        <li>(4) Checking for grammatical fixes. </li>
        <li>(5) Ideation.</li>
        </ul>
        {/* Content Section (below full width) */}
        <div className="post-content">
        <p>
            AI is excellent for summarizing - AI pulls resources together and synthesizes information into a Chat-bot style delivery. AI information can be very accurate but it is necessary to dig deeper beyond that initial AI search.

When writing papers, solving problems, or doing creative work, I strongly suggest you use your own brain power.

However, for those tedious repetitive tasks, AI can now be a starting point. Watch the video to learn about 5 ways you can use AI in your daily workflow and/or in business.
        </p>
        </div>
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
        <Footer/>
    </div>

  );
}

export default Post7;
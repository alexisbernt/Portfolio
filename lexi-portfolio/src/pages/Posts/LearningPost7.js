import "../../css/Post1.css";
import Footer from "../../Footer";

function Post6() {
  return (
    <div>
      {/* Header Section */}
      <header className="about-header">
        <div className="framed-text">
          <h1>5 WAYS TO USE AI IN WORK</h1>
          <p>AI is here. How can we help it up our work productivity?</p>
        <p>All while keeping genuine content. Read for more.</p>
        <div class="about-meta">
            <span>By: Alexis Bernthal</span>
            <span class="dot">•</span>
            <span>November 24, 2025</span>
          </div>
        </div>
      </header>
    <div className="post-layout">
    {/* Left: Image Section */}
    <div className="post-image-container">
        <img src="/azure-cover.png" alt="Post" className="post-image" />
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
        <div className="post-image-container">
            <img src="/azure-pic1.png" alt="Post" className="post-image" />
        </div>
        <h2>Summary of the 5 Ways:</h2>
        <ul>
        <li>(1) Replying to emails quicker.</li>
        <li>(2) Generating draft spreadsheets. </li>
        <li>(3) Creating a plan for projects: Templating. </li>
        <li>(4) Checking for grammatical fixes. </li>
        <li>(5) Ideation.</li>
        </ul>
        <div className="post-image-container">
            <img src="/computing.png" alt="Post" className="post-image" />
        </div>
        {/* Content Section (below full width) */}
        <div className="post-content">
        <p>
            Some of Azure's AI Services:
Azure OpenAI
Azure AI Vision = Gives you a set of models and APIs that you can use to implement common computer vision functionality (detect objects, etc.). 
Azure AI Speech = Speech-to-text, Azure AI Language = Models and APIs that you can use to analyze natural language text and perform tasks like extraction and summarization. 
Azure Foundry Content Safety = gives you access to algorithms that can flag potential offensive, risky or undesirable content. 
Azure AI Face = Can scan face as a form of security, biometrics. Azure document intelligence = extracts fields from complex documents (invoices, receipts, forms). 
Azure AI Content Understanding = multi-model content analysis to extract data from forms, documents, images, videos, and audio. Azure AI Search = can index semantically and with vectors. 
If you need to find accurate information on large sets of data you can look using this tool.
        </p>
        </div>
        <Footer/>
    </div>

  );
}

export default Post6;
import "../../css/Post1.css";
import Footer from "../../Footer";

function Post6() {
  return (
    <div>
      {/* Header Section */}
      <header className="about-header">
        <div className="framed-text">
          <h1>Azure AI Services (AI Tools Series: Ep. 3)</h1>
          <p>Azure is Microsoft's cloud computing platform.</p>
          <br />
          <p>
            That means that Azure can do things like:
          </p>
          <p>+ Store data + Run applications + Host websites + Build AI models + Analyze information...
        </p>
        <p>All without needing physical servers or hardware.</p>
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
            <p> Azure is like toolbox in the cloud. 
                It is Microsoft's platform full of tools you can use to build and run software, websites, and services.
            </p>
        </div>
        <div className="post-image-container">
            <img src="/azure-pic1.png" alt="Post" className="post-image" />
        </div>
        <h2>Break-down of Azure:</h2>
        <ul>
        <li>Applications of Azure AI Services = Microsoft 365, Microsoft Dynamics 365</li>
        <li>The applications then have platforms = PowerBI, Power Apps, Power Automate, Copilot Studio, UiPath</li>
        <li>There are scenario-based services = Bot Service, Cognitive search, document intelligence, content understanding</li>
        <li>Then we have customizable AI models = vision, speech, language, Azure OpenAI</li>
        <li>ML Platform = Azure AI Foundry (gives you everything you need to create smart AI-powered apps — like chatbots, document processors, 
            or automation tools — without worrying about the complex infrastructure behind it.)</li>
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
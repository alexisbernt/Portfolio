import "../../css/Post1.css";

function Post4() {
  return (
    <div>
      {/* Header Section */}
      <header className="about-header">
        <div className="framed-text">
          <h1>Networking and Webpages</h1>
          <p>All of those techy terms that make our webpages load</p>
          <br />
          <p>
            DNS, DNS Type, IP Address, IPv4, Proxy, DDoS
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
            <h2>Here are the terms that are helpful to understand networking and webhosting:</h2>
            <ul>
            <li>DNS = Domain Name System</li>
            <li>DNS Type = Purpose of the record</li>
            <li>IP Address = Internet protocol address which identifies a device on a network</li>
            <li>IPv4 Address = Type of IP address</li>
            <li>Proxy = Service that sits between the server and website visitors</li>
            <li>DDoS = Protects assets and visitors</li>
            </ul>
            <p> The domain name gets pointed to server IP address.</p>
        </div>

        {/* Content Section (below full width) */}
        <div className="post-content">
        <p>
            AI is being incorporated into workflow more regularly. Something to be fully aware of is
            that AI can hallucinate. When using AI, the more descriptive and precise, the better the
            answer. Use the following formula: Role + Task + Context + Format
        </p>
        </div>
    </div>

  );
}

export default Post4;
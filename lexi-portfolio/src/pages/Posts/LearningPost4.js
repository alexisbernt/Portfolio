import "../../css/Post2.css";
import Footer
 from "../../Footer";
function Post4() {
  return (
    <div className="post-container">
      {/* Header Section */}
      <header className="about-header">
        <div className="framed-text">
          <h1>Networking and Webpages</h1>
          <p>All of those techy terms that make our webpages load</p>
          <br />
          <p>DNS, DNS Type, IP Address, IPv4, Proxy, DDoS</p>
          <p>Read more for more info!</p>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="post-layout">
        {/* Left: Image Section */}
        <div className="post-image-container">
          <img src="/ai-formula.png" alt="Post" className="post-image" />
        </div>

        {/* Right: Text Section */}
        <div className="post-content">
          <h2>Understanding Key Terms in Networking and Web Hosting</h2>
          <p>
            When setting up a website or learning about how the internet works, it helps to understand a few essential networking and web hosting terms. Here’s a quick overview:
          </p>

          <ul>
            <li>
              <strong>DNS (Domain Name System):</strong> The DNS is like the internet’s phonebook. It translates easy-to-remember domain names (like <em>example.com</em>) into the numerical IP addresses that computers use to locate each other on a network.
            </li>
            <li>
              <strong>DNS Type:</strong> DNS records come in different types, each serving a specific purpose. For example, an <strong>A record</strong> points a domain to an IPv4 address, while a <strong>CNAME record</strong> links one domain name to another.
            </li>
            <li>
              <strong>IP Address:</strong> An Internet Protocol address is a unique identifier for a device on a network. Think of it as a digital home address that lets data find the right destination.
            </li>
            <li>
              <strong>IPv4 Address:</strong> The most common version of IP addresses, made up of four sets of numbers (for example, 192.168.1.1). There’s also IPv6, which provides a much larger range of possible addresses.
            </li>
            <li>
              <strong>Proxy:</strong> A proxy server acts as a middleman between a website visitor and the main server. It can be used to filter traffic, improve performance, or enhance security.
            </li>
            <li>
              <strong>DDoS Protection:</strong> Short for Distributed Denial of Service protection, this security feature helps defend servers from overwhelming traffic attacks that can take websites offline.
            </li>
          </ul>

          <p>
            In simple terms, the <strong>domain name</strong> you buy gets <strong>pointed to your server’s IP address</strong> using DNS records. From there, visitors can easily find and access your site through a clean, memorable web address instead of a string of numbers.
          </p>

          <p>
            The core concepts of networking and web hosting are things like DNS, IP addresses, proxies, and DDoS protection. Understanding these things helps users be better equipped to manage websites, solve connection issues, and communicate confidently with web hosting providers.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Post4;

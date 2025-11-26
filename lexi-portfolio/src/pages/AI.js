import "../css/AI.css";
import "../css/About.css";
import Footer from "../Footer";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AI() {
  const blogPosts = [
    {
      title: "Retrieval Augmented Generation",
      desc: "RAG is a technique used in AI systems to improve the accuracy of AI-generated responses by blending knowledge retrieval and generation.",
      link: "/post1",
      img: "rag.png",
    },
    {
      title: "The Formula For AI",
      desc: "AI is being incorporated into workflows more regularly. Learn the formula that gets the best results.",
      link: "/post2",
      img: "ai-formula.png",
    },
    {
      title: "Microsoft's AI Tools",
      desc: "Explore the suite of AI tools Microsoft offers and how they enhance productivity.",
      link: "/post6",
      img: "azure-cover2.png",
    },
    {
      title: "Networking and Webpages",
      desc: "Click here if you want to know what the following terms mean: DNS, DNS Type, IP Address, IPv4, Proxy, DDoS",
      link: "/post4",
      img: "cloud-servers.png",
    },
    {
      title: "Ethical AI",
      desc: "What does it mean to build responsible and transparent AI systems?",
      link: "/post5",
      img: "content-pending.png",
    },
    {
      title: "Creative AI Tools",
      desc: "From text-to-image generation to AI music, these tools are redefining creative expression.",
      link: "/post7",
      img: "content-pending.png",
    },
  ];

    const sectionHeader = (text) => (
    <div style={{ margin: '80px 0 40px 0' }}>
      <h2 style={{
        fontSize: '2.3rem',
        fontWeight: 800,
        color: '#111827',
        fontFamily: 'Georgia, "Times New Roman", serif',
        letterSpacing: '-0.02em',
        marginBottom: '10px',
        lineHeight: 1.2,
      }}>
        {text}
      </h2>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#e5e7eb', marginTop: '10px' }} />
    </div>
  );

  return (
    <div className="ai-page">
      {/* 🔹 Modern Blog-Style Hero */}
      <section className="ai-hero w-full bg-gradient-to-b from-white to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center px-6 py-24"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Your Personal AI Toolkit
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Explore modern tools, techniques, and insights that help you use AI 
            more effectively in work, school, and everyday life.
          </p>

          {/* Optional buttons for a true landing page feel */}
          {/* <div className="mt-8 flex justify-center gap-4">
            <button className="
              px-6 py-3 bg-white text-blue-600 rounded-xl border border-blue-200
              shadow-sm hover:shadow-md hover:border-blue-300 transition-all
            ">
              Learn More
            </button> */}
          {/* </div> */}
        </motion.div>
      </section>

      {/* Section: Featured Videos */}
      {sectionHeader("Featured Videos:")}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        marginBottom: '80px',
      }}>
        {[
          {
            title: "AI Tools Short!",
            src: "https://www.youtube.com/embed/3Jd_U60oxq0",
          },
          {
            title: "Building Smarter AI Prompts",
            src: "https://www.youtube.com/embed/ClEBQ588Z8Y",
          },
          {
            title: "Something I Learned This Month",
            src: "https://www.youtube.com/embed/nYbB-uTSsTw?si=CzV-Hhccl1NBCaT5",
          },
        ].map((video, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                src={`${video.src}?controls=1&modestbranding=1&rel=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px 16px 0 0',
                }}
              ></iframe>
            </div>
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#1e3a8a',
                margin: '8px 0 4px 0',
              }}>
                {video.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Section Header */}
      <div className="section-header">
        {/* <h2>Blog Posts on AI (Quick Reads):</h2> */}
        {sectionHeader("Blog Posts on AI (Quick Reads):")}
      </div>

      {/* 🔹 Blog Cards */}
      <div className="blog-grid">
        {blogPosts.map((post, i) => (
          <Link to={post.link} key={i} className="blog-card">
            <div className="blog-img-container">
              <img src={post.img} alt={post.title} className="blog-img" />
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* 🔹 Toolkit Section */}
      <div className="section-header">
        <h2>AI Toolkit Tools:</h2>
      </div>

      <div className="ai-container">
        <div className="ai-grid">
          <div className="ai-box">
            <h3>AI For Lifestyle</h3>
            <ul>
              <li><strong>ChatGPT</strong> – Conversational AI for brainstorming, writing, coding, and learning.</li>
              <li><strong>Canva AI</strong> – AI design assistant for visual storytelling.</li>
              <li><strong>Runway</strong> – Video editing and background removal.</li>
              <li><strong>Perplexity AI</strong> – AI search engine that summarizes with sources.</li>
            </ul>
          </div>

          <div className="ai-box">
            <h3>AI For Business</h3>
            <ul>
              <li><strong>Microsoft Copilot</strong> – Integrated AI for Word, Excel, and Teams.</li>
              <li><strong>Zapier AI</strong> – Automates workflows and syncs tasks.</li>
              <li><strong>Tableau</strong> – Data visualization powered by AI.</li>
            </ul>
          </div>

          <div className="ai-box">
            <h3>AI For School</h3>
            <ul>
              <li><strong>Khanmigo</strong> – AI tutoring assistant by Khan Academy.</li>
              <li><strong>Google NotebookLM</strong> – Smart note-taking and document Q&A.</li>
            </ul>
          </div>

          <div className="ai-box">
            <h3>AI For Athletics</h3>
            <ul>
              <li><strong>Fitbod</strong> – Smart workout planner.</li>
              <li><strong>Lumen</strong> – Tracks nutrition and metabolism.</li>
              <li><strong>Oura</strong> – AI-powered sleep and recovery tracker.</li>
            </ul>
          </div>
        </div>
     {/* Mailing List CTA */}
      <div className="cta">
        <h2>Stay in the loop ✉️</h2>
        <p>Sign up for my mailing list and never miss an update.</p>

        <Link to="/sign-up" className="cta-button">
          Join the Mailing List
        </Link>
      </div>

      </div>
      <Footer />
    </div>
  );
}

export default AI;

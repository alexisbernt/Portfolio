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
      img: "ai-formula.png",
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

  return (
    <div className="ai-page">
      {/* 🔹 Dark Intro Section */}
      <section className="ai-intro-dark">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h1 className="ai-header">Your Personal AI Toolkit</h1>
          <p className="ai-subtext">
            Explore modern tools, techniques, and insights that help you use AI more effectively in work, school, and life.
          </p>
        </motion.div>
      </section>

      {/* 🔹 Embedded YouTube Video */}
      <div className="learning-log-video">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/3Jd_U60oxq0"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* 🔹 Section Header */}
      <div className="section-header">
        <h2>Blog Posts on AI (Quick Reads):</h2>
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
      </div>

      <Footer />
    </div>
  );
}

export default AI;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../css/LearningLog.css";
import Footer from "../Footer";
import { Link } from 'react-router-dom';

export default function LearningLog() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Utility: get today's date in Central Time
  const getCentralDate = () => {
    const now = new Date();
    const centralTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/Chicago" })
    );
    return centralTime.toLocaleDateString();
  };

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

  // Load saved entries from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("learningLog")) || [];
    const today = getCentralDate();

    if (saved.length > 0 && saved[0].date === today) {
      setEntries(saved); // ✅ Same day → keep entries
    } else {
      localStorage.removeItem("learningLog"); // 🗑️ New day → reset
      setEntries([]);
    }
  }, []);

  // Save to localStorage whenever entries change
  useEffect(() => {
    if (entries.length > 0) {
      localStorage.setItem("learningLog", JSON.stringify(entries));
    }
  }, [entries]);

  const handleAddEntry = () => {
    if (!title.trim() || !content.trim()) return;
    const newEntry = {
      id: Date.now(),
      date: getCentralDate(),
      title,
      content,
    };
    setEntries([newEntry, ...entries]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="learning-log-container">
      {/* 🔹 Embedded YouTube Video */}
      <div className="learning-log-video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/VaqfK5nw-uc?autoplay=1&mute=1&loop=1&playlist=VaqfK5nw-uc&controls=0&modestbranding=1"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* 🔹 Modern Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="learning-log-description"
      >
        <p>
          <strong>It is important to learn something everyday.</strong> Studies
          show learning new things increases our feeling of self-worth, creates more
          opportunities for career success, and sustains our brain.
        </p>
        <p>
          <strong>Log what you've learned today below. </strong>Then scroll and view what others
          have learned today.
        </p>
      </motion.div>

      {/* Section: Featured Videos */}
      {sectionHeader("Featured Videos")}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        marginBottom: '80px',
      }}>
        {[
          {
            title: "Things I've Learned in 2025",
            src: "https://www.youtube.com/embed/VaqfK5nw-uc",
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

      {/* 🔹 Learning Log Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="learning-log-title"
      >
        Learning Log
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="learning-log-form"
      >
        <input
          type="text"
          placeholder="Title of what you learned"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="learning-log-input"
        />
        <textarea
          placeholder="Describe what you learned today..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="learning-log-textarea"
        />
        <button className="learning-log-button" onClick={handleAddEntry}>
          Add Entry
        </button>
      </motion.div>

      <div className="learning-log-entries">
        {entries.length === 0 ? (
          <p className="learning-log-empty">No entries yet for today!</p>
        ) : (
          entries.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="learning-log-card">
                <div className="learning-log-card-content">
                  <div className="learning-log-card-header">
                    <h2>{entry.title}</h2>
                    <span>{entry.date}</span>
                  </div>
                  <p>{entry.content}</p>
                </div>
              </div>
            </motion.div>
          ))
        )}
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

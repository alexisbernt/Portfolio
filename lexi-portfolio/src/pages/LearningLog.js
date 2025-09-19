import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../css/LearningLog.css";

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

  // Load saved entries from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("learningLog")) || [];
    const today = getCentralDate();
    // Only keep today's entries
    const todaysEntries = saved.filter((entry) => entry.date === today);
    setEntries(todaysEntries);
  }, []);

  // Save to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("learningLog", JSON.stringify(entries));
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
      </div>
    </div>
  );
}

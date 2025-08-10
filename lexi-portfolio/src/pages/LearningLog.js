import { useState } from "react";
import { motion } from "framer-motion";
import "../css/LearningLog.css"; // <-- Your custom CSS file

export default function LearningLog() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddEntry = () => {
    if (!title.trim() || !content.trim()) return;
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      title,
      content
    };
    setEntries([newEntry, ...entries]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800 mb-6 text-center"
      >
        Learning Log
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl mx-auto mb-8"
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
        <button
          className="learning-log-button"
          onClick={handleAddEntry}
        >
          Add Entry
        </button>
      </motion.div>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {entries.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="learning-log-card">
              <div className="learning-log-card-content">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {entry.title}
                  </h2>
                  <span className="text-sm text-gray-500">{entry.date}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{entry.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

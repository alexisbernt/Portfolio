import React, { useState, useEffect } from 'react';
import './RunningLog.css';

function RunningLog() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [checked, setChecked] = useState(() => {
    const saved = localStorage.getItem('running-log');
    return saved ? JSON.parse(saved) : Array(7).fill(false);
  });

  useEffect(() => {
    localStorage.setItem('running-log', JSON.stringify(checked));
  }, [checked]);

  const toggleCheck = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  return (
    <div className="running-log">
      <h2>Lexi's Running Log</h2>
      <img 
        src="https://via.placeholder.com/300x200?text=Running+Log" 
        alt="Running Log" 
        className="log-image" 
      />
      <div className="checkbox-grid">
        {days.map((day, index) => (
          <label key={day} className="checkbox-item">
            <input
              type="checkbox"
              checked={checked[index]}
              onChange={() => toggleCheck(index)}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
}

export default RunningLog;

import React, { useState, useEffect } from 'react';
import '../css/RunningLog.css';

function RunningLog() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
  ];
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
      <h2>Lexi's Running Log. August 2025.</h2>
      <img 
        src="https://hips.hearstapps.com/hmg-prod/images/rw-4-wk-half-marathon-plan-67cb0a36c30e6.png" 
        alt="Running Log" 
        className="log-image" 
        width="500px"
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

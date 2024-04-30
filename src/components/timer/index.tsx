/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

interface TimerProps {
  initialValue: number;
  finalValue: number;
  isTimerRunning: boolean;
  onTimerClose: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialValue, isTimerRunning, finalValue, onTimerClose }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);

  useEffect(() => {

    let intervalId: NodeJS.Timeout;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setCurrentValue((prevValue) => {
          const newValue = prevValue - 1;
          
          if (newValue === finalValue) {
            clearInterval(intervalId);
            onTimerClose();
          }

          return newValue;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTimerRunning]);

  return (
    <svg width="200" height="200">
      <circle cx="100" cy="100" r="90" stroke="#94a3b8" strokeWidth="3" fill="none" />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="50" fill="#94a3b8">
        {currentValue}
      </text>
    </svg>
  );
}

export default Timer;
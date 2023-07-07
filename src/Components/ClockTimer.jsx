import React, { useEffect, useState } from 'react';
import "../Css/ClockTimer.css"

const ClockTimer = () => {
  const [time, setTime] = useState(15);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else if (!isFinished) {
        setIsFinished(true);
        setTime(40);
      } else if (time === 0 && isFinished) {
        setTime(15);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time, isFinished]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='timer-container'>
    <div className='timer'>
      {formatTime(time)}
    </div>
    </div>
  );
};

export default ClockTimer;
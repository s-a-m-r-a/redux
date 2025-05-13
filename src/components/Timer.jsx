// src/components/Timer.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, stopTimer, resetTimer, increment } from '../timerSlice';

const Timer = () => {
  const dispatch = useDispatch();
  const seconds = useSelector((state) => state.timer.seconds);
  const isRunning = useSelector((state) => state.timer.isRunning);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(increment());
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={() => dispatch(startTimer())}>Start</button>
      <button onClick={() => dispatch(stopTimer())}>Stop</button>
      <button onClick={() => dispatch(resetTimer())}>Reset</button>
    </div>
  );
};

export default Timer;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementHours, incrementMins, incrementSecs, addMeasurements } from '../../redux/store';

function Timer() {
  const { hours, minutes, seconds, measurements } = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  return (
    <div className="timer-container">
      <div className="time-controls">
        <div>
          <h1>{hours.toString().padStart(2, "0")}</h1>
          <button onClick={() => dispatch(incrementHours())}>+</button>
        </div>
        <div>
          <h1>{minutes.toString().padStart(2, "0")}</h1>
          <button onClick={() => dispatch(incrementMins())}>+</button>
        </div>
        <div>
          <h1>{seconds.toString().padStart(2, "0")}</h1>
          <button onClick={() => dispatch(incrementSecs())}>+</button>
        </div>
      </div>
      <button className="stop-btn" onClick={() => dispatch(addMeasurements())}>Stop</button>
      <div className="measurements">
        <h2>Lap list</h2>
        <ul>
          {measurements.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timer;
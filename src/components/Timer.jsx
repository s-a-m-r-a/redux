import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementHours, incrementMins, incrementSecs,
  decrementHours, decrementMins, decrementSecs,
  addMeasurement
} from '../../redux/store';

function Timer() {
  const { hours, minutes, seconds, measurements } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeout;

    if (isRunning) {
      timeout = setTimeout(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setIsRunning(false);
          return;
        }

        if (seconds > 0) {
          dispatch(decrementSecs());
        } else {
          if (minutes > 0) {
            dispatch(decrementMins());
            dispatch(incrementSecs(59));
          } else if (hours > 0) {
            dispatch(decrementHours());
            dispatch(incrementMins(59));
            dispatch(incrementSecs(59));
          }
        }
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [isRunning, hours, minutes, seconds, dispatch]);

  return (
    <div className="timer-container">
      <div className="time-controls">
        <div>
          <h1>{hours.toString().padStart(2, "0")}</h1>
          <button onClick={() => dispatch(incrementHours())}>+</button>
          <button onClick={() => dispatch(decrementHours())} disabled={hours === 0}>-</button>
        </div>
        <div>
          <h1>{minutes.toString().padStart(2, "0")}</h1>
          <button onClick={() => dispatch(incrementMins())}>+</button>
          <button onClick={() => dispatch(decrementMins())} disabled={minutes === 0}>-</button>
        </div>
        <div>
          <h1>{seconds.toString().padStart(2, "0")}</h1>
          <button onClick={() => dispatch(incrementSecs())}>+</button>
          <button onClick={() => dispatch(decrementSecs())} disabled={seconds === 0}>-</button>
        </div>
      </div>

      <div className="buttons">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={() => dispatch(addMeasurement())}>Save</button>
      </div>

      <div className="measurements">
        <h2>Lap history</h2>
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
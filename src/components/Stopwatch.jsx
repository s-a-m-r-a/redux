import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h1>{formatTime(time)}</h1>
      <div className="controls">
        <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Dayandır" : "Başla"}</button>
        <button onClick={handleLap} disabled={!isRunning}>Dairə</button>
        <button onClick={() => {
          setIsRunning(false);
          setTime(0);
          setLaps([]);
        }}>Sıfırla</button>
      </div>
      <div className="laps">
        <h2>Dairələr</h2>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>{formatTime(lap)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stopwatch;
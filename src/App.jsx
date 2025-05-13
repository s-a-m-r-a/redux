import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="app-container">
      <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Clock</Link>
          <Link to="/stopwatch" style={{ marginRight: '10px' }}>Stopwatch</Link>
          <Link to="/timer" style={{ marginRight: '10px' }}>Timer</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
    </div>
  );
}

export default App;
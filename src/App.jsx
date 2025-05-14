import React from "react";
import "App.css"
import { NavLink, Routes, Route } from "react-router-dom";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="app-container">
      <nav style={{ marginBottom: '20px' }}>
          <NavLink to="/clock" className="nav-link" style={{ marginRight: '10px' }}>Clock</NavLink>
          <NavLink to="/stopwatch" className="nav-link" style={{ marginRight: '10px' }}>Stopwatch</NavLink>
          <NavLink to="/timer" className="nav-link" style={{ marginRight: '10px' }}>Timer</NavLink>
        </nav>

        <Routes>
          <Route path="/clock" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
    </div>
  );
}

export default App;
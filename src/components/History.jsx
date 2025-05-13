import React from 'react';
import { useSelector } from 'react-redux';

const History = () => {
  const { measurements } = useSelector((state) => state.timer);

  return (
    <div>
      <h1>Loops</h1>
      <ul className="measurements">
        {measurements.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
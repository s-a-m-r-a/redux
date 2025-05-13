import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => 
        setTime(new Date()), 1000);
    return () => clearInterval(interval);

  }, []);

  return (
    <div>
      <h1>Current time: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h1>
    </div>
  );
}

export default Clock;
import React, { useState, useEffect } from 'react';

function Exercise3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Count: {count}</p>;
}

export default Exercise3;
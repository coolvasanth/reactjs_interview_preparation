import React, { useState, useEffect } from 'react';
	
function Exercise3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>{count}</h1>;
}

export default Exercise3;
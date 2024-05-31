import React, { useState, useEffect } from 'react';
	
function Exercise7() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (count === 5) {
      clearInterval(id);
    }
  }, [count]);

  return <h1>{count}</h1>;
}

export default Exercise7;

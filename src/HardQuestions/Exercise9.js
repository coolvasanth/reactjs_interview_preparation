import React, { useState, useEffect } from 'react';

function Exercise9() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function handleResize() {
      setCount(count + 1);
      console.log('screen resized', count);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <h1>{count}</h1>;
}

export default Exercise9;

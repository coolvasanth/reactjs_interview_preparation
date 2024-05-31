import React, { useState, useEffect } from 'react';

function Exercise1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  useEffect(() => {
    setCount(count + 2);
  }, []);

  return <h1>{count}</h1>;
}

export default Exercise1;
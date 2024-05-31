import React, { useState, useEffect } from 'react';

function Exercise8() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('value is', value);
      setValue(value + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <h1>{value}</h1>;
}

export default Exercise8;

import React, { useState } from 'react';

function Exercise6() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setTimeout(() => {
      alert(count);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Exercise6;
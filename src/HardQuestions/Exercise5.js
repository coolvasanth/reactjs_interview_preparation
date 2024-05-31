import React, { useState } from 'react';

function Exercise5() {
  const [state, setState] = useState({ count: 0 });

  const incrementCount = () => {
    setState(prevState => ({
      count: prevState.count + 1
    }));
    setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <h1>{state.count}</h1>
    </div>
  );
}

export default Exercise5;
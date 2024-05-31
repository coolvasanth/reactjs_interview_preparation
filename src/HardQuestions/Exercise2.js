import React, { useState } from 'react';

function Exercise2() {
  const [text, setText] = useState("Hello");

  const handleClick = () => {
    setText(text + " World");
    setText("React");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{text}</h1>
    </div>
  );
}

export default Exercise2;
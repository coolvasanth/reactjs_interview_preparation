import React from 'react';
	
const Exercise5 = () => {
  const arr = [1, 2, 3];
  return (
    <div>
      {arr.map(item => (
        <div key={item}>{item}</div>
      ))}
      {arr.map(item => (
        <div key={item * 10}>{item}</div>
      ))}
    </div>
  );
};

export default Exercise5;

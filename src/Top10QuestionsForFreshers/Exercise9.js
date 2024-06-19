// What will be displayed on the screen 
//initially and after the component mounts?

import React from 'react';
	
const Exercise9 = () => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    setText('Hello, World!');
  }, []);

  return <p>{text}</p>;
};

export default Exercise9;


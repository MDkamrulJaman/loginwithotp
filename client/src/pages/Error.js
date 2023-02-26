import React, { useState } from "react";

const Error = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(true);
  console.log(count);
  console.log(setCount);

  const handleChange = () => {
    setCount(count + 1);
    if (count === 10) {
      setMessage(false);
    }
  };

  return (
    <>
      {message ? <h1>X</h1> : <h1>Y</h1>}
      <h1>error</h1>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleChange}>Click me</button>
      </div>
    </>
  );
};

export default Error;

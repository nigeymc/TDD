import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  const incrementClick = () => {
    setCount(count + 1);
    setError("");
  }


  const decrementClick = () => {
    setCount(count > 0 ? count - 1 : 0);
    setError(count === 0 && "counter can't go below 0");
  }

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently &nbsp;
      <span data-test="count">{count}</span>&nbsp;
      <span data-test="error">{error}</span>
      </h1>
      <button data-test="increment-button"
        onClick={incrementClick}>Increment counter</button>
      <button data-test="decrement-button"
        onClick={decrementClick}>Decrement counter</button>
    </div>

  );
}

export default App;

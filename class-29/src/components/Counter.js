import { useState } from "react";

const INITIAL_VALUE = 0;

function Counter() {
  const [count, setCount] = useState(INITIAL_VALUE);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrement = () => {
    if (count === 0) return;
  
    setCount((previous) => {
      return previous - 1;
    });
  };

  const handleReset = () => {
    setCount(INITIAL_VALUE);
  };

  return (
    <div>
      <h2>The count value is {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
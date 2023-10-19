import { useState, useEffect } from "react";

function TestUseEffect() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('useEffect Runs');
    document.title = `Count: ${count}`;

    return () => {
      // CleanUp Method
      // Called During UnMount of TestUseEffect Component
    };
  }, [count]);

  return (
    <div>
      <h1>This is my Count Value: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default TestUseEffect;

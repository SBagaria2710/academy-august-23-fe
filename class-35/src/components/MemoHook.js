import React, { useState, useMemo, useEffect } from "react";

// Factorial
function MemoHook() {
  const [number, setNumber] = useState(1);
  const [_, setInc] = useState(0);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  }

  const onClick = () => {
    setInc(i => i + 1);
  };

  let factorial = useMemo(() => factorialOf(number), [number]);

  useEffect(() => {
    console.log("Component Re Rendered!")
  });
  return (
    <div>
      <span>Factorial of -</span>
      <input type="number" value={number} onChange={onChange}></input>
      <span>Factorial Value: {factorial}</span>

      <button onClick={onClick}>Re-Render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log("Factorial Called");
  return n <= 1 ? 1 : n * factorialOf(n - 1);
}

export default MemoHook;

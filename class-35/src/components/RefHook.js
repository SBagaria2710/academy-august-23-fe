import React, { useRef, Fragment, useState } from "react";

const initialValue = 0;

function RefHook() {
  const [counter, setCounter] = useState(initialValue);
  const [name, setName] = useState("");
  const reference = useRef(initialValue);
  const inputRef = useRef(null);

  const handleClick = () => {
    reference.current = reference.current + 1;
    console.log(`Clicked ${reference.current} times`);
  };

  const foo = () => {
    setCounter(counter + 1);
  };

  const handleClear = () => {
    inputRef.current.focus();
    setName("");
  };

  const changeColor = () => {
    inputRef.current.style.color = "pink"
  };


  console.log(inputRef);

  return (
    <Fragment>
      <div>Hello There!</div>
      <p onClick={handleClick}>Ref Counter: {reference.current}</p>
      <p onClick={foo}>State Counter: {counter}</p>

      <button onClick={handleClear}>Clear Input</button>
      <button onClick={changeColor}>Change Color</button>
      <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </Fragment>
  );
}

export default RefHook;

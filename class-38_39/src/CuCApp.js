import React, { useState, useRef } from "react";

// Styles
import "./App.css";

// Controlled Component
function Controlled() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          placeholder="Controlled Input"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

// UnControlled Component
function UnControlled() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <form>
        <input
          ref={inputRef}
          type="text"
          placeholder="UnControlled Input"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

function CUCApp() {
  return (
    <div className="App">
      <Controlled />
      <UnControlled />
    </div>
  );
}

export default CUCApp;

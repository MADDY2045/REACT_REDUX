import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0); // Use case 1 to explain useRef does not cause re-renders

  const inputElement = useRef(); //use case 2 to explain useRef directly accesses DOM in React without issues
  const previousInputValue = useRef("");

  useEffect(() => {
    count.current += 1;
  });

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      <input
        ref={inputElement}
        className="form-control"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <br />
      {"RENDERED  " + count.current + "  TIMES"}
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => inputElement.current.focus()}
      >
        CLICK TO FOCUS
      </button>
      <hr />
      <h1>CURRENT STATE VALUE:{inputValue}</h1>
      <h1>PREVIOS STATE VALUE:{previousInputValue.current}</h1>
    </div>
  );
};

export default App;

import React, { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  /* Function without useMemo will rerender even when todo function is called */
  // const calculation = expensiveCalculation(count);

  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button className="btn btn-primary" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button className="btn btn-warning" onClick={increment}>
          +
        </button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default App;

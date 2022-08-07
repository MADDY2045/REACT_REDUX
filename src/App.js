import React, { useCallback, useState } from "react";
import Todos from "./Todos";
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  /*without using useCallback will cause rerender in todos 
  component even if increment counter is clicked in parent */
  // const addTodo = () => setTodos([...todos, "New Todo"]);

  const addTodo = useCallback(() => {
    setTodos([...todos, "NEW TODO"]);
  }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <h1>COUNT NOW:{count}</h1>
      <button className="btn btn-secondary" onClick={incrementCount}>
        INCREMENT COUNTER
      </button>
    </div>
  );
};

export default App;

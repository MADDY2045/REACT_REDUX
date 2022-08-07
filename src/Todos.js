import React from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child rerenders");
  return (
    <div>
      {todos.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
      <button className="btn btn-primary" onClick={addTodo}>
        ADD NEW
      </button>
    </div>
  );
};

export default Todos;

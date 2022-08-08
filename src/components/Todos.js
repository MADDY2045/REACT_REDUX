import React from "react";

const Todos = ({ repos }) => {
  return (
    <ul style={{ display: "block" }}>
      {repos &&
        repos.length > 0 &&
        repos.map((repo) => {
          return <li key={repo.id}>{repo.full_name}</li>;
        })}
    </ul>
  );
};

export default Todos;

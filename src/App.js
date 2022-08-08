import React, { useEffect, useState } from "react";
import Todos from "./components/Todos";
import WithLoading from "./HOC/withLoading";
const TodosWithLoading = WithLoading(Todos);

const App = () => {
  const [repoState, setRepoState] = useState({});

  useEffect(() => {
    setRepoState({ ...repoState, isLoading: true });
    fetch(`https://api.github.com/users/MADDY2045/repos`)
      .then((json) => json.json())
      .then((repos) => {
        setRepoState({ ...repoState, isLoading: false, repos: repos });
      });
  }, []);

  return (
    <div>
      <TodosWithLoading
        isLoading={repoState.isLoading}
        repos={repoState.repos}
      />
    </div>
  );
};

export default App;

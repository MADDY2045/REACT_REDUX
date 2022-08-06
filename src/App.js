import React from "react";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";

const App = (props) => {
  const simpleAction = () => {
    props.simpleOne();
  };

  return (
    <div>
      <button onClick={simpleAction}>CLICK to view the Action</button>
      <br />
      <div>
        <pre>{JSON.stringify(props)}</pre>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  simpleOne: () => dispatch(simpleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

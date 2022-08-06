import React from "react";
import { connect } from "react-redux";
import { simpleActionOne, simpleActionTwo } from "./actions/simpleAction";

const App = (props) => {
  const simpleAction = (val) => {
    switch (val) {
      case "ONE":
        props.simpleOne();
        break;
      case "TWO":
        props.simpleTwo();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <button onClick={() => simpleAction("ONE")}>
        CLICK to view the First Action
      </button>

      <br />
      <button onClick={() => simpleAction("TWO")}>
        CLICK to view the Second Action
      </button>
      <div>
        <pre>{JSON.stringify(props)}</pre>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  simpleOne: () => dispatch(simpleActionOne()),
  simpleTwo: () => dispatch(simpleActionTwo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

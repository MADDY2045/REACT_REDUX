export const simpleActionOne = () => (dispatch) => {
  dispatch({
    type: "SIMPLE_ACTION_ONE",
    payload: "result of simple action One",
  });
};

export const simpleActionTwo = () => (dispatch) => {
  dispatch({
    type: "SIMPLE_ACTION_TWO",
    payload: "result of simple action two",
  });
};

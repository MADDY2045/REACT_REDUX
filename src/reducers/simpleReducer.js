export const simpleReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SIMPLE_ACTION_ONE":
      return {
        ...state,
        result: payload,
      };
    case "SIMPLE_ACTION_TWO":
      return {
        ...state,
        result: payload,
      };
    default:
      return state;
  }
};

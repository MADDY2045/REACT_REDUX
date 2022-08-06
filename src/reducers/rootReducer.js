import { combineReducers } from "redux";
import { simpleReducer } from "./simpleReducer";
import { userFetchReducer } from "./userFetchReducer";

export default combineReducers({
  simpleReducer,
  userFetchReducer,
});

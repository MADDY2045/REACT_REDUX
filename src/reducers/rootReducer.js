import { combineReducers } from "redux";
import { simpleReducer } from "./simpleReducer";
import { userFetchReducer } from "./userFetchReducer";
import { postsFetchReducer, setCurrentPageReducer } from "./postsFetchReducer";

export default combineReducers({
  simpleReducer,
  userFetchReducer,
  postsFetchReducer,
  setCurrentPageReducer,
});

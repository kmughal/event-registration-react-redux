import { combineReducers } from "redux";
import aboutReducer from "./aboutReducer";
import whenReducer from "./whenReducer";
import coordinatorReducer from "./coordinatorReducer";

export default combineReducers({
  aboutReducer,
  whenReducer,
  coordinatorReducer,
});

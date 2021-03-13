import { combineReducers } from "redux";
import TestReducer from "./TestReducer";

const reducers = combineReducers({
  Test: TestReducer,
});

export default reducers;

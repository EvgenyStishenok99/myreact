import { combineReducers } from "redux";
import { technologiesReducer } from "./technologiesReducer";
import { createStore } from "redux";
const rootReducer = combineReducers({
  technologiesReducer: technologiesReducer,
});
export const store = createStore(rootReducer);

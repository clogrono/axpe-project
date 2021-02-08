import { createStore, combineReducers } from "redux";
import markerReducer from "../reducers/markerReducer";

const rootReducer = combineReducers({ marker: markerReducer });

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;

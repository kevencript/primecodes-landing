import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import asyncReducers from "../reducers";

const store = createStore(
  asyncReducers,
  {},
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;

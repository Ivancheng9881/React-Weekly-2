import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers/index";
import thunk from "redux-thunk";


export const store = createStore(
    allReducers,
    {},
    applyMiddleware(thunk),
  );



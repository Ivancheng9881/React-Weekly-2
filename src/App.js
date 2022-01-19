import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from './state/index';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const { increment, decrement } = bindActionCreators(actionCreators, dispatch)
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      {/* {isLogged ? (
        <h3>Valuable information I shouldnt see</h3>
      ) : (
        <h3>Not logged in cannot see</h3>
      )} */}
    </div>
  );
}

export default App;

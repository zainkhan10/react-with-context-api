import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Child = (props) => {
  const counterValue = useContext(CounterContext);
  console.log(counterValue);
  return (
    <div>
      <h1>This is first child</h1>
      <h1>Counter value is {counterValue[0]}</h1>
      <button onClick={() => counterValue[1](++counterValue[0])}>
        Update Count
      </button>
    </div>
  );
};

export default Child;

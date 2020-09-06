import React from "react";
import Child from "./Child";

const Parent = (props) => {
  return <Child name={props.name} />;
};

export default Parent;

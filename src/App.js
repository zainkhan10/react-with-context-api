import React, { useState } from "react";
import "./App.css";
import Parent from "./Parent";
import CounterContext from "./CounterContext";

function App() {
  const counterState = useState(1);
  return (
    <CounterContext.Provider value={counterState}>
      <div>
        <Parent name="Zain" />
      </div>
    </CounterContext.Provider>
  );
}

export default App;

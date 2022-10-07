import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(+1);

  const addCount = () => {
    setCounter(counter + 1);
  };

  const points = () => {
    if (counter < 10) {
      alert("You can't afford that!");
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <main>
      <h1>Current Score: {counter}</h1>
      <button onClick={addCount}>+{index}</button>
      <button onClick={points}>
        Pay 10 points to change from {index} to {index + 1}
      </button>
    </main>
  );
}

export default App;

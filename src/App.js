import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let [index, setIndex] = useState(+1);

  const addCount = () => {
    setCounter((counter += index));
  };

  const points = () => {
    if (counter < 10) {
      alert("You can't afford that!");
    } else {
      setIndex(index + 1);
      setCounter(counter - 10);
    }
  };

  const playAgain = () => {
    setCounter(0);
    setIndex(1);
  };

  if (counter >= 100) {
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={playAgain}>Play again?</button>
      </div>
    );
  }

  return (
    <div>
      <main>
        <h1>Current Score: {counter}</h1>
        <button onClick={addCount}>+{index}</button>
        <button onClick={points}>
          Pay 10 points to change from +{index} to +{index + 1}
        </button>
      </main>
    </div>
  );
}

export default App;

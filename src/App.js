import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const incrementCount = () => {
    setCount(count + increment);
  };

  const pay10 = () => {
    if (count < 10) {
      alert("You can't afford that!");
    } else {
      setCount(count - 10);
      setIncrement(increment + 1);
    }
  };

  const playagain = () => {
    setCount(0);
    setIncrement(1);
  };

  if (count < 100) {
    return (
      <main>
        <p>Current Score: {count}</p>
        <button onClick={incrementCount}>+{increment}</button>
        <br></br>
        <button onClick={pay10}>
          Pay 10 points to change from +{increment} to +{increment + 1}
        </button>
      </main>
    );
  } else {
    return (
      <main>
        <h2>You Win!</h2>
        <button onClick={playagain}>Play again?</button>
      </main>
    );
  }
};

export default App;

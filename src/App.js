// import React from "react";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const incrementCount = () => {
    setCount(count + increment);
  };

  const payButton = () => {
    if (count < 10) {
      alert("You can't afford that!");
    } else {
      setCount(count - 10);
      setIncrement(count + 1);
    }

    const playAgain = () => {
      setCount(0);
      setIncrement(1);
    };

    if (count < 100) {
      return (
        <>
          <div>
            <h2>Current Score: {count}</h2>
          </div>
          <div>
            <button onClick={incrementCount}>+{increment}</button>
          </div>
          <div>
            <button onClick={payButton}>
              Pay 10 points to change from +{increment} to +{increment + 1}
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div>
          <h2>{count}!</h2>
          <h3>You Win!</h3>
          <button onClick={playAgain}>Play again?</button>
        </div>
      );
    }
  };
};

export default App;

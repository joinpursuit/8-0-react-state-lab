import React, { useState }from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const addPoints = () => {
    setCount(count + increment);
  };

  const payButton = () => {
    if (count < 10) {
      alert("You can't afford that!");
    } else {
      setCount(count - 10)
      setIncrement(increment + 1)
    }
  };

  const playAgain = () => {
    setCount(0)
    setIncrement(1)
  };

  if (count < 100) {
    return (
      <main>
        <div>
          <h1>Current Score: {count}</h1>
        </div>
        <div>
          <button onClick={addPoints}>+{increment}</button>
        </div>
        <div>
          <button onClick={payButton}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </div>
      </main>
    );
  } else {
    return (
      <div>
        <h1>{count}!</h1>
        <h2>You Win!</h2>
        <button onClick={playAgain}> Play again?</button>
      </div>
    );
  }
};

export default App;

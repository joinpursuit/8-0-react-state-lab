import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0); // setting count default to 0
  let [incrementing, setIncrement] = useState(1); // setting increment to default to 0

  let increment = () => { // increment function adding to count when button +1 is pushed
    setCount((count += incrementing));
  };

  let updatedCount = () => {
    if (count < 10) { // makes sure the user has enough to upgrade
      alert("You can't afford that!");
    } else {
      setCount(count - 10); // if so then increase incrementing and cut 10 from count
      setIncrement(incrementing+1);
    }
  };

  const gameRestart = () => { // restart game when user wins
    setCount(0);
    setIncrement(1);
  };

  if (count >= 100) { // winning message and adds a button to restart
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={gameRestart}>Play again?</button>
      </div>
    );
  }

  return ( // shows current data of users game
    <div>
      <div>
        <h2>Current Score: {count}</h2>
      </div>
      <div>
        <button onClick={increment}>+{incrementing}</button>
      </div>
      <div>
        <button onClick={updatedCount}>
          Pay 10 points to change from +{incrementing} to +{incrementing+1}
        </button>
      </div>
    </div>
  );
};

export default App;

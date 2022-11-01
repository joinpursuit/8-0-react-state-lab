import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState(0);
  const [incrementor, setIncrementor] = useState(1);
  const [visibility, setVisibility] = useState(false);

  const changeVisibility = () => {
    setVisibility(true);
  };

  const increasePoints = () => {
    const newValue = points + incrementor;
    setPoints(newValue);
    if (newValue > 99) {
      // setTimeout(() => {
      //   changeVisibility();
      // }, 500);
      changeVisibility()
    }
  };

  const updateIncrementor = () => {
    if (points > 9) {
      setIncrementor(incrementor + 1);
      setPoints(points - 10);
    } else {
      alert(`You can't afford that!`);
    }
  };

  const resetGame = () => {
    setPoints(0);
    setIncrementor(1);
    setVisibility(false);
  };

  return (
    <main>
      {!visibility && (
        <>
          <h1>Current Score: {points}</h1>
          <button onClick={increasePoints}>+{incrementor}</button>
          <br />
          <button onClick={updateIncrementor}>
            Pay 10 points to change from +{incrementor} to +{incrementor + 1}
          </button>
        </>
      )}
      {visibility && (
        <>
          <h2>You Win!</h2>
          <button onClick={resetGame}>Play again?</button>
        </>
      )}
    </main>
  );
}

export default App;
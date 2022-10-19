import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [increase, setIncrease] = useState(1);

  function addToTotal() {
    setScore(increase + score);
  }

  function addToIncrease() {
    if (score >= 10) {
      setIncrease(increase + 1);
      setScore(score - 10);
    } else {
      alert("You can't afford that!");
    }
  }

  function gameReset() {
    setIncrease(1);
    setScore(0);
  }

  return (
    <main>
      {score >= 100 ? (
        <>
          <h3>{score}</h3>
          <h2>You Win!</h2>
          <button onClick={gameReset}>Play again?</button>
        </>
      ) : (
        <>
          <h3>Current Score: {score}</h3>
          <button onClick={addToTotal}>+{increase}</button>
          <button onClick={addToIncrease}>
            Pay 10 points to change from +{increase} to +{increase + 1}
          </button>
        </>
      )}
    </main>
  );
}

export default App;

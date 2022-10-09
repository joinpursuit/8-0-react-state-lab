import React, { useState } from "react";
import "./App.css";

function App() {
  let [score, setScore] = useState(0);
  let [increment, setIncrement] = useState(1);
  let [won, setWon] = useState(false);

  function payTenPoints() {
    if (score < 10) {
      alert("You can't afford that!");
    } else {
      setScore(score - 10);
      setIncrement(increment + 1);
    }
  }

  function restartGame() {
    setScore(0);
    setIncrement(1);
  }

  return (
    <main>
      {score >= 100 ? (
        <>
          <h2>You Win!</h2>

          <button onClick={restartGame}>Play again?</button>
        </>
      ) : (
        <>
          <p>Current Score: {score}</p>
          <button onClick={() => setScore(score + increment)}>
            +{increment}
          </button>
          <button onClick={payTenPoints}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </>
      )}
    </main>
  );
}

export default App;

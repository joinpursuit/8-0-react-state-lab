import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);

  function scoreChange() {
    setScore(score + increment);
  }

  function incrementChange() {
    if (score < 10) {
      alert("You can't afford that!");
    } else {
      setIncrement(increment + 1);
      setScore(score - 10);
    }
  }

  function playAgain() {
    setScore(0);
    setIncrement(1);
  }

  return score >= 100 ? (
    <main>
      <h1>You Win! {score}</h1>
      <button type="submit" onClick={playAgain}>Play again?</button>
      <br />
      <br />
    </main>
  ) : (
    <main>
      <h1>Current Score: {score}</h1>
      <button onClick={scoreChange}>+{increment}</button>
      <br />
      <br />
      <button onClick={incrementChange}>
        Pay 10 points to change from +{increment} to +{increment + 1}
      </button>
    </main>
  );
}

export default App;

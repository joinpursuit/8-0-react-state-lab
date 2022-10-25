import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);

  function incrementScore() {
    setScore(score + increment);
  }

  function payTen() {
    if (score < 10) {
      alert("You can't afford that!");
    } else if (score >= 10) {
      setScore(score - 10);
      setIncrement(increment + 1);
    }
  }

  function restartGame() {
    setScore(0);
    setIncrement(1);
  }

  if (score >= 100) {
    return (
      <>
        <p>You Win!</p>
        <button onClick={restartGame}>Play again?</button>
      </>
    );
  }

  return (
    <>
      <p>Current Score: {score} </p>
      <button onClick={incrementScore}>+{increment}</button>
      <br />
      <button onClick={payTen}>
        Pay 10 points to change from +{increment} to +{increment + 1}.
      </button>
    </>
  );
}

export default App;

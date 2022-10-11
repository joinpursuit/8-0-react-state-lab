import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [rate, setRate] = useState(1);

  const increaseScore = () => {
    setScore(score + rate);
  };

  const increaseRate = () => {
    if (score >= 10) {
      setRate(rate + 1);
      setScore(score - 10);
    } else alert("You can't afford that!");
  };

  const resetGame = () => {
    setScore(0);
    setRate(1);
  };

  return (
    <main>
      <h1>React State Lab</h1>
      <div className="scoreAndWinCard">
        {score < 100 ? <p>Current Score: {score}</p> : null}
        {score >= 100 ? <h2>You Win!</h2> : null}
      </div>
      <div className="increaseScoreButton">
        {score < 100 ? <button onClick={increaseScore}>+{rate}</button> : null}
      </div>
      <div className="increaseRateButton">
        {score < 100 ? (
          <button onClick={increaseRate}>
            Pay 10 points to change from +{rate} to +{rate + 1}
          </button>
        ) : null}
      </div>
      <div className="resetGameButton">
        {score >= 100 ? <button onClick={resetGame}>Play again?</button> : null}
      </div>
    </main>
  );
}

export default App;

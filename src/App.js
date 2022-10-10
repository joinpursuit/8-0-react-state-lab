import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(1);

  const counter = () => {
    setScore(score + points);
  }

  const increasePoints = () => {
    if (score >= 10) {
      setScore(score - 10)
      setPoints(points + 1)
    } else {
      window.alert("You can't afford that!")
    }
  }

  const reset = () => {
    setScore(0)
    setPoints(1)
  }

  if (score < 100) {
    return (
      <main>
        <h1>Current Score: {score}</h1>
        <button onClick={counter}>+{points}</button>
        <br></br>
        <button onClick={increasePoints}>Pay 10 points to change from +{points} to +{points+1}</button>
      </main>
    )
  } else {
    return (
      <main>
        <h1>Current Score: {score}</h1>
        <h2>You Win!</h2>
        <button onClick={reset}>Play again?</button>
      </main>
    )
  }
      

}

export default App;

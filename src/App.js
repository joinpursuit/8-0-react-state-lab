import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(1);

  const counter = (score) => {
    setScore(score + points);
  }

  const increasePoints = (points) => {
    setScore(score - 10);
    setPoints(points++);
  }
      
  return (
    <main>
      <h1>Current Score: {score}</h1>
      <button onClick={counter}>+{points}</button>
      <button onClick={increasePoints}>Pay 10 points to change from +{points} to +{points+1}</button>
    </main>
  );
}

export default App;

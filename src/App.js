import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [incrementor, setIncrementor] = useState(1);

  const updateScore = () => {
    setScore(score + incrementor);
  };
  const updateIncrementor = () => {
    if (score >= 10) {
      setScore(score - 10);
      setIncrementor(incrementor + 1);
    } else {
      alert("You can't afford that!");
    }
  };
  const reset = () => {
    setScore(0);
    setIncrementor(1);
  };

  return (
    <main>
      {score < 100 && (
        <div>
          {" "}
          <h1>Current Score: {score}</h1>
          <button onClick={updateScore}>+{incrementor}</button>
          <button onClick={updateIncrementor}>
            {" "}
            Pay 10 points to change from +{incrementor} to +{incrementor + 1}
          </button>
        </div>
      )}
      {score >= 100 && (
        <div>
          <h2>You Win!!</h2>
          <button onClick={reset}>Play Again?</button>
        </div>
      )}
    </main>
  );
}

export default App;

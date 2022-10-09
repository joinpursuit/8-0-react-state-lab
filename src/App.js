import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [win, setWin] = useState(false);

  const handleClick = () => {
    setScore((prev) => prev + increment);
  };

  useEffect(() => {
    if (score >= 100) {
      setWin(true);
    }
  }, [score]);

  const changeIncrement = () => {
    if (score >= 10) {
      setIncrement((prev) => ++prev);
      setScore((prev) => prev - 10);
    } else {
      window.alert("You can't afford that!");
    }
  };

  const reset = () => {
    setIncrement(1);
    setScore(0);
    setWin(false);
  };

  return (
    <main>
      {!win && (
        <>
          <h1>Current Score: {score}</h1>

          <button onClick={handleClick}>+{increment}</button>
          <button onClick={changeIncrement}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </>
      )}
      {win && (
        <>
          <h2>You Win!</h2>
          <button onClick={reset}>Play again?</button>
        </>
      )}
    </main>
  );
}

export default App;

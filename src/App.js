import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonValue, setButtonValue] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);

  function raiseButton() {
    if (currentScore >= 10) {
      setButtonValue(buttonValue + 1);
      setCurrentScore(currentScore - 10);
    } else {
      alert("You broke, cant buy points");
    }
  }

  function raiseScore() {
    setCurrentScore(currentScore + buttonValue);
  }

function reset(){
  setCurrentScore(0)
  setButtonValue(1)
}

  return (
    <main>
      {currentScore < 100 ? (
        <>
          <h3>
            Current Score: <span>{currentScore}</span>
          </h3>
          <div>
            <button onClick={raiseScore}>+{buttonValue}</button>
            <button onClick={raiseButton}>
              Pay 10 points to change from +{buttonValue} to +{buttonValue + 1}
            </button>
          </div>
        </>
      ) : (
        <>
        <h2>Current Score: {currentScore}</h2>
          <h2>You Win!</h2>
          <button onClick={reset}>Play again?</button>

        </>
      )}
      
    </main>
  );
}

export default App;

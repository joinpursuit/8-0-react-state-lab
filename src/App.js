import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [currentScore, setcurrentScore] = useState(0)

  const handleClickX = () => {
    setcurrentScore(currentScore + 1)
  }

  let [countX, setcountX] = useState(1)

  const handleClickPayTen = () => {
    if (currentScore >= 10) {
      setcountX(countX + 1)
      setcurrentScore(currentScore - 10)
    } else {
      alert("You can't afford that!");
    }
  }
  const handleClickReset = () => {
    setcurrentScore(currentScore = 0)
    setcountX(countX = 1)
  }


  if (currentScore > 100) {
    return (
      <main>
        <h1>Current Score: {currentScore}</h1>
        <div>
          <h2>You Win!</h2>
          <button onClick={handleClickReset}>Play again?</button>
        </div>
      </main>
    )
  } else {
    return (
      <main>
        <h1>Current Score: {currentScore}</h1>
        <div>
          <p>
            <button onClick={handleClickX}> +{countX}</button>
          </p>
          <p>
            <button onClick={handleClickPayTen}>
              Pay 10 points to change from +{countX} to +{countX + 1}
            </button>
          </p>
        </div>
      </main>
    );
  }
};

export default App;

// working with Jimmy - really good collab
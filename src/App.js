import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const buttons = document.querySelectorAll("button");

  function addToUserScore(addToScore) {
    setNewScore(startingScore + addToScore);
  }

  function changeAddToScore(addToScore) {
    if (startingScore < 10) {
      return alert("You can't afford that!");
    }

    setNewAddToScore(addToScore + 1);
    setNewScore(startingScore - 10);
  }

  function replay(number) {
    setNewAddToScore(1);
    setNewScore(0);
  }

  const [startingScore, setNewScore] = useState(0);
  const [addToScore, setNewAddToScore] = useState(1);


  return (
    <main>
      {startingScore < 100 ? (
        <>
        <p>Current Score: {startingScore} </p>
          <button onClick={() => addToUserScore(addToScore)}>
            +{addToScore}
          </button>
          <button onClick={() => changeAddToScore(addToScore)}>
            Pay 10 points to change from +{addToScore} to +{addToScore + 1}
          </button>
        </>
      ) : (
        <>
          <h2> You Win! </h2>
          <button onClick={() => replay(0)}>Play again?</button>
        </>
      )}
    </main>
  );
}

export default App;

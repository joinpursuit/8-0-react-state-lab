import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  //******* PIECES OF STATE ********

  //score counter
  const [score, setScore] = useState(0);

  //add value for adder button
  const [adderBtn, setAdderBtn] = useState(1);

  //Boolean used for levelUp functionality
  let [gameOverBool, setGameOverBool] = useState(false);

  //********* HELPER FUNCTIONS ********

  // checks status of score (if 100 pts game over)
  const checkScore = () => {
    if (score + adderBtn > 99) {
      setGameOverBool((gameOverBool = true));
    }
  };

  // fires when adder button is clicked
  const addToScore = () => {
    // checkScore();
    setScore(score + adderBtn);
    setTimeout(() => {
      checkScore();
    }, 1000);
  };

  const subtract10FromScore = () => {
    setScore(score - 10);
  };

  // fires within levelUpClickEvent
  const addToAdderButton = () => {
    setAdderBtn(adderBtn + 1);
  };

  // fires when levelUp button is clicked && score is at least 10
  const levelUpClickEvent = () => {
    if (score >= 10) {
      addToAdderButton();
      subtract10FromScore();
    } else {
      alert("You can't afford that!");
    }
  };

  const gameReset = () => {
    setScore(0);
    setAdderBtn(1);
    setGameOverBool(false);
  };

  //******* RETURN ********

  return (
    <div>
      <div className={gameOverBool ? "hidden" : "display"}>
        <h1>Current Score: {score}</h1>
        <button onClick={addToScore}>+{adderBtn}</button>
        <button onClick={levelUpClickEvent}>
          Pay 10 points to change from {adderBtn} to {adderBtn + 1}
        </button>
      </div>
      <div className={!gameOverBool ? "hidden" : "display"}>
        <h2>You Win!</h2>
        <button onClick={gameReset}>Play again?</button>
      </div>
    </div>
  );
}

export default App;

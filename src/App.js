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
  const [levelUpBool, setLevelUpBool] = useState(false);

  //********* HELPER FUNCTIONS ********

  // fires when adder button is clicked
  const addToScore = () => {
    setScore(score + adderBtn);
  };

  const subtract10FromScore = () => {
    setScore(score - 10);
  };

  // fires when levelUp button is clicked && score is at least 10
  const addToAdderButton = () => {
    setAdderBtn(adderBtn + 1);
  };

  const levelUpClickEvent = () => {
    if (score >= 10) {
      addToAdderButton();
      subtract10FromScore();
      console.log("i am firing");
    } else {
      alert("You can't afford this!");
    }
  };

  //******* RETURN ********

  return (
    <div>
      <h1>{score}</h1>
      <button onClick={addToScore}>+1</button>
      <button onClick={levelUpClickEvent}>
        Pay 10 points to change from {adderBtn} to {adderBtn + 1}{" "}
      </button>
    </div>
  );
}

export default App;

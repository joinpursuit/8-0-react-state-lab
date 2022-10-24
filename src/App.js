import React, { useState } from "react";
import "./App.css";


function App () {
   
  let [currentNumber, setCurrentNumber] = useState(1);

  let [score, setScore] = useState(0);

  function updatedScore() {

      setScore(score + currentNumber);

  }

function paidTen() {
  if (score < 10) {

    alert("You can't afford that!");

  }else if (score >= 10){

    setScore(score - 10)

    setCurrentNumber(currentNumber +1)
  }

}

function restartGame() {
  setCurrentNumber(1)
  setScore(0)
}
    return score >= 100 ? (
      <main>
       
      <div>
        <span>Your final score is {score}</span>
        <h2>You Win!</h2>
        <button className="restart" onClick={() => restartGame()}>Play again?</button>
      </div>
      </main>
    ):
   
    (
<main>
      <div>

        <h1>Current Score: {score} </h1>
        <button onClick={() => updatedScore()}>+{currentNumber}</button>
        <br />
        <button onClick={() => paidTen()}>Pay 10 points to change from +{currentNumber} to +{currentNumber +1} </button>

      </div>
      </main>
    );
}
    

export default App;
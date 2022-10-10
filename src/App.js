import "./App.css";
import React, { useState } from "react";
import Confetti from "react-confetti";

function App() {
  //set the default increment to be 1
  let [currentNumber, setCurrentNumber] = useState(1);
  //set the default score to be 0
  let [score, setScore] = useState(0);

  function updateScore() {
    //when the button is clicked to increment the score, the score should be incremented by the current number. ie if its 1 then add 1 to the score, if its 2 then add 2, etc
    setScore(score + currentNumber);
  }

  function payTen() {
    //when the button is clicked, 10 is subtracted from the score. if the score is under 10, an alert will be shown
    if (score < 10) {
      alert("You can't afford that!");
    } else {
      //if the score is 10 or above, the score will update as well as the the increment on each button
      setScore(score - 10);
      setCurrentNumber(currentNumber + 1);
    }
  }

  function playAgain() {
    //when this button is clicked, the numbers will go back to the defaults
    setCurrentNumber(1);
    setScore(0);
  }

  return score >= 100 ? (
    //if the score is 100 or above, "you win" will be shown as well as a "play again" button
    <main className="play-again">
      <Confetti />
      <span>Your Score Is: {score}!!</span>
      <h2>You Win!</h2>
      <button onClick={() => playAgain()}>Play again?</button>
      <br />
      <br />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSKjFByUS5GgWwmV5FIxPpPdjZVoAPIx-gw&usqp=CAU"
        alt="winner"
      />
    </main>
  ) : (
    //if the score is under 100, the game is played and the score updates as played
    <main className="start-game">
      <h1>Current Score: {score} </h1>
      <br />
      <button onClick={() => updateScore()}>+{currentNumber}</button>
      <br />
      <br />
      <button onClick={() => payTen()}>
        Pay 10 points to change from +{currentNumber} to +{currentNumber + 1}
      </button>
    </main>
  );
}

export default App;

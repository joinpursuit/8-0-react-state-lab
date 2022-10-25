import React, { useState } from "react";
import "./App.css";

function App () {
  const [score, setScore] = useState(0)
  const [incrementer, setIncrementer] = useState(1)
  
  function increaseScore (score) {
    setScore(score + incrementer)
  }

  function increaseIncrementer (incrementer) {
    if (score >= 10) {
      setIncrementer(incrementer + 1)
      setScore(score - 10)
    } else {
      alert("You can't afford that!")
    }
  }

  function newGame () {
    setScore(0)
    setIncrementer(1)
  }

    return score >= 100 ? ( <>
      <h1>Score: {score}</h1>
      <h2>You Win!</h2><button onClick={() => {newGame()}}>Play again?</button>
    </> ) : 
 ( <>
  <h1>Current Score: {score}</h1>
  <button onClick={() => {increaseScore(score)}}>+{incrementer}</button>
  <button onClick={() => {increaseIncrementer(incrementer)}}>Pay 10 points to change from +{incrementer} to +{incrementer + 1}</button>
  </>)
}

export default App;

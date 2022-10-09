import React from "react";
import { useState } from "react";
import "./App.css";

function App () {
  const [score,setScore]= useState(0)
  const [counter,setCounter]= useState(1)

  function Score() {
    setScore(score + counter) 
  }

  function increaseCounter() {
    if (score >= 10) {
      setScore(score - 10)
      setCounter(counter + 1)
    }else{
      alert(`You can't afford that!`)
    }
    
  }
  
  function resetGame() {
    setScore(0)
    setCounter(1)
  }
  

    if(score < 100 ){
      return (
        <main>
        <h1>Current Score: {score} </h1> 
        <div>
        <button id="add" onClick={Score} > +{counter}</button>
        </div>
        <div>
        <button onClick={increaseCounter}>Pay 10 points to change from +{counter} to +{counter + 1}
        </button>
        </div>

        </main>
      )
    }else{
      return(
        <main>
          <h2>You Win!</h2>
          <button onClick={resetGame}>Play again?</button>
        </main>
      )
    }
}
      export default App;

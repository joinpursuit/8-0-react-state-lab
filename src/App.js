import React from "react";
import "./App.css";
import {useState} from 'react'

function App () {
  const [score, setScore] = useState(0)
  const [x, setX] = useState(1)
  const [y, setY] =useState(2)

  const updateScore = () => {
   setScore(score + x)
   
    }

  const fromXToY = () => {
     if(score >= 10){
      setScore(score - 10)
      setX(x + 1)
      setY(y + 1)
    } else {
      alert(`You can't afford that!`)
    }
    
    }
    const playAgain = () => {
      setScore(0)
      setX(1)
      setY(2)
    }

    if(score < 100){
      return (
        <main>
          <h1>Current Score: {score}</h1>
          <button onClick={updateScore}>+{x}</button>
          <button onClick={fromXToY}>Pay 10 points to change from +{x} to +{y}</button>
        </main>
      )
     } else {
      return (
        <main>
        <h2>You Win!</h2>
      <button onClick={playAgain}>Play again?</button>
        </main>
      )
    }
      
  }

export default App;

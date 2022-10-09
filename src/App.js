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

    if(score < 10){
      setScore(alert(`You can't afford that!`))
    }

     if(score <= 10){
      setScore(score - x) 
    } 
    }

      return (
        <main>
          <p>Current Score: {score}</p>
          <button onClick={updateScore}>+{x}</button>
          <button onClick={fromXToY}>Pay 10 points to change from ={x} to +{y}</button>
        </main>
      );
  }


export default App;

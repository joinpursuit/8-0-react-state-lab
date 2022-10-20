import React from 'react';
import { useState } from "react";

const Child = () => {
// Declare our states
const [score, setScore] = useState(0)
const [incrementOneButton, setIncrementOneButton] = useState(1)

//Function for brand new game ( default state / start state )
function newGame() {
    setScore(0)
    setIncrementOneButton(1)
    return(
        <Child />
    )
}

// Function for score incrementer
function addButtonValue() {
    const newScore = score + incrementOneButton
    setScore(newScore)
  }

  // Function for Plus ten points
  function buyTenPoints() {
    if (score - 10 < 0){
      alert(`You can't afford that!`)
    }
    else{
      setScore(score - 10)
      setIncrementOneButton(incrementOneButton + 1)
    }
  }

  // game win conditon

  if(score >= 100){
    return(
        <>
        <h1>You Win!</h1>
        <h2>Score: <span>{score}</span></h2>
        <button onClick={()=>{newGame()}}>Play again?</button>
        </>
    )
  }

  // Display ( DOM )
    return (
        <div>
            <h1>Current Score: <span>{score}</span></h1>
            <button onClick={() => {addButtonValue()}}>+{incrementOneButton}</button>
            <button onClick={() => {buyTenPoints()}}>Pay 10 points to change from +{incrementOneButton} to +{incrementOneButton + +1}</button>
        </div>
    );
};

export default Child;
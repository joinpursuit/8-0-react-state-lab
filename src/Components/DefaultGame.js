import React from "react";
import { useState } from "react";


function DefaultGame() {
  const [score, setScore] = useState(0)
  const [plusOneButton, setPlusOneButton] = useState(1)
 
  //Function for newGame
  function newGame() {
    setScore(0)
    setPlusOneButton(1)
    return(
      <DefaultGame />
    )
  }

// Function for payTenPointsButton
function payTenPoints() {
  if (score - 10 < 0){
    alert(`You can't afford that!`)
  }
  else{
    setScore(score - 10)
    setPlusOneButton(plusOneButton + 1)
  }
}

// Function for score incrementer
function addButtonValue() {
  const newScore = score + plusOneButton
  setScore(newScore)
}

// Game win conditional 
if(score >= 100){
  return(
    <>
      <h1>You Win!</h1>
      <h2>Score: {score}</h2>
      <button onClick={()=>{newGame()}}>Play again?</button>
    </>
  )
}

  return (
    <>
      <h1>Current Score: {score}</h1>
      
      <button onClick={() => {addButtonValue()}}>+{plusOneButton}</button>

      <button onClick={() => {payTenPoints()}}>Pay 10 points to change from +{plusOneButton} to +{plusOneButton + +1}</button>
    </>
  );
}

export default DefaultGame;

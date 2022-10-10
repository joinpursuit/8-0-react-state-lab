import React from "react";
import { useState } from "react";
import Victory from "./Victory";


function DefaultGame({scoreStart}) {
  const [score, setScore] = useState(0)
  const [plusOneButton, setPlusOneButton] = useState(1)
 
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
if(score >= 100){
  return(
    <Victory />
  )
}
else {
  return (
    <>
      <h1>Current Score: {score}</h1>
      <button
        className="plusOne"
        onClick={() => {
          addButtonValue();
        }}
      >
        +{plusOneButton}
      </button>
      <button
        className="tenPoints"
        onClick={() => {
          payTenPoints();
        }}
      >
        Pay 10 points to change from +{plusOneButton} to +{plusOneButton + +1}
      </button>
    </>
  );
}
  
}

export default DefaultGame;

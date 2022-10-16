import React from "react";
import { useState } from "react";
import "./App.css";

function App () {
   const [score, setScore] =  useState(0);  //Creates a state & holds value for how many times clicked. Start score at 0.
   const [scoreUp, setScoreUp] = useState(1); 
   
    // Score incrementor function
    const newScore = () => {
      setScore(score + scoreUp) // adds 1 to the score
    }

    // Function for spend 10 points 
    const spendTen = () => {
      if (score < 10) {
        alert(`You can't afford that!`)
      } else {
          setScore(score - 10)
          setScoreUp(scoreUp + 1)
      };
    }

    // function to reset score
    const resetScore = () => {
      setScore(0)
      setScoreUp(1)
    }
    return (score >= 100) ? 
         (
          <main>
          
            {/* <h1>Current Score: <span>{score}</span></h1> */}
            <h2>You Win! {score}</h2>
            <button type="submit" onClick={ resetScore }>Play again?</button>
          
          </main>
        )
       : 
        (
          <main>
          
            <h1>Current Score: <span>{ score }</span> </h1>
            <button onClick={ newScore }>+{ scoreUp }</button>
            <br></br>
            <br></br>
            <button onClick={ spendTen }>Pay 10 points to change from +{ scoreUp } to +{scoreUp +1}</button>
          
          </main>
        );
    
  };


  
  

export default App;

import React from "react";
import { useState } from "react";
import "./App.css";

function App () {
    let [score, setScore] = useState(0)
    let [counter, setCounter]=useState(+1)

    const scoreBoard=()=>{
      setScore(score += counter)
    }

    const counterIncreaser=()=>{
      if (score >= 10 ){
        setCounter(counter+1)
        setScore(score-10)
        
      }
      else{
        alert(`You can't afford that!`)
      }
    }

    const playAgain=()=>{
      setCounter(1)
      setScore(0)
      
    }

    if(score >= 100){
      return(
        <div>
          <h2>You Win!</h2>
          <button onClick={playAgain}>Play again?</button>
        </div>
      )
    }

    return(
      <main>
        <div>
        <h1>
            Current Score: {score}
          </h1>
        </div>
        <div>
          <button onClick={scoreBoard}>+{counter}</button>
        </div>
        <div>
          <button onClick={counterIncreaser} >
            Pay 10 points to change from +{counter} to +{counter + 1}
          </button>
        </div>
      </main>
    )
   
}

export default App;

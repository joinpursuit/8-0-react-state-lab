import React from "react";
import "./App.css";
import { useState } from 'react'
//For the record using class would have been faster...

function App () {
  const [currentScore, setScore] = useState(0)
  const [incrementor, setIncrementor] = useState(1)
  const [visible, setVisible] = useState(false)

  const handleIncreaseIncrementor = () => {
    if(currentScore > 9){
      setIncrementor(incrementor + 1)
      setScore(currentScore - 10)
    }else{
      alert(`You can't afford that!`)
    }
  }


  const handleIncreaseScore = () => {
    let count = currentScore + incrementor
    setScore(count)
    if (count > 99){
      setVisible(true)
    }
  }

  const resetGame = () => {
    setScore(0)
    setIncrementor(1)
    setVisible(false)
  }
  //Set office hour to compare returns
    return (
      <main>
        {!visible &&(
          <>
        <h2>Current Score: {currentScore}</h2>
        <button onClick={handleIncreaseScore}>+{incrementor}</button>
        <br/>
        <button onClick={handleIncreaseIncrementor}>Pay 10 points to change from +{incrementor} to +{incrementor + 1}</button>
        </>
        )}
        <h2>You Win!</h2>
        <button onClick={resetGame} type = "submit">Play again?</button>
      </main>
    );
}

export default App;

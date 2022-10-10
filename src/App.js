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
    setScore(currentScore + incrementor)
  }

  const resetGame = () => {
    setScore(0)
    setIncrementor(1)
    setVisible(false)
  }

  
    return (
      <main>
        <h2>Current Score: {currentScore}</h2>
        <button style={currentScore >= 100 ? {visible} : null} onClick={handleIncreaseScore}>+{incrementor}</button>
        <br /><br />
        <button style={currentScore >= 100 ? {visible} : null} onClick={handleIncreaseIncrementor}>Pay 10 points to change from +{incrementor} to +{incrementor + 1}</button>
        <h2 style={currentScore <= 99 ? {visible} : null}>You Win!</h2>
        <button style={currentScore <= 99 ? {visible} : null} onClick={resetGame} type = "submit">Play again?</button>
      </main>
    );
}

export default App;

import React from "react"
import "./App.css"
import { useState } from "react"

function App() {
  const [score, setScore] = useState(0)
  const [value, setValue] = useState(1)

  const counter = () => {
    setScore(score + value)
  }

  const reSet = () => {
    setScore(0)
    setValue(1)
  }
  const increaseTen = () => {
    if (score < 10) {
      alert("You can't afford that!")
    } else {
      setScore(score - 10)
      setValue(value + 1)
    }
  }

  return (
    <main>
      {score < 100 ? (
        <div>
          <h1>Current Score: {score}</h1>
          <button style={{ width: "7vh" }} onClick={counter}>
            +{value}
          </button>
          <br></br>
          <button onClick={increaseTen}>
            Pay 10 points to change from +{value} to +{value + 1}
          </button>
          <br></br>
        </div>
      ) : (
        <div>
          <h1>You Win!</h1>
          <button onClick={reSet}>Play again?</button>
        </div>
      )}
    </main>
  )
}

export default App

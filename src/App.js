import React from "react";
import { useState } from "react";
import "./App.css";


function App () {
  
  
  let [counter, setCounter] = useState(0)
  let [point, setPoint] = useState(+1)

  const count = () => {
    setCounter((counter += point))

  }
  
  const points = () => {
    if(counter < 10){
      alert(`You can't afford that!`)
    } else {
      setPoint(point + 1)
      setCounter(counter - 10)
    }
  }

  const resetCounter = () => {
    setCounter(0)
    setPoint(1)
  }

  if (counter >= 100){
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={resetCounter}>Play again?</button>
      </div>
    )
  }

  return (
    <div>
      <main>
        <div>
         <h1> Current Score: {counter}</h1>
        </div>
        <div>
          <button onClick={count}>+{point}</button>
        </div>
        <div>
          <button onClick={points}>Pay 10 points to change from +{point} to +{point + 1}</button>
        </div>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  //* State initialized to 0.
  const [counter, setCounter] = useState(0);
  let [count, setCount] = useState(+1);
  // const incrementer = () => {
  //   setCounter(counter + 1);
  //   }
  //* Decrementor  10 for upgradting points / aAert message
  const decrementor = () => {
    //* Alert Msg
    //* Incrementer for counter
    setCounter(counter + 1);
    if (counter <= 10) {
      alert("You can't afford that!");
    } else {
      setCounter(counter - 10);
      setCount((count += count));
    }
  };
  //* Increase Score
  function increaseScore() {
    setCounter((count += counter));
  }
  //* End Game

  return (
    <div>
      <h1>Current Score {counter}</h1>
      <button onClick={increaseScore}>
        {"+"}
        {count}
      </button>
      <br />
      <button onClick={decrementor}>
        Play 10 points change from +{count} to +{count + 1}
      </button>
    </div>
  );
}

export default App;

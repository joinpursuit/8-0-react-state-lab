import React from "react";
import "./App.css";
import { useState } from "react";
// import End from "./Components/End";

function App() {
  //* State initialized to 0.
  const [counter, setCounter] = useState(0);
  //* Initialized incrementor to 1
  let [count, setCount] = useState(+1);
  //* Decrementor ->10 for upgrading points / Alert message
  const decrementor = () => {
    //* Incrementer for counter
    // setCounter(counter += 1);
    if (counter < 10) {
      alert("You can't afford that!");
    } else {
      setCounter(counter - 10);
      setCount(count + 1);
    }
  };
  //* Increase Score
  function IncreaseScore() {
    setCounter((count += counter));
  }
  //* Play Again btn
  const PlayAgain = () => {
    setCounter(0);
    setCount(1);
  };
  // const play document.querySelector
  //* End Game Victory Screen
  if (counter >= 100) {
    return (
      <main>
        <div>
          <h2 className={""}>You Win!</h2>
          <button className="PlayAgain" onClick={PlayAgain}>
            Play again?
          </button>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <h1>Current Score: {counter}</h1>
        <div className="Btn1">
          <button className="Incrementor" onClick={IncreaseScore}>
            +{count}
          </button>
          <br />
          <button onClick={decrementor}>
            Pay 10 points to change from +{count} to +{count + 1}
          </button>
        </div>
      </main>
    );
  }
}

export default App;

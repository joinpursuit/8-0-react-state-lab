import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  //* State initialized to 0.
  const [counter, setCounter] = useState(0);
  //*
  let [count, setCount] = useState(+1);
  //* Victory Screen state initialized to display none
  // const [Screen, setScreen] = useState(false);
  // const incrementer = () => {
  //   setCounter(counter + 1);
  //   }
  //* Decrementor ->10 for upgrading points / Alert message
  const decrementor = () => {
    //* Alert Msg
    //* Incrementer for counter
    setCounter(counter + 1);
    if (counter <= 10) {
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
  //*Play Again btn
  // const  document.querySelector
  const PlayAgain = () => {
    window.location.reload();
  };
  //* End Game
  if (counter > 100) {
    return (
      <main>
        <h2>You win!</h2>
        <div>
          {" "}
          <h2 className={""}>You Win!</h2>
          {/* <button onClick={() => setScreen(true)}>Play Again</button> */}
          <button className="PlayAgain" onClick={PlayAgain}>
            Play again?
          </button>
        </div>
      </main>
    );
  }
  // else{}

  return (
    <main>
      <h1>Current Score {counter}</h1>
      <div>
        <button className="Incrementor" onClick={IncreaseScore}>
          +{count}
        </button>
        <br />
        <button onClick={decrementor}>
          Pay 10 points change from +{count} to +{count + 1}
        </button>
        <div>
          {/* {" "}
          <h2 className={""}>You Win!</h2>
          {/* <button onClick={() => setScreen(true)}>Play Again</button> */}
          {/* <button className="PlayAgain" onClick={PlayAgain}>
            Play again? </button> */}
        </div>
      </div>
    </main>
  );
}

export default App;

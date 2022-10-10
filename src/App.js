import React from "react";
import "./App.css";
import { useState } from "react";
//!
const colors = [
  "burlywood",
  "coral",
  "red",
  "lightgoldenrodyellow",
  "purple",
  "brown",
  "cadetblue",
  "cartreuse",
  "floralwhite",
];

function App() {
  //! ------------ Bonus Section ----------
  //* Backfround Color initial state set to, white
  const [color, setColor] = useState("peachpuff");
  // * random color
  const changeColor = () => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    console.log(colorIndex);
    //! to get random color
    setColor(colors[colorIndex]);
  };
  //! ------------  --------------

  //* State initialized to 0.
  const [counter, setCounter] = useState(0);
  //* Initialized incrementor to 1
  let [count, setCount] = useState(+1);
  //* Decrementor ->10 for upgrading points / Alert message
  const decrementer = () => {
    //* Incrementer for counter
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
  //* End Game Victory Screen
  if (counter >= 100) {
    return (
      <main>
        <div style={{ height: "100vh", backgroundColor: "forestgreen" }}>
          <h2>You Win!</h2>
          <button className="PlayAgain" onClick={PlayAgain}>
            Play again?
          </button>
        </div>
      </main>
    );
  } else {
    return (
      <main style={{ height: "100vh", backgroundColor: color }}>
        <h1>Current Score: {counter}</h1>
        <div className="Btn1">
          <button className="Incrementor" onClick={IncreaseScore}>
            +{count}
          </button>
          <br />
          <button
            onClick={() => {
              decrementer();
              changeColor();
            }}
          >
            Pay 10 points to change from +{count} to +{count + 1}
          </button>
        </div>
      </main>
    );
  }
}

export default App;

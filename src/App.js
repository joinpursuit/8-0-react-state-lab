import React, { useState } from "react";
import "./App.css";

/**
 * 
 *  const [counter, setCounter] = useState(0) 
console.log(counter)
counter===value
setCounter ===to set or update value
 */

function App() {
  let [number, increaseNumber] = useState(0);

  let [buttonValue, increaseButton] = useState(1);

  let increase = () => {
    increaseNumber((number += buttonValue)); //when button is clicked number will increase by 1

    //if (number === 10) increaseButton((buttonValue += 1));
  };

  let payUp = () => {
    if (number < 10) {
      alert("You can't afford that!");
    } else {
      increaseNumber(number - 10);
      increaseButton(buttonValue + 1);
      //increaseNumber(number += buttonValue) number value equal to button value
    }
  };

  let resetGame = () => {
    increaseNumber(0);
    increaseButton(1);
  };

  return (
    <main>
      {number >= 100 ? (
        <>
          <h1>You Win!</h1>
          <button onClick={resetGame}>Play again?</button>
        </>
      ) : (
        <>
          <h1>Current Score: {number}</h1>
          <button onClick={increase}> +{buttonValue} </button>
          <button onClick={payUp}>
            Pay 10 points to change from +{buttonValue} to +{buttonValue + 1}
          </button>
        </>
      )}
    </main>
  );
}
export default App;

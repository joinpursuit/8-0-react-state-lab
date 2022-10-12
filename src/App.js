import React, { useState } from "react";
import "./App.css";

/**
 * 
 *  const [counter, setCounter] = useState(0) 
console.log(counter)

//counter===value
//function to set or update value
 */

function App() {
  let [number, increaseNumber] = useState(0);

  let [buttonValue, increaseButton] = useState(+1);

  function increase() {
    increaseNumber((number += 1)); //when button is clicked number will increase by 1

    if (number === 10) {
      increaseButton((buttonValue += 1));
    }
   
  }

  function payUp () {

    if(number <= 10) {
      alert("no")
    }else {
  increaseNumber(number - 10)
    }
  }

  return (
    <main>
      <h1>Current Score:{number}</h1>
      <button onClick={increase}> +{buttonValue} </button>
      <button onClick={payUp}>
        Pay 10 points to change from +{buttonValue} to +{(buttonValue += 1)}
      </button>
      <button></button>
    </main>
  );
}
export default App;

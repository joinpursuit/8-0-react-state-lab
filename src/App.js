import React from "react";
import "./App.css";
import {useState} from 'react'


function App () {
let [counter , setCounter] = useState(0)


let [decrease] = useState(10)

let [increase , setIncrease] = useState(+1)


const counterIncrease = () => {
  setCounter(counter += increase)
  if(counter >= 100){
    document.querySelector(".victory").classList.remove("hidden")
    document.querySelector(".increase").classList.add("hidden")
    document.querySelector(".decrease").classList.add("hidden")
  }
}

const countDecrease = () => {
if(counter >= 10){
    setCounter(counter - decrease)
    setIncrease(increase + 1)
    
    }
  
  else {
    alert(`You can't afford that!`)
  }
}

const initialSate = () => {
  document.querySelector(".victory").classList.add("hidden")
    document.querySelector(".increase").classList.remove("hidden")
    document.querySelector(".decrease").classList.remove("hidden")
    setIncrease(increase = 1)  
    setCounter(counter = 0)
}


    return (
      <main>
        <p className="score">
        Current Score: {counter}
        </p>
        <h2 className=" victory hidden">You Win!</h2>
        <button className="increase" onClick={counterIncrease}>+{increase}</button>
        <br></br>
        <br></br>
        <button className="decrease" onClick={countDecrease}>Pay {decrease} points to change from +{increase} to +{increase + 1} </button>
        <br></br>
        <br></br>
        <button className="reset" onClick={initialSate}>Play again?</button>
      </main>
    );
}

export default App;

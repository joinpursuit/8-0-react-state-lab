import React from "react";
import "./App.css";
import {useState} from 'react'


function App () {
let [counter , setCounter] = useState(0)

const [decrease] = useState(10)

const counterIncrease = () => {
  setCounter(counter + 1)
  
  if(counter >= 100){
    document.querySelector(".victory").classList.remove("hidden")
    document.querySelector(".reset").classList.remove("hidden")
    document.querySelector(".increase").classList.add("hidden")
    document.querySelector(".decrease").classList.add("hidden")
  }
}

const countDecrease = () => {
if(counter >= 10){
    setCounter(counter - decrease)
}
  else {
    alert(`You can't afford that!`)
  }
}

const initialSate = () => {
  document.querySelector(".victory").classList.add("hidden")
    document.querySelector(".reset").classList.add("hidden")
    document.querySelector(".increase").classList.remove("hidden")
    document.querySelector(".decrease").classList.remove("hidden")
    setCounter(counter = 0)

}
  
    return (
      <main>
        <p className="score">
        Current Score: {counter}
        </p>
        <h2 className=" victory hidden">You win!</h2>
        <button className="increase" onClick={counterIncrease}>+{(counter - counter) + 1}</button>
        <br></br>
        <button className="decrease" onClick={countDecrease}>Pay {decrease} points to change from  to </button>
        <button className="reset hidden" onClick={initialSate}>Play again?</button>
      </main>
    );
}

export default App;

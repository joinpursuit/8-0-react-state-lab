import React from 'react';
import { useState } from "react";

const Child = () => {
// Declare our states
const [score, setScore] = useState(0)
const [incrementOneButton, setIncrementOneButton] = useState(1)

//Function for brand new game ( default state / start state )
function newGame() {
    setScore(0)
    setIncrementOneButton(1)
    return(
        <Child />
    )
}

// Function for score incrementer
function addButtonValue() {
    const newScore = score + incrementOneButton
    setScore(newScore)
  }

    return (
        <div>
            <h1>Current Score: <span>{score}</span></h1>
            <button onClick={() => {addButtonValue()}}>+{incrementOneButton}</button>
        </div>
    );
};

export default Child;
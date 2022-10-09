import React from 'react'
import { useState } from 'react';

let x = 0
let y = x + 1
let currentScore = 0
const addToScoreButton = document.querySelector('#addToScore')
const scoreForm = document.querySelector('.scoreForm')

const Score = () => {


scoreForm.addEventListener(('click'), (event) => {
    event.preventDefault()
    currentScore = x + event.target.value

   
})

return (
    <div>
        <header><h1>Current Score: {currentScore}</h1></header>
        <section className="scoreSection"> 
        <form className= "scoreForm" >   
                <label>
                <input id="addIt" name="addIt"  type="addIt" placeholder=" " /></label>
                <button id ='addToScore' >+{x}</button>

                <label>
                <input id="payForMore" name="payForMore"  type="number" placeholder="" value=""/></label>
                <button>`Pay 10 points to change from +${x} to +${y}`</button>

                <label>
                <input id="winner" name="winner"  type="text" placeholder=" " /></label>
                <button>You Win!</button>
        </form>
        </section>
    </div>
)


}

export default Score;

//Notes:

    // <button onClick={changeScore("Dark mode")}>Change to dark mode</button>
    // <button onClick={changeScore()}>`Pay 10 points to change from +${x} to +${y}`
    // </button>
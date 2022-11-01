import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
const [score,setScore]=useState(0)
const [increment,setIncrement]=useState(1)

function updateIncrements(){
  if (score<10){
    alert("You can't afford that!")
  }
  if(score>=10){
    setIncrement(increment+1) 
    setScore(score-10) 
}
}




    return (
      <main>
        {
        score>=100? 
        <>
       
        <h2>You Win!</h2>
        <button onClick={()=>{setScore(0); setIncrement(1)}}>Play again?</button>
        </>
        :
        <>
        <h1>Current Score: {score}</h1>
       
        <button onClick={()=>setScore(score+ increment)}>+{increment}</button>
        <button onClick={updateIncrements} >Pay 10 points to change from +{increment} to +{increment+1}</button>
        </>
        
        }
     
      </main>
    );
}

export default App;

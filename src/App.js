import React from "react";
import "./App.css";
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    // setCount is the function that updates the count
    
    const [incrementor, setIncrementor]= useState(1)
    const [winner, setWinner]= useState(false)
    console.log(count)
    
    function addToCount () {
      setCount(count +incrementor)
      winning()
    }
    function addToIncrementor(){
      if (count >= 10 ){
        setCount(count - 10)
        setIncrementor(incrementor +1)
      } else{
        alert("You can't afford that!")
      }
    }
    function winning(){
    if (count >= 100){
      setWinner(true)
    }
    }
    function refresh (){
      setCount(0)
      setIncrementor(1) 
      console.log("I am working")
      window.location.reload()
    }
    
    return ( 
      <main >
         <p> React State Lab </p>  
         <div style ={{display:winner ? "none": "block"}}>
          <h2> Current Score:{count}</h2> 

          
         <button onClick={addToCount}>+{incrementor}</button>
         <button onClick={addToIncrementor}>Pay 10 points to change from +{incrementor} to +{incrementor +1}</button>
         </div>
          {
          winner 
          ?
            <div> 
              <h2>You have a winner</h2>
              <button onClick={refresh}> Play Again</button>
            </div>
            : 
            null
      
         }
      </main>
      
    );
}

export default App;
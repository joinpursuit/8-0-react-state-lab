import React, { useState } from "react";
import "./App.css";
// import { useState } from "react";



function App () {

  let [userNum,setNum] = useState(0)
  let [x,moreX] = useState(1)
  let [y,moreY] = useState(2)

const addX = () =>{
  console.log(userNum)
   if(userNum <=100){
    setNum( userNum + x)
  }
    
  
}


const increaseX = () =>{
  if(userNum>=10){
    moreX(x+1)
    moreY(y+1)
    setNum(userNum-10)
  }else{ alert("You can't afford that!")
    }

    
  
}
 if(userNum <100) { 
  return (
      <main>
        <p>React State Lab</p>
        <button onClick={addX}>+{x}</button>
        <h3>Current Score: {userNum}</h3>
        <button onClick={increaseX}>Pay 10 points to change from +{x} to +{y}</button>
      </main>
    );
 }else{

  const newGame = () =>{
  
    console.log("clicked")
    setNum(userNum = 0);
      moreX(x = 1)
      moreY(y=2)
      
    
  }
  
  

  return (
    <main>
      <h2>You Win!</h2>
      <h3>Score: {userNum}</h3>
      <button onClick={newGame}>Play again?</button>
    </main>
  
 )}
}

export default App;

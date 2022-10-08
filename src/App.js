import React, { useState } from "react";
import "./App.css";
// import { useState } from "react";



function App () {

  const [userNum,setNum] = useState(0)
  const [x,moreX] = useState(1)
  const [y,moreY] = useState(2)

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
  }else{ alert("You can't afford that!")}

  
}
    return (
      <main>
        <p>React State Lab</p>
        <button onClick={addX}>+{x}</button>
        <h3>Current Score: {userNum}</h3>
        <button onClick={increaseX}>Pay 10 points to change from +{x} to +{y}</button>
      </main>
    );
}

export default App;

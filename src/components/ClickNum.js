import React from "react";

function CurrentScore({count, setCount, multiplier, setMultiplier}) {

  
  function incrementCount() {
    setCount(count + multiplier);
  }

  function payPoints(){
    if(count < 10){
  alert ("You can't afford that!")
    }else{
  setCount(count - 10)  
  setMultiplier(multiplier +1 )
    }
  }


  return (
    <div>

      <div><h1>Current Score: {count}</h1></div>
      
      <div><button onClick={incrementCount}>+{multiplier}</button></div> 

      <div><button onClick={payPoints}>Pay 10 points to change from +{multiplier} to +{multiplier +1}</button></div>

    </div>
  );
}

export default CurrentScore;

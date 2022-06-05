import React, {useState} from "react";
import "./App.css";

const App = () => {
   const [count,setCount]= useState(0)  
    const [incrementor,setIncrementor] = useState(1)

  const handleClick = () => {
  setCount(count + incrementor)
  }
  const playAgain = () => {
    setCount(0);
    setIncrementor(1);
  };
  
 

 const handleIncrementor = () => {
   if (count < 10) {
     alert(`You can't afford that!`);
   } else {
     setCount(count - 10)
     setIncrementor(incrementor + 1)
     };
   }
    if(count < 100){
     return (
       <div>
       <main>
         <h1>Current Score: {count}</h1>
         <button onClick={handleClick}>+{incrementor}</button>
         <p></p>
         <button onClick={handleIncrementor}>
           Pay 10 points to change from +{incrementor} to +
           {incrementor + 1}
         </button>
       </main>
       </div>
     );
     
   }
   else if (count >= 100) {
    return (
      <main>
        <h2>You Win!</h2>
        <button onClick = {playAgain}>Play again?</button>
      </main>
    );
  }
  }


 
 

  export default App;

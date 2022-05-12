import React, {useState} from "react";
import reactDom from "react-dom";

const App = () => {
  const [count, setCount] = useState(0)
  const [incrementor, setIncrementor] = useState(1)
  const addPoints = () => {
    setCount(count + incrementor) 
    };
  const payBtn  = () => {
    if (count < 10) {
      alert("You can't afford that!")
    } else {
      setCount(count - 10)
      setIncrementor(incrementor + 1)
    }
  };
  const playAgainBtn = () => {
   setCount(0)
   setIncrementor(1)
  };

    if (count < 100) {
      return (
        <>
          <div>
            <h1>Current Score: {count}</h1>
          </div>
          <div>
            <button onClick={()=>addPoints()}>+{incrementor}</button>
          </div>
          <div>
            <button onClick={()=>payBtn()}>
              Pay 10 points to change from +{incrementor} to +{incrementor + 1}
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div>
            <h1>{count}!</h1>
            <h2>You Win!</h2>
            <button onClick={()=>playAgainBtn()}>Play again?</button>
        </div>
      );
    }
}
export default App;
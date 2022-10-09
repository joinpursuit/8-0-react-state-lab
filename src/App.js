import {React,useState} from "react";
import "./App.css";


function App () {
  const [score,setScore] = useState(0); 
  const [clickCount,setClickCount] = useState(0); 
  const [modifier,setModifier] = useState(1); 
  const [winningMessage,setWinning] = useState("");

  const on_incrementor_click = ()=>{
    if(score<10)
    {
      alert("You can't afford that!");
      return;
    }
    setScore(score-10);
    setModifier(modifier+1);
    setClickCount(clickCount+1);
  }
  const on_x_click =()=>{
    let endpoint = 100;

    if(score<endpoint) setScore(score + modifier);
    if(score + modifier>=endpoint)
    {
      setWinning("You Win!")
    }
    setClickCount(clickCount+1);
    console.log(winningMessage,winningMessage!=="")
  }
  const reset = ()=>{
    setClickCount(0);
    setModifier(1);
    setScore(0);
    setWinning("");
  }
  return (
    <main>
      <p>React State Lab</p>
      <div>
        
        {winningMessage===""?
          <div>
            <p>Current Score: {score}</p>
            <button onClick={on_x_click}>+{modifier}</button>
            <p>Current Incrementor</p>
            <h3>{modifier}</h3>
            <button onClick={on_incrementor_click}>"Pay 10 points to change from +{modifier} to +{modifier +1}"</button>
          </div>
          :
          <div>

            <p>you clicked {clickCount} time.</p>
            <h2>{winningMessage}</h2>
            {winningMessage!==""?
              <button onClick={reset}>Play again?</button>
            :""}
          </div>
        }
          
        
        
        
        
      </div>
      
      </main>
  );
}

export default App;

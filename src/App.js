import React from "react";
import "./App.css";
import { useState } from "react";
import Won from "./helper/Won";

function App() {
  let [counter, setCounter] = useState(1);
  let [score, setScore] = useState(0);
  let [appear, setAppearance] = useState("none");

  let changeCounter = () => {
    if (score < 10) {
      alert("You can't afford that!");
    } else {
      setScore((score -= 10));
      setCounter(counter + 1);
    }
  };

  let changeScore = () => {
    setScore((score += counter));
  };
  if (score >= 100) {
    return <Won />;
  } else {
    return (
      <main>
        <h1>Current Score: {score}</h1>
        <div className="holdsButtons">
          <button style={{ display: "visible" }} onClick={changeScore}>
            {" "}
            +{counter}
            <br></br>
          </button>
          <button style={{ display: "visible" }} onClick={changeCounter}>
            Pay 10 points to change from +{counter} to +{counter + 1}
          </button>
        </div>
      </main>
    );
  }
}

export default App;

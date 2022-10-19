import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [increase, setIncrease] = useState(1);

  function addToTotal() {
    setTotal(increase + total);
  }

  function addToIncrease() {
    if (total >= 10) {
      setIncrease(increase + 1);
      setTotal(total - 10);
    } else {
      alert("You can't afford that!");
    }
  }

  return (
    <>
      <main>
        <h4>Current Score: {total} </h4>
        <button onClick={addToTotal}>+ {increase}</button>
        <button onClick={addToIncrease}>Pay 10 for +1 to {increase}</button>
      </main>
    </>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import "./App.css";
import ClickNum from "./components/ClickNum";
import Winner from "./components/Winner";

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  return (
    <main>
      {count < 100 ? (
        <ClickNum
          count={count}
          setCount={setCount}
          multiplier={multiplier}
          setMultiplier={setMultiplier}
        />
      ) : (
        <Winner 
        setCount={setCount} 
        setMultiplier={setMultiplier} 
        />
      )}
    </main>
  );
}

export default App;

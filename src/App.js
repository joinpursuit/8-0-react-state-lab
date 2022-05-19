import React from "react";
import "./App.css";
import ClickerGame from "./Components/ClickerGame";

class App extends React.Component {
  render() {
    return (
      <main>
        <p>React State Lab</p>
        <ClickerGame />
      </main>
    );
  }
}

export default App;

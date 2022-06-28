import React from "react";
import "./App.css";
import ClickerScore from "./Components/ClickerScore"

class App extends React.Component {
  render() {
    return (
      <main>
        <p>React State Lab</p>
        <ClickerScore></ClickerScore>
      </main>
    );
  }
}

export default App;

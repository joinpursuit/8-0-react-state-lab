import React from "react";
import "./App.css";
import Increment from "./Increment"
import Score from "./PayPoints"
import playAgain from ".playAgain"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
    }
  }

  // event handler 
  changeScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1})
  };

  render() {
    return (
      <main>
        <p>Current Score: {currentScore}</p>
      </main>


    );
  }
}

export default App;

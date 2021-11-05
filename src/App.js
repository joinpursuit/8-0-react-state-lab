import React from "react";
import "./App.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        score: 0,
        increment: 1
    }
  }

  incrementMethod = () => {
    const {score, increment} = this.state; 
    this.setState({
        score: score + increment
    })
  }

  scoreUpdateMethod = () => {
    this.state.increment = this.state.increment + 1
    this.setState({
        score: this.state.score - 10
    })
  }

  promptMethod = () => {
    alert("You can't afford that!");
  }

  playAgain = () => {
    this.setState({
        score: 0,
        increment: 1
    })
  }
  
  render() {
    const {score, increment} = this.state;
    const nextIncrement = increment + 1;

    if(score < 100) {
      return (
          <main className="display">
              <h1>Current Score: {score}</h1>
              <button onClick={this.incrementMethod}>+{increment}</button>
              <br />
              <button onClick={score < 10 ? this.promptMethod : this.scoreUpdateMethod}>Pay 10 points to change from +{increment} to +{nextIncrement}</button>
          </main>
      )
    } else {
      return (
          <main className="resetGame">
              <h2>You Win!</h2>
              <button onClick={this.playAgain}>Play again?</button>
          </main>
      )
    }
  }
}

export default App;

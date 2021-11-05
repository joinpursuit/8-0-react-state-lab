import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      score: 0,
      clickPoints: 1
    }
  }

  addToScore = () => {
    const { score, clickPoints } = this.state;
    this.setState({
      score: score + clickPoints
    })
  }

  upgradeClickPoints = () => {
    const { score, clickPoints } = this.state;

    if(score > 9) {
      this.setState({
        clickPoints: clickPoints + 1,
        score: score - 10
      })
    } else {
      alert("You can't afford that!")
    }
  }

  playAgain = () => {
    this.setState({
      score: 0,
      clickPoints: 1
    });
  }

  render() {
    const { score, clickPoints } = this.state;

    if(score < 100) {
      return (
        <main>
          <p>React State Lab</p>
          <h1>Current Score: {score}</h1>
          <button onClick={this.addToScore}>+{clickPoints}</button>
          <button onClick={this.upgradeClickPoints}>Pay 10 points to change from +{clickPoints} to +{clickPoints+1}</button>
        </main>
      );
    } else {
      return (
        <main>
          <h2>You Win!</h2>
          <button onClick={this.playAgain}>Play again?</button>
        </main>
      )
    }
  }
}

export default App;

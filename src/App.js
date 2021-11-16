import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      points: 1,
    };
  }

  addPoints = () => {
    const { score, points } = this.state;
    if (score >= 10) {
      this.setState({
        points: points + 1,
        score: score - 10,
      });
    } else {
      alert("You can't afford that!");
    }
  };
  addToScore = () => {
    const { score, points } = this.state;
    this.setState({
      score: score + points,
    });
  };

  reset = () => {
    this.setState({
      score: 0,
      points: 1,
    });
  };

  render() {
    const { score, points } = this.state;
    if (score < 100) {
      return (
        <main>
          <p>React State Lab</p>
          <h1>Current Score: {score}</h1>
          <button onClick={this.addToScore}>+{points}</button>
          <button onClick={this.addPoints}>
            Pay 10 points to change from +{points} to +{points + 1}
          </button>
        </main>
      );
    } else {
      return (
        <div>
          <h2>You Win!</h2>
          <button onClick={this.reset}>Play again?</button>
        </div>
      );
    }
  }
}

export default App;

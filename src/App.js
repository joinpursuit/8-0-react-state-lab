import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 1,
      currentScore: 0,
      actions: 0,
    };
  }
  //increase score by current x value and check reaching 100
  xClick = () => {
    this.setState({
      currentScore: this.state.currentScore + this.state.x,
      actions: this.state.actions + 1,
    });
  };

  //attempt to increase x-value if conditions met
  xIncrease = () => {
    if (this.state.currentScore >= 10) {
      this.setState({
        currentScore: this.state.currentScore - 10,
        x: this.state.x + 1,
        actions: this.state.actions + 1,
      });
    } else {
      alert("You can't afford that!");
    }
  };

  //reset to starting values
  playAgain = () => {
    this.setState({
      currentScore: 0,
      x: 1,
      actions: 0,
    });
  };

  render() {
    return (
      <main>
        {this.state.currentScore < 100 && (
          <div>
            <h1>Current Score: {this.state.currentScore}</h1>
            <h3>Actions taken: {this.state.actions}</h3>
            <button onClick={this.xClick}>+{this.state.x}</button>
            <p></p>
            <button onClick={this.xIncrease}>
              Pay 10 points to change from +{this.state.x} to +
              {this.state.x + 1}
            </button>
          </div>
        )}
        {this.state.currentScore >= 100 && (
          <div>
            <h2>You Win!</h2>
            <h3>Actions taken: {this.state.actions}</h3>
            <button onClick={this.playAgain}>Play again?</button>
          </div>
        )}
      </main>
    );
  }
}

export default App;

import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      addPoints: 1,
      
    };
  }

  increaseScore = () => {
    const { currentScore, addPoints } = this.state;

    this.setState({
      currentScore: currentScore + addPoints,
    });
  };

  increaseAddPoints = () => {
    const { currentScore, addPoints } = this.state;

    if (currentScore >= 10) {
      this.setState({
        currentScore: currentScore - 10,
        addPoints: addPoints + 1,
      });
    } else {
      alert(`You can't afford that!`);
    }
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      addPoints: 1,
      
    });
  };

  render() {
    if (this.state.currentScore < 100) {
      return (
        <main>
          <h1 id="currentScore">Current Score: {this.state.currentScore}</h1>
          <div>
            <button id="plus-button" onClick={this.increaseScore}>+{this.state.addPoints}
            </button>
          </div>
          <div>
            <button id="pay-button" onClick={this.increaseAddPoints}>
              Pay 10 points to change from +{this.state.addPoints} to +{this.state.addPoints + 1}
            </button>
          </div>
          <div></div>
        </main>
      );
    } else {
      return (
        <main>
          <h2>You Win!</h2>
          <button onClick={this.handleReset}>Play again?</button>
        
        </main>
      );
    }
  }
}
export default App;

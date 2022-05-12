import React from "react";

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      increment: 1,
    };
  }

  addIncrement = () => {
    this.setState({
      currentScore: this.state.currentScore + this.state.increment,
    });
  };

  increaseIncrement = () => {
    if (this.state.currentScore >= 10) {
      this.setState({
        currentScore: this.state.currentScore - 10,
        increment: this.state.increment + 1,
      });
    } else {
      alert("You can't afford that!");
    }
  };

  playAgain = () => {
    this.setState({
      currentScore: 0,
      increment: 1,
    });
  };

  render() {
    const { currentScore, increment } = this.state;
    return (
      <div>
        {currentScore < 100 ? (
          <>
            <h1>Current Score: {currentScore}</h1>
            <button onClick={this.addIncrement}>+{increment}</button>
            <br />
            <br />
            <button onClick={this.increaseIncrement}>
              Pay 10 points to change from +{increment} to +{increment + 1}
            </button>
          </>
        ) : (
          <>
            <h2>You Win!</h2>
            <button onClick={this.playAgain}>Play again?</button>
          </>
        )}
      </div>
    );
  }
}

export default Clicker;

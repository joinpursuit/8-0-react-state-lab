import React from "react";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      points: 0,
      incrementor: 1,
    };
  }

  addPoints = () => {
    this.setState({
      points: this.state.points + this.state.incrementor,
    });
  };

  payButton = () => {
    if (this.state.points >= 10) {
      this.setState({
        points: this.state.points - 10,
        incrementor: this.state.incrementor + 1,
      });
    } else {
      alert("You can't afford that!");
    }
  };

  playAgain = () => {
    this.setState({
      points: 0,
      incrementor: 1,
    });
  };

  render() {
    const { points, incrementor } = this.state;
    if (points < 100) {
      return (
        <>
          <div>
            <h1>Current Score : {points}</h1>
          </div>
          <div>
            <button onClick={this.addPoints}>+{incrementor}</button>
          </div>
          <div>
            <button onClick={this.payButton}>
              Pay 10 points to change from +{incrementor} to +{incrementor + 1}
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div>
          <p>
            <strong>Current Score : {points}</strong>
          </p>
          <p>
            <h3>You Win!</h3>
          </p>
          <p>
            <button onClick={this.playAgain}>Play again?</button>
          </p>
        </div>
      );
    }
  }
}

export default Counter;

import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      incrementor: 1,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + this.state.incrementor,
    });
  };

  payButton = () => {
    if (this.state.count >= 10) {
      this.setState({
        count: this.state.count - 10,
        incrementor: this.state.incrementor + 1,
      });
    } else {
      alert("You can't afford that!");
    }
  };

  playAgainButton = () => {
    this.setState({
      count: 0,
      incrementor: 1,
    });
  };

  render() {
    if (this.state.count < 100) {
      return (
        <>
          <h1>Current Score: {this.state.count}</h1>
          <button onClick={this.increment}>+{this.state.incrementor}</button>
          <br></br>
          <br></br>
          <button onClick={this.payButton}>
            Pay 10 points to change from +{this.state.incrementor} to +
            {this.state.incrementor + 1}
          </button>
        </>
      );
    } else {
      return (
        <div>
          <h1>Current Score: {this.state.count}</h1>
          <h2>You Win!</h2>
          <button onClick={this.playAgainButton}>Play again?</button>
        </div>
      );
    }
  }
}

export default Counter;

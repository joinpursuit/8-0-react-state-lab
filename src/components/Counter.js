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

  playAgainBtn = () => {
    this.setState({
      count: 0,
      incrementor: 1,
    });
  };

  render() {
    return (
      <>
        <h1>Current Score: {this.state.count}</h1>
        <button onClick={this.increment}>+{this.state.incrementor}</button>
        <button onClick={this.payButton}>
          Pay 10 points to change from +{this.state.incrementor} to +
          {this.state.incrementor + 1}
        </button>
      </>
    );
  }
}

export default Counter;

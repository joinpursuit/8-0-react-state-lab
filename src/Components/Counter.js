import { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      increase: 1,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + this.state.increase, });
  };
  addToWin = () => {
    this.state.count >= 10
      ? this.setState({
          count: this.state.count - 10,
          increase: this.state.increase + 1,
        })
      : alert("You can't afford that!");
  };
  playAgainButton = () => {
    this.setState({
      count: 0,
      increase: 1,
    });
  };
  render() {
    if (this.state.count < 100) {
      return (
        <>
          <h1>Current Score: {this.state.count}</h1>
          <button onClick={this.increment}>+{this.state.increase}</button>
          <button onClick={this.addToWin}>
            Pay 10 points to change from +{this.state.increase} to +{this.state.increase + 1}
          </button>
        </>
      );
    } else {
      return (
        <div>
          <h1>{this.state.count}</h1>
          <h2>You Win!</h2>
          <button onClick={this.playAgainButton}>Play again?</button>
        </div>
      );
    }
  }
}

export default Counter;
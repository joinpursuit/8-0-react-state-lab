import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      incrementBy: 1,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + this.state.incrementBy,
    });
  };

  increaseIncrement = () => {
    return this.state.count >= 10
      ? (this.setState({ incrementBy: (this.state.incrementBy += 1) }),
        this.setState({ count: (this.state.count -= 10) }))
      : alert("You can't afford that!");
  };

  winCondition = () => {
    this.setState({ count: 0, incrementBy: 1 });
  };

  render() {
    return this.state.count < 100 ? (
      <>
        <h1>Current Score: {this.state.count}</h1>
        <button onClick={this.increment}>+{this.state.incrementBy}</button>
        <button onClick={this.increaseIncrement}>
          Pay 10 points to change from +{this.state.incrementBy} to +
          {this.state.incrementBy + 1}"
        </button>
      </>
    ) : (
      <>
        <h1>Score: {this.state.count}</h1>
        <h2>You Win!</h2>
        <button onClick={this.winCondition}>Play again?</button>
      </>
    );
  }
}

export default Counter;

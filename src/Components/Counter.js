import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      increment: 1,
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + this.state.increment,
    });
  };

  deductTenPoints = () => {
    if (this.state.count >= 10) {
      this.setState({
        count: this.state.count - 10,
        increment: this.state.increment + 1,
      });
    } else {
      alert("You can't afford that!");
    }
  };

  replay = () => {
    this.setState({ count: 0, increment: 1 });
  };

  render() {
    if (this.state.count < 100) {
      return (
        <>
          <h2>Current Score: {this.state.count}</h2>
          <button onClick={this.handleClick}>+{this.state.increment}</button>
          <button onClick={this.deductTenPoints}>
            Pay 10 points to change from +{this.state.increment} to +
            {this.state.increment + 1}
          </button>
        </>
      );
    } else {
      return (
        <div>
          <h2>Final Score: {this.state.count}</h2>
          <h2>You Win!</h2>
          <button onClick={this.replay}>Play again?</button>
        </div>
      );
    }
  }
}

export default Counter;

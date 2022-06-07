import React, { Component } from "react";

export default class counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      increment: 1,
    };
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + this.state.increment,
    });
  };

  deduct = () => {
    if (this.state.count >= 10) {
      this.setState({
        count: this.state.count - 10,
        increment: this.state.increment + 1,
      });
    } else {
      alert("Sorry! Not enough points.");
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
          <button onClick={this.clickHandler}>+{this.state.increment}</button>
          <button onClick={this.deduct}>
            Pay 10 points to change from +{this.state.increment} to +
            {this.state.increment + 1}
          </button>
        </>
      );
    } else {
      return (
        <div>
          <h2>Final Score: {this.state.count}</h2>
          <h2>Winner!</h2>
          <button onClick={this.replay}>Replay?!</button>
        </div>
      );
    }
  }
}

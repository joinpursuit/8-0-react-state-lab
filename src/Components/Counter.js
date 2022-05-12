import { Component } from "react";


class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      incrementor: 1,
    };
  }

  increment = () => {
    // Use this.setState() to add 1 to the count
    this.setState((previousState) => { //same state object, but from the prior update of the component
      return {
    count: previousState.count += this.state.incrementor,
      }
    })
  };

  increaseIncrement = () => {
    if (this.state.count < 10) {
      return alert("You can't afford that!")
    } else {
      this.setState((previousState) => {
        return {
          incrementor: previousState.incrementor + 1,
          count: this.state.count - 10
        }
      })
    }
  }

  resetState = () => {
    this.setState(() => {
      return {
        count: 0,
        incrementor: 1
      }
    })
  }

  render() {
    const winner = this.state.count >= 100
    return (
      <>
        {!winner && <h1>Current Score: {this.state.count}</h1>}
        {winner && <h2>You Win!</h2>}
        {winner && <button onClick={this.resetState}>Play again?</button>}
        {/* pass a prop called onClick to the button */}
        {!winner && <button onClick={this.increment}>Increase by +{this.state.incrementor}</button>}
        {!winner && <button onClick={this.increaseIncrement}>Pay 10 points to change from +{this.state.incrementor} to +{this.state.incrementor + 1}</button>}
      </>
    );
  }
}

export default Counter;
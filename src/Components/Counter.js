import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      increment: 1,
    };
  }

  addIncrement = () => {
    this.setState({
      count: this.state.count + this.state.increment,
    });
  };

  increaseIncrement = () => {
    if (this.state.count >= 10) {
      this.setState({
        count: this.state.count - 10,
        increment: this.state.increment + 1,
      });
    } else {
      alert("You can't afford that!");
    }
  };

  playAgain = () => {
    this.setState({
      count: 0,
      increment: 1,
    });
  };

  render() {
    const { count, increment } = this.state;
    return (
      <div>
        {count < 100 ? (
          <>
            <h1>Current Score: {count}</h1>
            <button onClick={this.addIncrement}>+{increment}</button>
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

export default Counter;

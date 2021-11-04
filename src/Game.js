import React from "react";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      current: 1,
      next: 2,
    };
  }

  handleClick = () => {
    this.setState({
      score: this.state.score + this.state.current,
    });
  };

  addPoint = () => {
    if (this.state.score < 10) {
      alert(`You can't afford that!`);
    } else {
      this.setState({
        score: this.state.score - 10,
        current: this.state.current + 1,
        next: this.state.next + 1,
      });
    }
  };
  reset = () => {
    this.setState({
      score: this.state.score - this.state.score,
      current: this.state.current - this.state.current + 1,
      next: this.state.next - this.state.next + 2,
    });
  };

  render() {
    if (this.state.score < 100) {
      return (
        <div>
          <h1>Current Score: {this.state.score} </h1>
          <button onClick={this.handleClick}>+{this.state.current}</button>
          <div>
            <button onClick={this.addPoint}>
              Pay 10 points to change from +{this.state.current} to +{this.state.next}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>You Win!</h2>
          <button onClick={this.reset}>Play again?</button>
        </div>
      );
    }
  }
}

export default Game;

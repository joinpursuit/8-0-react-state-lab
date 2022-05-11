import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      btn: 1,
      val1: 1,
      val2: 2,
    };
  }

  incrementHandleClick = () => {
    if (this.state.btn > 1) {
      this.setState({
        score: this.state.score + this.state.btn,
      });
    } else {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };

  pointsHandleClick = () => {
    // Use this.setState() to add 1 to the count
    if (this.state.score >= 10) {
      this.setState({
        score: this.state.score - 10,
        btn: this.state.btn + 1,
        val1: this.state.val1 + 1,
        val2: this.state.val2 + 1,
      });
    } else {
      alert("You can't afford that!");
    }
  };

  playAgainClick = () => {
    this.setState({
      score: 0,
      btn: 1,
      val1: 1,
      val2: 2,
    });
  };

  render() {
    const { score, btn, val1, val2 } = this.state;

    let status = null;
    if (score >= 100) {
      status = 'You Win!';
      return (
        <section >
          <h2>{status}</h2>
          <button onClick={this.playAgainClick}>Play again?</button>
        </section>
      );
    } else {
      return (
        <section className='display'>
          <h1>Current Score: {score}</h1>
          <button onClick={this.incrementHandleClick} className='btn'>
            +{btn}
          </button>
          <button onClick={this.pointsHandleClick} className='btn'>
            Pay 10 points to change from +{val1} to +{val2}
          </button>
        </section>
      );
    }
  }
}

export default Counter;

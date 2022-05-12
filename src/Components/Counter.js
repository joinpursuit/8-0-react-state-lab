import { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      pointInvestments: 1,
    };
  }

  clickIncrement = () => {
    console.log('incrementing...');
    this.setState({ count: this.state.count + this.state.pointInvestments });
  };

  investPoints = () => {
    console.log('investing points...');
    if (this.state.count >= 10) {
      this.setState({
        count: this.state.count - 10,
        pointInvestments: this.state.pointInvestments + 1,
      });
    } else if (this.state.count < 10) {
      alert("You can't afford that!");
    }
  };

  reset = () => {
    this.setState({ count: 0, pointInvestments: 1 });
  };
  render() {
    if (this.state.count <= 100) {
      return (
        <section>
          <h3> Current Score: {this.state.count}</h3>

          <button onClick={this.clickIncrement}>
            +{this.state.pointInvestments}
          </button>
          <br></br>
          <button onClick={this.investPoints}>
            Pay 10 points to change from +{this.state.pointInvestments} to +
            {this.state.pointInvestments + 1}
          </button>
          <button onClick={this.reset}> Reset? </button>
        </section>
      );
    } else if (this.state.count >= 100) {
      return (
        <section>
          <h2>Final Score: {this.state.count}</h2>
          <h2>You Win!</h2>
          <button onClick={this.reset}>Play again?</button>
        </section>
      );
    }
  }
}
export default Counter;

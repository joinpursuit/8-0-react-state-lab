import react from "react";

class ClickerGame extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      increment: 1,
    };
  }

  handleClick1() {
    this.setState({
      score: this.state.score + this.state.increment,
    });
  }

  handleClick2() {
    if (this.state.score < 10) {
      alert("You can't afford that!");
    } else if (this.state.score >= 10) {
      this.setState({
        score: this.state.score - 10,
        increment: this.state.increment + 1,
      });
    }
  }

  render() {
    const { increment, score } = this.state;

    return (
      <div>
        <h1>Current Score: {score}</h1>
        <button onClick={() => this.handleClick1()}>+{increment}</button>
        <button onClick={() => this.handleClick2()}>
          Pay 10 points to change from +{increment} to +{increment + 1}
        </button>
      </div>
    );
  }
}

export default ClickerGame;

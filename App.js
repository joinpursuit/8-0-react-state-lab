import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      point: 1,
    }
  }
  click = () => {
    this.setState({score: this.state.score + this.state.point})
  }
  alert = () => {
    alert("You can't afford that!")
  }
  scoreSpent = () => {
    this.setState({score: this.state.score - 10})
    this.setState({point: this.state.score + 1})
  }
  reset = () => {
    this.setState({
      score: 0,
      point: 1,
    })
  }
  render() {
    const { score, point } = this.state
    if (score < 100) {
    return (
      <main>
        <p>Current Score: {score}</p>
        <button onClick={this.click}>+{point}</button>
        <button onClick={score < 10 ? this.alert : this.scoreSpent}>
          Pay 10 points to change from +{point} to +{point + 1}
        </button>
      </main>
    );
    } else {
      return (
        <main>
          <h1>You Win!</h1>
          <button onClick={this.reset}>
            Play again?
          </button>
        </main>
      )
    }
  }
}

export default App;

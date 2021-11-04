import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      interval: 1
    }
  }
  onClicking = () => {
    this.setState({ score: this.state.score + this.state.interval })
  }
  userNotification = () => {
    alert("You can't afford that!")
  }
  currentScore = () => {
    this.state.interval = this.state.interval + 1
    this.setState({ score: this.state.score - 10 })
  }
  replay = () => {
    this.state.interval = 1
    this.setState({ Score: 0 })
  }
  render() {
    const { score } = this.state
    const { interval } = this.state
    const play = score < 100 ? <>
      <p>Current Score: {score}</p>
      <button onClick={this.onClicking}>+{interval}</button>
      <button onClick={score < 10 ? this.userNotification: this.currentScore}>Pay 10 points to change from +{interval} to +{interval + 1}</button></> : <><p>You Win!</p><button onClick={this.replay}>Play again?</button></>
    return (
      <main>
        {play}
      </main>
    );
  }
}

export default App;

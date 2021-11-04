import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      score: 0,
      interval: 1
    }
  }

  handleClick = () =>{
    this.setState({score : this.state.score + this.state.interval})
  }

  promptUser = () => {
    alert("You can't afford that!")
  }

  updateScore = () => {
    this.state.interval = this.state.interval + 1
    this.setState({score : this.state.score -10})
  }

  playAgain = () => {
    this.state.interval = 1
    this.setState({score : 0})
  }

  render() {
    const { score } = this.state
    const { interval } = this.state

    const playing = score < 100 ? <>
    <p>Current Score: {score}</p>
    <button onClick={this.handleClick}>+{interval}</button>
    <button onClick={score < 10 ? this.promptUser: this.updateScore}>Pay 10 points to change from +{interval} to +{interval + 1} </button></> : <><p>You Win!</p><button onClick={this.playAgain}>Play again?</button></>

    return (
      <main>
        {playing}
      </main>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import banana from "./images/golden-banana.jpeg"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      clicky: 1,
      bananabg: 0,
    }
  }
  onClicky = () => {
    this.setState({ score: this.state.score + this.state.clicky })
  }
  prompt = () => {
    alert("You can't afford that!")
  }
  currentScore = () => {
    this.setState({clicky: this.state.clicky + 1})  
    this.setState({ score: this.state.score - 10 })
  }
  replay = () => {
    this.setState({clicky: 1})
    this.setState({ score: 0 })
    this.setState({bananabg: 0})
  }

  render() {
    const { score, clicky } = this.state
    const play = score < 100 ? <>
      <p>Current Score: {score}</p>
      <button class="banana1" onClick={this.onClicky}>+{clicky}</button>
      <button class="banana2" onClick={score < 10 ? this.prompt: 
        this.currentScore}>Pay 10 points to change from +{clicky} to +{clicky + 1}</button></> : <>
        <p>You Win!</p>
        <div style={{backgroundImage: `url(${banana})}`}}></div>
        <br />
        <button onClick={this.replay}>Play again?</button></>
    return (
      <main>
        {play}
      </main>
    );
  }
}
export default App;

import React from "react";
import "./App.css";
import banana from "./images/golden-banana.jpeg"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      clicky: 1,
      banana: "off",
      play: "on"
    }
  }
  onClicky = () => {
    this.setState({ score: this.state.score + this.state.clicky })
  }
  prompt = () => {
    alert("You can't afford that! 😡")
  }
  currentScore = () => {
    this.setState({clicky: this.state.clicky + 1})  
    this.setState({ score: this.state.score - 10 })
  }
  replay = () => {
    this.setState({clicky: 1})
    this.setState({ score: 0 })
    this.setState({banana: "off"})
  }

  banana = () => {
    let bg = document.getElementById("banana");
    if (bg.style.display === "block" && this.state.score !== 100) {
      this.setState({
        banana: "off",
        play: "on",
      });
      bg.style.display = "none";
      return (
        console.log("🍌"),
        (
          <div
            id="banana"
            style={{
              display: "none",
            }}
          ></div>
        )
      );
    } else if (bg.style.display === "none" && this.state.score === 100) {
      this.setState({
        banana: "on",
        play: "off",
      });
      bg.style.display = "block";

      return (
        console.log("🍌🍌"),
        (
          <div
            id="banana"
            style={{
              display: "block",
              backgroundImage: `url(${banana})}`, 
              width:"100%",
            }}
          ></div>
        )
      );
    }
  };

  render() {
    const bananaBG = {backgroundImage: this.state.banana};
    const { score, clicky } = this.state
    const play = score < 100 ? <>
      <p>Current Score: {score}</p>
      <button class="banana1" onClick={this.onClicky}>+{clicky}</button>
      <button class="banana2" onClick={score < 10 ? this.prompt: 
        this.currentScore}>Pay 10 points to change from +{clicky} to +{clicky + 1}</button></> : <> 
        
        <p>You Win!</p>
       
        <br />
        <button onClick={this.replay}>Play again?</button></>
    return (
      <main>
        <div id="banana" style={{bananaBG}}  />
        {play}
      </main>
    );
  }
}
export default App;

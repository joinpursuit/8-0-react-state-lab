import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      score: 0,
      clickStrength: 1,
    };
  }

  addScore = () => {
    const { score , clickStrength } = this.state;
    const addition = score + clickStrength;

    this.setState({
      score: addition,
    })

    if(score >= 100){
      alert("")
    }
  }

  raiseClickerLevel = () => {
    const { score , clickStrength } = this.state;
    const payUp = score - 10;
    const levelUp = clickStrength + 1;

    if(score < 10){alert("You can't afford that!")}else{
      this.setState({
        score: payUp,
        clickStrength: levelUp,
      })
    }
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clickStrength: 1,
    })
  }

  render() {
    if(this.state.score >= 100){
      return (
        <main>
          <h2> You Win!</h2>
          <button onClick={this.resetGame}>Play again?</button>
        </main>
      )
    }else{
      return (
        <main>
          <h1><b>Current Score: {this.state.score}</b></h1>
          <div><button onClick={this.addScore}>+{this.state.clickStrength} </button></div>
          <div><button onClick={this.raiseClickerLevel}>Pay 10 points to change from +{this.state.clickStrength} to +{this.state.clickStrength + 1}</button></div>
        </main>
      )}
  }
}

export default App;

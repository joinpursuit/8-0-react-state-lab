import React from "react";
import "./App.css";

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      score: 0,
      currentValue: 1,
      nextValue: 2,
    }
  }

  increaseScore = () => {
    this.setState({ score: this.state.score + this.state.currentValue });
  }

  message = () => {
    if (this.state.score < 10){
        alert("You can't afford that!");
    } else {
    this.setState({
      score: this.state.score - 10,
      currentValue: this.state.currentValue + 1,
      nextValue: this.state.nextValue + 1,
      });
    }
  }

reset = () => {
    this.setState({
      score: this.state.score - this.state.score,
      currentValue: this.state.currentValue - this.state.currentValue + 1,
      nextValue: this.state.nextValue - this.state.nextValue + 2,
    })
  }


  render() {
    if (this.state.score < 100) {
    return (
      <main>
        
        <h1>Current Score: {this.state.score}</h1>
        <button onClick={this.increaseScore}> +{this.state.currentValue} </button>
        <button onClick={this.message}>Pay 10 points to change from +{this.state.currentValue} to 
        +{this.state.nextValue} </button>
        
      </main>
    );
    } else {
      return (
        <>
          <h2>You Win!</h2>
          <button onClick={this.reset}>Play Again?</button>
        </>
      )
    } 
  }
}

export default App;

import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state ={

      currentScore:0,
      addedScore:1
    }
  }
  increaseScore = () => {
    this.setState({
      currentScore: this.state.currentScore + this.state.addedScore
    })

  }

  increaseAddedScore = () => {
    if(this.state.currentScore >= 10){
      this.setState({
        currentScore: this.state.currentScore - 10,
        addedScore: this.state.addedScore +1
      })
    } else{
      alert(`You can't afford that!`)
    }
  }

  restart = () => {
    this.setState({
      currentScore: 0,
      addedScore: 1
    })
  }

  render() {
    const {currentScore, addedScore} = this.state
    return (
      <main>
        <p>React State Lab</p>
        <h2>Current Score: {currentScore}</h2>
        <button  onClick={this.increaseScore}>+{addedScore}</button>
        <button  onClick={this.increaseAddedScore}>Pay 10 points to change from +{addedScore} to +{addedScore +1}</button>
        <h2>You Win!</h2>
        <button onClick={this.restart}>Play again?</button>
      </main>
    );
  }
}

export default App;

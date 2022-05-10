import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      addedScore: 1
    }
  }
  increaseScore = () => {
    this.setState({
      currentScore: this.state.currentScore + this.state.addedScore,
    })
  };

  increaseScore2 = () => {
    if (this.state.currentScore >= 10) {
      this.setState({
        currentScore: this.state.currentScore - 10,
        addedScore: this.state.addedScore + 1
      })
    } else {
      alert(`You can't afford that!`);
    }
  }

  restart = () => {
    this.setState({
      currentScore: 0,
      addedScore: 1
    })
  }

  render() {
    const { currentScore, addedScore } = this.state;
    if (currentScore < 100) {
    return (
      <main>
        <p>React State Lab</p>
          
            <p>Current Score: {currentScore}</p>
            <button onClick={this.increaseScore}>+{addedScore}</button>
            <br />
            <button onClick={this.increaseScore2}>Pay 10 points to change from +{addedScore} to +{addedScore + 1}</button>
          </main>
        )
      } else {
        return (
        
          <main>
            <h2>You Win!</h2>
            <button onClick={this.restart}>Play again?</button>
          </main>
        )
      }
    
  
  }
}

export default App;

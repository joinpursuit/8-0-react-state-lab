import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    // declare a state object
    // currentScore - user's current score
    // incrementBy - the button that will increment current score, starting at 1
    this.state = {
      currentScore: 0,
      incrementBy: 1
    }
  }

  // event handler method for the incrementor button
  // re-render the state by incrementing currentScore by 1
  HandleIncrement = () => {
    this.setState( { currentScore: this.state.currentScore + this.state.incrementBy } )
  }


  incrementIncrement = () => {
    if (this.state.currentScore >= 10) {
      this.setState({ 
        currentScore: this.state.currentScore - 10,
        incrementBy: this.state.incrementBy + 1 
      })
    } else {
      alert(`You can't afford that!`)
    }
  }    
  
  handleWin = () => {
   this.setState({
    currentScore: 0,
    incrementBy: 1 
    }) 
  }

  
  // render - where all page rendering happens ??
  // object destructuring
  // returning: current score, and a button 
  // that has an event 
  render() {
    const { currentScore, incrementBy } = this.state

    if (currentScore >= 100) {
      return (
        <main>
          <p>{currentScore}</p>
          <h2>You Win!</h2>
          <button onClick={this.handleWin}>Play again?</button>
        </main>
      )
    } else {
      return (
        <main>
          <p>Current Score: {currentScore}</p>
          <button onClick={this.HandleIncrement}>+{incrementBy}</button>
          <button onClick={this.incrementIncrement}>Pay 10 points to change from +{incrementBy} to +{incrementBy + 1}</button>
        </main>
      )
    }
  }
}

export default App;
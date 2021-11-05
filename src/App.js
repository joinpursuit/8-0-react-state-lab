import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      incrementCount: 1,
    }
  }

  currentScore = () => {
    this.setState({
      score: this.state.score + this.state.incrementCount,
    });
  }

  pay = () => {
    if(this.state.score < 10 ) {
      alert("You can't afford that!")
      return;
    }
    this.setState({
      score: this.state.score - 10,
      incrementCount: this.state.incrementCount + 1,
    })
  }

  reset = () => {
    this.setState({
      score: 0,
      incrementCount: 1,
    });
  }
  
  render() {
    const {score, incrementCount} = this.state;
    return ( 
      this.state.score >= 100 ? <div>
        <h2>You Win!</h2>
        <button onClick={this.reset}>Play again?</button>
      {console.log(this.state)};
      </div> :
      <main>
        <h1>Current Score: {score}</h1>
        <button onClick={this.currentScore}>
          +{incrementCount}
        </button>
        <button onClick={this.pay}>
          Pay 10 points to change from +{incrementCount} to +{incrementCount + 1}
        </button>
      </main>
    );
  }
}

export default App;

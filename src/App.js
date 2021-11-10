import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      currentScore: 0,
      incrementor: 1,
      // multiplier: incrementor +1,
    };
  }

  increaseScore = () => {
    const { currentScore, incrementor } = this.state;
    this.setState({
      currentScore: currentScore + incrementor
    })
  } 

  levelUp = () => {
    const {currentScore, incrementor} = this.state;
      if(currentScore < 10) {
        alert("You can't afford that!")
      }else{
        this.setState({
          currentScore: currentScore -10,
          incrementor: incrementor + 1
        })
      };
  }

  handleReset = () => {
    this.setState({
      currentScore: 0,
      incrementor: 1,
    });
  }

render() {
    let {currentScore, incrementor} = this.state;
      if(currentScore < 100) {
        return (
        <main>
        <h1>Current Score: {currentScore}</h1>
        <button onClick={this.increaseScore}>+{incrementor}</button>
        <button onCLick={this.levelUp}>Pay 10 points to change from +{incrementor} to +{incrementor + 1}</button>
        </main>
      );
    }else{
      return (
        <main>
          <h1>{currentScore}</h1>
          <h2>You Win!</h2>
          <button onClick={this.handleReset}>Play again?</button>
        </main>
        );
      };
    };
  }

export default App;



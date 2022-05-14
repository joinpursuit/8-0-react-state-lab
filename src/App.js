import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      incrementor: 1
    }
  }

  handleClick = () => {
    this.setState(
      {
        count: this.state.count + this.state.incrementor
      }
    )
  };

  handleClickBuy = () => {
    if (this.state.count < 10) {
      alert("You can't afford that!")
    } else {
      this.setState({
        count: this.state.count - 10,
        incrementor: this.state.incrementor + 1
      }
      )
    }
  };
  playAgain =()=>{
    this.setState({
      count: 0,
      incrementor:1
    }
    )
  }


  render() {
    const { count } = this.state;
    if (this.state.count > 100) {
      return (
        <main>
          <h2>You Win!</h2>
        <button onClick={this.playAgain}>Play Again?</button>
        </main>
      );
    } else {
      return (
        <main>
          <h1>Current Score: {count}</h1>
          <button onClick={this.handleClick}>+ {this.state.incrementor}</button>
          <p></p>
          <button onClick={this.handleClickBuy}>
            Pay 10 points to change from +{this.state.incrementor} to +
            {this.state.incrementor + 1}
          </button>
          <h2></h2>
        </main>
      );
      
    }
   
  }
}


export default App;
import React from "react";
import "./App.css"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      addScore: 1,
      firstCount: 10,
      firstAdd: 1,
      secondAdd: 2,
    };
  }
  increaseAmount = () => {
    const { counter, addScore } = this.state;
    this.setState({
      counter: counter + addScore,
    });
  };
  pointBoost = () => {
    const { counter, firstCount, addScore, firstAdd, secondAdd } = this.state;
    if (counter < firstCount) {
      alert("You can't afford that!");
    } else {
      this.setState({
        addScore: addScore + 1,
        counter: counter - firstCount,
        firstAdd: firstAdd + 1,
        secondAdd: secondAdd + 1,
      });
    }
  };
  refresh = () => {
    this.setState({
      counter: 0,
      addScore: 1,
      firstCount: 10,
      firstAdd: 1,
      secondAdd: 1,
    });
  };
  render() {
    const { counter, addScore, firstAdd} = this.state;
    if (counter >= 100) {
      return (
        <main>
          {/* <div>Current Score: {counter}</div> */}
          <h2>You Win!</h2>
          <button onClick={this.refresh}>Play again?</button>
        </main>
      );
    } else {
      return (
        <main>
          <div>Current Score: {counter}</div>
          <button onClick={this.increaseAmount}>+{addScore}</button>
          <button onClick={this.pointBoost}>
            Pay 10 points to change from +{firstAdd} to +{firstAdd+ 1}</button>
        </main>
      );
    }
  }
}
export default App;

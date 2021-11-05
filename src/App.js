import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      plus: 1,
    };
  }

  addHandle = () => {
    this.setState({
      current: this.state.current + this.state.plus,
    });
  };

  bonusHandle = () => {
    if (this.state.current >= 10) {
      this.setState({
        current: this.state.current - 10,
        plus: this.state.plus + 1,
      });
    } else {
      window.alert("You can't afford that!");
    }
  };

  reset = () => {
    this.setState({
      current: 0,
      plus: 1,
    });
  };

  render() {
    const { current, plus, complete } = this.state;

    if (current >= 100) {
      return (
        <main>
          {/* <h2>Current Score: {current}</h2> */}
          <br />
          <br />
          <br />
          <div>
            <h2>You Win!</h2>
            <button onClick={this.reset}>Play again?</button>
          </div>
        </main>
      );
    } else {
      return (
        <main>
          <h2>Current Score: {current}</h2>
          <div>
            <button id="add" onClick={this.addHandle}>
              +{plus}
            </button>
          </div>
          <div>
            <button id="bonus" onClick={this.bonusHandle}>
              Pay 10 points to change from +{plus} to +{plus + 1}
            </button>
          </div>
        </main>
      );
    }
  }
}

export default App;

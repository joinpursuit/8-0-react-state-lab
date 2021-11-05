import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      incrementor: 1,
    };
  }

  increase = () => {
    this.setState({
      currentScore: (this.state.currentScore +=
        this.state.incrementor)
    });
  };

  decrease = () => {
    if (this.state.currentScore < 10) {
      alert("You can't afford that!");
    } else {
      this.setState({
        currentScore: this.state.currentScore - 10,
      });
      this.setState({ incrementor: (this.state.incrementor += 1) });
    }
  };

  youWin = () => {
    this.setState({ currentScore: 0, incrementor: 1 });
  };

  render() {
    let { currentScore, incrementor } = this.state;

    const active =
      currentScore < 100 ? (
        <>
          <h1>Current Score: {currentScore}</h1>
          <div className='buttons'>
            <button onClick={this.increase}>+{incrementor}</button>
            <button onClick={this.decrease}>Pay 10 points to change from +{incrementor} to +{incrementor + 1}</button>
          </div>
        </>
      ) : (
        <>
          <h1>You Win!</h1>
          <div className="play">
            <button onClick={this.youWin}>Play again?</button>
          </div>
        </>
      );

    return (
      <main>{active}</main>
    );
  }
}

export default App;

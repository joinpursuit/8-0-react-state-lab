import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      incrementor: 1,
    };
  }

  increaseScore = () => {
    this.setState({
      count: this.state.count + this.state.incrementor,
    });
  };

  payTenPoints = () => {
    if (this.state.count < 10) {
      alert("You can't afford that!");
    } else {
      this.setState({
        count: this.state.count - 10,
        increase: ++this.state.incrementor,
      });
    }
  };

  resetGame = () => {
    this.setState({
      count: 0,
      incrementor: 1,
    });
  };

  render () {
  const { count, incrementor } = this.state;
    if (count < 100) {
      return (
        <main>
          {count < 100 ? (
            <h1>Current Score: {count} points</h1>
          ) : (
            <h1>You Score: {count} points</h1>
          )}

          <button onClick={this.increaseScore} className='incrementor'>
            +{incrementor}
          </button>
          <button onClick={this.payTenPoints} className='pay-ten'>
            Pay 10 points to change from +{incrementor} to +{incrementor + 1}
          </button>
        </main>
      );
    } else {
      return (
        <main>
          {count >= 100 ? (
            <h1>You Score: {count} points</h1>
          ) : (
            <h1>Current Score: {count} points</h1>
          )}
          <h2>You Win!</h2>
          <button onClick={this.resetGame} className='play-again'>
            Play again?
          </button>
        </main>
      );
    }
  }
}

export default App;
import React from 'react';
import './App.css';
import CurrentScore from './CurrentScore';
import GameButtons from './GameButtons';
import NewGame from './NewGame';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      increment: 1,
    };
  }

  addScore = (s, i) => {
    this.setState({
      score: s + i,
    });
  };

  addIncrement = (s, i) => {
    this.setState({
      score: s - 10,
      increment: i + 1,
    });
  };

  resetGame = () => {
    this.setState({
      score: 0,
      increment: 1,
    });
  };

  render() {
    // const { score, increment } = this.state;
    // const CurrentScore = <h1>Current Score: {score}</h1>;
    // const GameButtons = (
    //   <>
    //     <button onClick={() => this.addScore(score, increment)}>
    //       +{increment}
    //     </button>
    //     <button
    //       onClick={() =>
    //         score >= 10
    //           ? this.addIncrement(score, increment)
    //           : alert(`You can't afford that!`)
    //       }
    //     >
    //       Pay 10 points to change from +{increment} to +{increment + 1}
    //     </button>
    //   </>
    // );
    // const NewGame = (
    //   <>
    //     <h2>You Win!</h2>
    //     <button onClick={() => this.resetGame()}>Play again?</button>
    //   </>
    // );
    // return (
    //   <main>
    //     {score < 100 && CurrentScore}
    //     {score < 100 ? GameButtons : NewGame}
    //   </main>
    // );
    const { score } = this.state;
    return (
      <main>
        {score < 100 && <CurrentScore state={this.state} />}
        {score < 100 ? (
          <GameButtons
            state={this.state}
            addScore={this.addScore}
            addIncrement={this.addIncrement}
          />
        ) : (
          <NewGame state={this.state} resetGame={this.resetGame} />
        )}
      </main>
    );
  }
}

export default App;

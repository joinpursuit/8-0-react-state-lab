import React from "react";

class Game extends React.Component {
  render() {
    const { scoreCount, incrementScore, plusCount, payButton } = this.props;
    return (
      <div>
        <h1> Current Score: {scoreCount}</h1>
        <button onClick={incrementScore}>+{plusCount}</button>
        <button onClick={payButton}>
          Pay 10 points to change from +{plusCount} to +{plusCount + 1}
        </button>
      </div>
    );
  }
}

export default Game;

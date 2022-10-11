import React from "react";

const GameOn = ({
  currentScore,
  setCurrentScore,
  incrementor,
  setIncrementor,
}) => {
  const updateScore = () => {
    setCurrentScore(currentScore + incrementor);
  };

  const payPoints = () => {
    if (currentScore < 10) {
      alert("You can't afford that!");
    } else {
      setCurrentScore(currentScore - 10);

      setIncrementor(incrementor + 1);
    }
  };
  return (
    <div>
      <h1>Current Score: {currentScore}</h1>
      <div>
        <button onClick={updateScore}>+{incrementor}</button>
      </div>
      <br />
      <div>
        <button onClick={payPoints}>
          Pay 10 points to change from +{incrementor} to +{incrementor + 1}
        </button>
      </div>
    </div>
  );
};

export default GameOn;

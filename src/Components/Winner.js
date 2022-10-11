import React from "react";

const Winner = ({ setCurrentScore, setIncrementor }) => {
  const winner = () => {
    setCurrentScore(0);
    setIncrementor(1);
  };
  return (
    <div>
      <div>
        <h2>You Win!</h2>
        <button onClick={winner}>Play again?</button>
      </div>
    </div>
  );
};

export default Winner;

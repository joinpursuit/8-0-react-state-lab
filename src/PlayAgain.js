const PlayAgain = (props) => {
  return (
    <div>
      <h2>You Win!</h2>
      <button onClick={props.playAgainHandler}>Play again?</button>
    </div>
  );
};

export default PlayAgain;

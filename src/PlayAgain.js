const PlayAgain = (props) => {
  return (
    <div>
      <h1>You Win!</h1>
      <button onClick={props.playAgainHandler}>Play again?</button>
    </div>
  );
};

export default PlayAgain;

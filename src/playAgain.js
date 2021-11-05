const NewGame = (props) => {
  return (
    <>
      {props.currentScore === 100 && (
        <div class="end">
          <h2>You Win!</h2>
          <h2>Nice</h2>
          <h3>Actions taken: {props.actions}</h3>
          <button onClick={props.playAgain}>Play again?</button>
        </div>
      )}
      {props.currentScore > 100 && (
        <div class="end">
          <h2>You Win!</h2>
          <h2>Not exactly 100 but got here</h2>
          <h3>Actions taken: {props.actions}</h3>
          <button onClick={props.playAgain}>Play again?</button>
        </div>
      )}
    </>
  );
};
export default NewGame;

const CountingGame = (props) => {
  return (
    <div>
      <h1>Current Score: {props.counter}</h1>
      <button onClick={props.incrementHandler}>
        {"+" + props.incrementValue}
      </button>
      <br />
      <button onClick={props.upgradeIncrementValueHandler}>
        {`Pay 10 points to change from +${props.incrementValue} to +${
          props.incrementValue + 1
        }`}
      </button>
    </div>
  );
};

export default CountingGame;

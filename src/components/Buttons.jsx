export default function Buttons({
  increment,
  incrementScore,
  incrementIncrement,
  score,
  reset
}) {
  const buttons = [
    {
      id: "scoreButton",
      text: `+${increment}`,
      function: incrementScore,
    },
    {
      id: "incrementButton",
      text: `Pay 10 points to change from +${increment} to +${increment + 1}`,
      function: incrementIncrement,
    },
  ];

  if (score < 100) {
    return (
      <div className="increments">
        {buttons.map((button) => {
          return (
            <button key={button.id} onClick={button.function}>
              {button.text}
            </button>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="win-screen">
        <h2 className="chicken-dinner">You Win!</h2>
        <button className="play-again" onClick={reset}>Play again?</button>
      </div>
    );
  }
}

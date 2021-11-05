
const GamePlay = (props) => {
    const { currentScore, increment, payPoints } = props
    return (
        <div className="gamePlay">
            <h1>Current Score: { currentScore }</h1>
            <button onClick={props.incrementClick}> +{ increment }</button>
            <button onClick={props.payClick}>Pay 10 points to change from +{increment } to +{ payPoints }</button>
      </div>
    )
}

export default GamePlay;


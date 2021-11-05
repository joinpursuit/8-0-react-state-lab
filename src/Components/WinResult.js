
const WinResult = (props) => {
    return (
        <div className="winResult">
            <h2>You Win!</h2>
            <button onClick={props.replayClick}>Play again?</button>
        </div>
    )
}

export default WinResult;
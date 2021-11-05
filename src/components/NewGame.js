
function NewGame (props) {

    return (
        <>
        <h2>You Win!</h2>
        <button onClick = {props.reset}> Play again? </button>      
        </>
    )

}

export default NewGame;
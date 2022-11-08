export default function Restart ({setWin, setInc, setScore}) {

    function youWin(setWin, setInc, setScore){
        setWin(false);
        setInc(1);
        setScore(0);
    }
    return  ( <><h2>You Win!</h2>
    <button key="restart" onClick={() => youWin(setWin, setInc, setScore)}>Play again?</button> </> )
}


export default function Game ({setWin, setScore, setInc, inc, score}) {

    function incIncrease(score, setScore, setInc, inc){
    
        if (score >= 10){
            setInc(inc + 1);
            setScore(score -10)
        } else {
            alert("You can't afford that!");
        }
    }

    return (
        <><h2> Current Score: {score >= 100 ? setWin(true) : score}</h2>
        <button key="cookie" onClick={() => setScore(score + inc)}>+{inc}</button>
        <button key="grandma" onClick={() => incIncrease(score, setScore, setInc, inc)}>Pay 10 points to change from +{inc} to +{inc +1}</button> </>
         )
}
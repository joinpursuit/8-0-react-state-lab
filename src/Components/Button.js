import { useState } from "react"


function Button() {

const [score, setScore] = useState(0)
const [x, setX] = useState(1)
let newScore



function handleIncreaseScore(){
    setScore(score + x ) 
    console.log("score + added point =", score)  
}

    function handleClickForPoints(){
        if (score < 10) {
             return alert ("You can't afford that!")
        } else {
               setX( x + 1 )
               setScore(score - 10)
               newScore = score-10
               console.log( "x =", x)
               console.log("score  - spent points = ", newScore)  
        }
    }

    function Reset(){
        setScore(0) 
        setX(1)
    }


     return (
  
    <>
      <main>
       {
            score < 100 ?
                
            <>
                <h1 > Current Score: {score}</h1> 

                <button className ="addNum" onClick={handleIncreaseScore}> +{x} </button><br/>
            

                <button  onClick={handleClickForPoints}>Pay 10 points to change from +{x} to +{x + 1}</button>
            </>
                
            :
            
            <>
              <h1 > You Win!</h1> 
              <button  onClick = {Reset}  type = "submit" value = "Play again?">Play Again?</button>
            </>
        }
       
    </main>
       </>
   
    );
}

export default Button






// Notes
//   Alternative - add directly to button element in JSX in component return statement wrapped in a anonymous function: <button onClick={() => alert('You clicked me!')}>

// const changeColor = () => {
//     // console.log('I have been clicked')
//      const index = Math.floor(Math.random() * colors.length)
//      console.log(index)
//      setColor(color[index])
//      setCounter(counter + 1)
 
//      // avoid using the same color twice in a row
//      if(color === colors[index]){
//        changeColor()
//      }
//    }
//  const resetCounter = () => {
//  setCounter(0);
//  }
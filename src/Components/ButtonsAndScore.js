import { useState } from "react"

  // Note: I have included extra in-depth comments so that later on, in case I have forgotten, I can easily reconnect with what I have accomplished in this code.

function ButtonsAndScore() {

    // During this assignment, I found that the useState hook enables the changes in the variables' state [of value] to display in the DOM successfully, where as me just coding the changes did not, but instead only showed in the console

    // Declare array with 2 elements: current value [0], and setValue built-in React function that will update the current value as specified by setValue() statement - see lines 14, 22, 31 and 32

    const [score, setScore] = useState(0)
    const [x, setX] = useState(1)

    //let newScore  //For testing - to view progress in console. See lines 26 -29


    // Set what the new value or "state" of the score's current value should be
    // This function will be called directly in the button used to increase the score, line 53
    function handleIncreaseScore(){
        setScore(score + x ) 
        //console.log("score + added point =", score)  
    }

    //Display a window alert box if the button that reduces the score by 10 points as payment to increase the score incrementer by 1 point - is clicked when the score is less that at least 10 points - enough to pay the cost of  greater, faster incrementation (who wants to increase to 100 by 1 pt at a time?!)
    function handleClickForPoints(){
        if (score < 10) {
                return alert ("You can't afford that!")
        } else {
                setX( x + 1 )
                setScore(score - 10)
                //For testing - to view progress in console:
                //newScore = score-10
                //console.log( "x =", x)
                //console.log("score  - spent points = ", newScore)  
        }
    }

    //When the "Play Again?" button is clicked, this function will be called, restoring the values of the score and counter to 0, and as a side effect, also causes the Score headings and buttons to all reappear again, since once the score is 0, qualifies for the first condition, which includes these statments. Beautiful! So much better than a messy if statment!
    function Reset(){
        setScore(0) 
        setX(1)
    }


        return (
         //impementing what is called a "fragment" on lines 44 and 68, 50 and 57, and 61 and 62. Wrapping multiple elements or lines of code in these fragements with in a React Components return statement prevents errors as only 1 result technically should be returned. Although it all enclosed in the <main></main> element, I still experienced red errors until I included these additional fragment wrappings

         //note, no other parenthesis were needed, since there are no other returns inside of this code
        <>
            <main>
            {
                    // using a ternary statement, since the if statement was difficult to code error free, it has its own return statement.  For the first part of the ternary expression, on line 51, as long as the score has not reached 100, the functions that allow for increasing and tracking the score will be called. The colon separator is on line 62, with the alernative code executed  if the score is no longer less than 100 (in which case "You Win1" and a reset button "Play again?" is displayed)
                   
                    // If is exciting that functions can be called directly within buttons using the onClick statement, as long as the = sign is used and the function being called is wrapped in curly brackets.
                   
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

export default ButtonsAndScore


// Notes
//   Alternative - add directly to button element in JSX in component return statement wrapped in a anonymous function: <button onClick={() => alert('You clicked me!')}>


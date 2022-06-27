import React, { useState } from "react";
// const score = 0
// const counter = 1

const Counter = () => {
      const [count, setCount] = useState(1)
      const [score, setScore] = useState(0)

      const incrementCount = () => {
          setScore(score-10)
          setCount(count+1)
      }

      const incrementScore = () => {
          setScore(score + count)
      }

      const decrementScore = () => {
          
      }

      return (
        <div>
          <p>
            <h1>Current Score: {score}</h1>
          </p>
          <button onClick={incrementScore}>+{count}</button>
            <button onClick={incrementCount}>Pay 10 points to change from +{count} to +{count +1}</button>
          
        </div>
      );
    };


    // if(score >= 10){
    //     decrease score by 10 and increase button count by 1
    // }else{
    //     say "You can't afford that!"
    // }

    // if(score >= 100){
    //     display  <h2>"You win"</h2> and display "play again?" button that resets game and hid previous buttons and keep score
    // }
    
// const ClickerScore = () => {
//     return (
//         <div>
//             <h1>Current Score: {score}</h1>
//             <button type="button" className="increment">+{counter}</button>
//             <button type="button" className="button count">Pay 10 points to change +{counter} to +{counter +1}</button>
//         </div>
//     );
// };

// handleClick = () => {
    
//     this.setState({
//       score: this.state.score + this.state.count
//     })
// };

// handleCount = () =>{

//     this.setState({
//         count: ++this.state.count,
//     })
// };

// render() {
//     const { count } = this.state;
//     const { score } = this.state;


export default Counter;
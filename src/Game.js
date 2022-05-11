import React, { useState } from "react";

//Functional Component Version with Hooks
const Game = () => {
  const [score, setScore] = useState(0);
  const [button, setButton] = useState(1);

  const scoreHandle = () => {
    if (button > 1) {
      setScore(score + button);
    } else {
      setScore(score + 1);
    }
  };

  const payIncrement = () => {
    if (score >= 10) {
      setScore(score - 10);
      setButton(button + 1);
    } else {
      alert("You can't afford that!");
    }
  };

  const playAgain = () => {
    setScore(0);
    setButton(1);
  };

  if (score >= 100) {
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={playAgain}>Play again?</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Current Score: {score}</h1>
        <button onClick={scoreHandle}>+{button}</button>
        <br />
        <button onClick={payIncrement}>
          Pay 10 points to change from +{button} to +{button + 1}
        </button>
      </div>
    );
  }
};

//Class Component Version
// class Game extends React.Component {
//     constructor(){
//         super();

//         this.state = {
//             score: 0,
//             button1: 1,
//             text1: 1,
//             text2: 2
//         }
//     }

// scoreHandleClick = () => {
//     if(this.state.button1 > 1){
//         this.setState({
//             score: this.state.score + this.state.button1
//         })
//     }else {
//         this.setState({
//           score: this.state.score + 1
//         })
//     }
// }

// incrementHandleClick = () => {
//     if(this.state.score >= 10){
//         this.state.score = this.state.score - 10;

//         this.setState({
//             button1: this.state.button1 + 1,
//             text1: this.state.text1 + 1,
//             text2: this.state.text2 + 1
//         })
//     }else{
//         alert("You can't afford that!")
//     }
// }

// playAgainClick = () => {
//     this.setState({
//         score: 0,
//         button1: 1,
//         text1: 1,
//         text2: 2
//     })
// }

//     render(){
//         const { score, button1, text1, text2 } = this.state;

//         if(this.state.score >= 100){
//             return (
//                 <div>
//                     <h2>You Win!</h2>
//                     <button onClick={ this.playAgainClick }>Play again?</button>
//                 </div>
//             )
//         }else{
//             return (
//                 <div>
//                     <h1>Current Score: { score }</h1>
//                      <button onClick={ this.scoreHandleClick }>+{ button1 }</button>
//                      <br />
//                      <button onClick={ this.incrementHandleClick }>Pay 10 points to change from +{ text1 } to +{ text2 }</button>
//                 </div>
//             );
//         }
//     }
// }

export default Game;

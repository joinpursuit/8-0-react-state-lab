import React, { useState } from "react";

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

// import React from "react";
// // import ReactDOM from "react-dom"

// class Game extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//       button1: 1,
//       text1: 1,
//       text2: 2,
//     };
//   }

//   ScoreHandleClick = () => {
//     if (this.state.button1 > 1) {
//       this.setState({
//         count: this.state.count + this.state.button1,
//       });
//     } else {
//       this.setState({
//         count: ++this.state.count,
//       });
//     }
//   };

//   IncrementHandleClick = () => {
//     if (this.state.count >= 10) {
//       this.state.count = this.state.count - 10;
//       this.setState({
//         button1: ++this.state.button1,
//         text1: ++this.state.text1,
//         text2: ++this.state.text2,
//       });
//     } else {
//       alert("You can't afford that!");
//     }
//   };

//   PlayAgainClick = () => {
//     this.setState({
//       count: 0,
//       button1: 1,
//       text1: 1,
//       text2: 2,
//     });
//   };

//   render() {
//     const { count, button1, text1, text2 } = this.state;
//     if (this.state.count >= 100) {
//       return (
//         <div>
//           <h2>You Win!</h2>
//           <button onClick={this.PlayAgainClick}>Play again?</button>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h1>Current Score: {count}</h1>
//           <button onClick={this.ScoreHandleClick}>+{button1}</button>
//           <br />
//           <button onClick={this.IncrementHandleClick}>
//             Pay 10 points to change from +{text1} to +{text2}
//           </button>
//         </div>
//       );
//     }
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Game />, rootElement);
export default Game;

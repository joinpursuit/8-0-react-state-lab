import React from "react";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentScore: 0,
            incrementBy: 1
        }
    }
    handleIncrementScore = (event) => {
        this.setState({
            currentScore: this.state.currentScore + this.state.incrementBy
        })
    }
    handleIncrementIncrement = (event) => {
        this.state.currentScore >= 10 
            ? this.setState({
                currentScore: this.state.currentScore - 10,
                incrementBy: this.state.incrementBy + 1 
            })
            : alert("You can't afford that!");            
    }
    handleRestartGame = () => {
        this.setState({
            currentScore: 0,
            incrementBy: 1
        })
    }
    render() {
        const { currentScore, incrementBy } = this.state;
        return (
            <div>
                {currentScore >= 100 
                    ? <div>
                        <h1>You win!</h1>
                        <button onClick={this.handleRestartGame}>Play again?</button> 
                    </div> 
                    : <div>
                        <h1>Current Score: {currentScore}</h1>
                        <button onClick={this.handleIncrementScore}>+{incrementBy}</button>
                        <button onClick={this.handleIncrementIncrement}>Pay 10 points to change from +{incrementBy} to +{incrementBy + 1}</button>
                    </div>
                }
            </div>
        )
    }
}

export default App;





// class App extends React.Component {
//   constructor() {
//     super();
//     // declare a state object
//     // currentScore - user's current score
//     // incrementBy - the button that will increment current score, starting at 1
//     this.state = {
//       currentScore: 0,
//       incrementBy: 1
//     }
//   }

//   // event handler method for the incrementor button
//   // re-render the state by incrementing currentScore by 1
//   HandleIncrement = () => {
//     this.setState( { currentScore: this.state.currentScore + this.state.incrementBy } )
//   }


//   incrementIncrement = () => {
//     if (this.state.currentScore >= 10) {
//       this.setState({ 
//         currentScore: this.state.currentScore - 10,
//         incrementBy: this.state.incrementBy + 1 
//       })
//     } else {
//       alert(`You can't afford that!`)
//     }
//   }    
  
//   handleWin = () => {
//    this.setState({
//     currentScore: 0,
//     incrementBy: 1 
//     }) 
//   }

  
//   // render - where all page rendering happens ??
//   // object destructuring
//   // returning: current score, and a button 
//   // that has an event 
//   render() {
//     const { currentScore, incrementBy } = this.state

//     if (currentScore >= 100) {
//       return (
//         <main>
//           <p>{currentScore}</p>
//           <h2>You Win!</h2>
//           <button onClick={this.handleWin}>Play again?</button>
//         </main>
//       )
//     } else {
//       return (
//         <main>
//           <p>Current Score: {currentScore}</p>
//           <button onClick={this.HandleIncrement}>+{incrementBy}</button>
//           <button onClick={this.incrementIncrement}>Pay 10 points to change from +{incrementBy} to +{incrementBy + 1}</button>
//         </main>
//       )
//     }
//   }
// }
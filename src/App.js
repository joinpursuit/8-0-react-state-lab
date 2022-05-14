import React, {useState} from "react";
import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,//total
//       increment: 1//per click increase
//     }
//   }

//   handleClick = () => {
//     this.setState({
//       count: this.state.count  + this.state.increment
//     })
//   };

// //I need a counter to keep count of the INCREASE PER CLICK. 
// pay10 = () => {
  
// if (this.state.count < 10) {
// alert("You can't afford that!");
// } else {
//   this.setState({
//     count: this.state.count - 10,
//     increment: ++this.state.increment
//   })
// }

// }

// playagain = () => {
//   this.setState({
//     count: 0,
//     increment: 1
//   })
// }

//   render() {


//     const { count, increment} = this.state;
//     if (count < 100) { 
//       return (
//       <main>
//         <p>React State Lab</p>
//         <p>Current Score: {count}</p> 
//         <button onClick={this.handleClick}>+{increment}</button>
//         <br></br>
//         <button onClick={this.pay10}>Pay 10 points to change from +{increment} to +{increment+1}</button>
//       </main>
//     );
//   } else {
//     return (
//       <main>
//         <h2>You Win!</h2>
//         <button onClick={this.playagain}>Play again?</button>
//       </main>
//     )
//   }
   
//   }
// }

// export default App;


const App = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  
  
  const incrementCount = () => {
    setCount (count + increment)
  }
  
  const pay10 = () => {
  
  if (count < 10) {
  alert("You can't afford that!");
  } else {
    
    setCount (count - 10)
    setIncrement (increment + 1)
  }
  
  }
  
  
  const playagain = () => {
  setCount (0)
  setIncrement (1)
  
  }
  
    if (count < 100) { 
            return (
            <main>
              <p>React State Lab</p>
              <p>Current Score: {count}</p> 
              <button onClick={incrementCount}>+{increment}</button>
              <br></br>
              <button onClick={pay10}>Pay 10 points to change from +{increment} to +{increment+1}</button>
            </main>
          );
        } else {
          return (
            <main>
              <h2>You Win!</h2>
              <button onClick={playagain}>Play again?</button>
            </main>
          )
        }
  
  
  }
  
  export default App;
import React, {useState} from "react";
import "./App.css";

const App = () => {
   const [state,setState]= useState({ count: 0,
    incrementor: 1})  
    const {count, incrementor} = state

  const handleClick = () => {
  setState(count + incrementor)
  }
  
  

  const handleIncrementor = () => {
    if (count < 10) {
      alert(`You can't afford that!`);
    } else {
      setState(count - 10,incrementor + 1)
      };
    }
    // const { count } = this.state;
    // if (this.state.count > 100) {
    //   return (
    //     <main>
    //       <h2>You Win!</h2>
    //       <button onClick={() => window.location.reload()}>Play again?</button>
    //     </main>
    //   );
    // } else {
      return (
        <main>
          <h1>Current Score: {count}</h1>
          <button onClick={handleClick}>+ </button>
          <p></p>
          {/* <button onClick={handleIncrementor}>
            Pay 10 points to change from +{incrementor} to +
            {this.state.incrementor + 1}
          </button> */}
        </main>
      );
      
    }
   
  
  

  // playagain =() =>{
  //   this.setState({
  //     count:0,
  //     incrementor: 1
  //   })
  // } OPTIONAL ROUTE

//   render() {
//     const { count } = this.state;
//     if (this.state.count > 100) {
//       return (
//         <main>
//           <h2>You Win!</h2>
//           <button onClick={() => window.location.reload()}>Play again?</button>
//         </main>
//       );
//     } else {
//       return (
//         <main>
//           <h1>Current Score: {count}</h1>
//           <button onClick={handleClick}>+ {this.state.incrementor}</button>
//           <p></p>
//           <button onClick={this.handleIncrementor}>
//             Pay 10 points to change from +{this.state.incrementor} to +
//             {this.state.incrementor + 1}
//           </button>
//         </main>
//       );
      
//     }
   
//   }
// }

export default App;


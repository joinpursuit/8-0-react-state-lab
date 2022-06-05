// import React from "react";
// import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       incrementor: 1,

//     };
//   }

//   handleClick = () => {
//     this.setState({
//       count: this.state.count + this.state.incrementor,
//     });
//   };

//   handleIncrementor = () => {
//     if (this.state.count < 10) {
//       alert(`You can't afford that!`);
//     } else {
//       this.setState({
//         count: this.state.count - 10,
//         incrementor: this.state.incrementor + 1,
//       });
//     }
//   };
//   // playagain =() =>{
//   //   this.setState({
//   //     count:0,
//   //     incrementor: 1
//   //   })
//   // } OPTIONAL ROUTE

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
//           <button onClick={this.handleClick}>+ {this.state.incrementor}</button>
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

// export default App;

import React, {useState} from "react";
import "./App.css";

const App = () => {
   const [count,setCount]= useState(0)  
    const [incrementor,setIncrementor] = useState(1)

  const handleClick = () => {
  setCount(count + incrementor)
  }
  const playAgain = () => {
    setCount(0);
    setIncrementor(1);
  };
  
 

 const handleIncrementor = () => {
   if (count < 10) {
     alert(`You can't afford that!`);
   } else {
     setCount(count - 10)
     setIncrementor(incrementor + 1)
     };
   }
    if(count < 100){
     return (
       <div>
       <main>
         <h1>Current Score: {count}</h1>
         <button onClick={handleClick}>+{incrementor}</button>
         <p></p>
         <button onClick={handleIncrementor}>
           Pay 10 points to change from +{incrementor} to +
           {incrementor + 1}
         </button>
       </main>
       </div>
     );
     
   }
   else if (count >= 100) {
    return (
      <main>
        <h2>You Win!</h2>
        <button onClick = {playAgain}>Play again?</button>
      </main>
    );
  }
  }


 
 

  export default App;

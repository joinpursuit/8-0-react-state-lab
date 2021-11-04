import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Current Score: 5</h1>
        {/* <p>React State Lab</p> */}
        <button>
          +2
        </button>
        <button>
          Pay 10 points to change from +1 to +2
        </button>
      </main>
    );
  }
}

export default App;

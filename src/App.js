import React from "react";
import "./App.css";
import Counter from "./components/counter";

class App extends React.Component {
  render() {
    return (
      <main>
        <p>React State Lab</p>
        <Counter />
      </main>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import Clicker from "./Components/Clicker";

class App extends React.Component {
  render() {
    return (
      <main>
        <div class="clicker">
          <Clicker />
        </div>
      </main>
    );
  }
}

export default App;

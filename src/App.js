import React from 'react';
import './App.css';
import Counter from './Counter.js';

class App extends React.Component {
  render() {
    return (
      <main className='main'>
        <Counter />
      </main>
    );
  }
}

export default App;

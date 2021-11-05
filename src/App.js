import React from 'react';
import './App.css';
import CurrentScore from './components/CurrentScore';

class App extends React.Component {
 
  render () {
    return (
      <>
      <main>
      <CurrentScore />
      </main>
      </>
    )
  }

  
}

export default App;
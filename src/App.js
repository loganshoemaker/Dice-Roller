import React, { Component } from 'react';

import './styles/main.css';

import DiceHolder from './components/DiceHolder.js';

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <DiceHolder/>
      </div>
    );
  }
}

export default App;

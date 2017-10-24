import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './styles/main.css';

import * as AllDice from './components/DiceData.js';
import DiceHolder from './components/DiceHolder.js';
//import DicePool from './components/DicePool.js';

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



/*
Need to roll Dice
Pick specific dice
Roll them
View result; success/fail
*/

/*
Dice
Dice Active or Inactive
Roll Active Dice
View Results comparing Success/Fail, advantage/threat, etc.
*/
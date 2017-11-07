import React, { Component } from 'react';
import Container from './components/Flux_Reduce_Store_Version/Containers/Container';
import './styles/main.css';
import DiceHolder from './components/DiceHolder.js';

class App extends Component {

  constructor(){
    super();
  }

  // Will return the container component which utilizes the stores and actions
  // Final step should include looking to see if the container can be lifted up; removing this file
  render() { 
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Container />
      </div>
    );
  }  

// Referencing early version of single store and not really using Flux documentation correctly
//  render() {
//    return (
//      <div className="App">
//        <header className="App-header">
//        </header>
//        <DiceHolder/>
//      </div>
//    );
//  }
}

export default App;

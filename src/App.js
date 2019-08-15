import React, { Component } from "react";
import "./styles/main.css";
import DiceHolder from "./wrapperComponents/DiceHolder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <DiceHolder />
      </div>
    );
  }
}

export default App;

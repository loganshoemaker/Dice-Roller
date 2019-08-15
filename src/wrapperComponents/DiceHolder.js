import React from "react";
import DiceStore from "../store/diceStore";
import { AvailableDiceHolder, ActiveDiceHolder, RollResults } from "./";

export default class DiceHolder extends React.Component {
  constructor() {
    super();

    this.state = {
      allDice: DiceStore.getAllDice(),
      activeDice: DiceStore.getActiveDice(),
      availableDice: DiceStore.getAvailableDice(),
      rollResults: DiceStore.getRollResults(),
      rolled: DiceStore.checkIfRolled()
    };
  }

  componentDidMount() {
    DiceStore.on("change", () => {
      this.setState({
        activeDice: DiceStore.getActiveDice(),
        availableDice: DiceStore.getAvailableDice(),
        rollResults: DiceStore.getRollResults(),
        rolled: DiceStore.checkIfRolled()
      });
    });
  }

  checkIfRolled() {
    if (this.state.rolled) {
      return (
        <div id="roll-results-container">
          <RollResults data={this.state.rollResults} />
        </div>
      );
    }
  }

  render() {
    const rollResults = this.checkIfRolled();

    return (
      <div id="dice-container">
        {rollResults}
        <section id="available-dice-container">
          <AvailableDiceHolder
            availableDice={this.state.availableDice}
            dice={this.state.all}
          />
        </section>
        <section id="active-dice-container">
          <h1>Active Dice</h1>
          <ActiveDiceHolder
            activeDice={this.state.activeDice}
            dice={this.state.allDice}
            availableDice={this.state.availableDice}
          />
        </section>
      </div>
    );
  }
}

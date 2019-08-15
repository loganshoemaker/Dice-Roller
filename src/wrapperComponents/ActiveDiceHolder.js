import React from "react";
import { Button } from "../baseComponents";
import * as DiceActions from "../store/diceActions";

export default class ActiveDiceHolder extends React.Component {
  prepareActiveDice() {
    let diceContainer = [];
    this.props.activeDice.forEach(activeDice => {
      let i = 0;
      while (i < activeDice.active) {
        diceContainer.push(activeDice);
        i++;
      }
    });
    return diceContainer;
  }

  checkRollButton(a) {
    if (a.length > 0) {
      return <Button handleClick={() => DiceActions.roll()}>Roll Dice</Button>;
    }
  }

  checkActiveDice(a) {
    if (a.length > 0) {
      return a.map((dice, i) => (
        <div className="die" key={i}>
          <img
            onClick={() => DiceActions.removeActiveDice(dice)}
            src={dice.imagefile}
            alt={dice.name}
          />
        </div>
      ));
    } else {
      return <div className="description">You have no active dice</div>;
    }
  }

  checkResetButton(a) {
    if (a.length > 0) {
      return (
        <div>
          <div className="description">
            Click a dice to remove it from your active pool
          </div>
          <Button handleClick={() => DiceActions.removeAllActiveDice()}>
            Remove All Active Dice
          </Button>
        </div>
      );
    }
  }

  render() {
    const diceContainer = this.prepareActiveDice();
    const rollButton = this.checkRollButton(diceContainer);
    const resetButton = this.checkResetButton(diceContainer);
    const activeDice = this.checkActiveDice(diceContainer);

    return (
      <div>
        {rollButton}
        {activeDice}
        {resetButton}
      </div>
    );
  }
}

import {ReduceStore} from 'flux/utils';
import diceDispatcher from './../../DiceDispatcher';
import Actions from './../Actions/Actions';

import * as PurpleDice from './../../Dice/PurpleDiceData.js';
import * as GreenDice from './../../Dice/GreenDiceData.js';
import * as YellowDice from './../../Dice/YellowDiceData.js';
import * as BlueDice from './../../Dice/BlueDiceData.js';
import * as BlackDice from './../../Dice/BlackDiceData.js';
import * as RedDice from './../../Dice/RedDiceData.js';
import * as WhiteDice from './../../Dice/WhiteDiceData.js';

// This may not need to extend ReduceStore as it should contain static data
class DiceFactsStore extends ReduceStore {

  constructor() {
    super(diceDispatcher);
  }

  // Set the intitial state of the store before the rest of the app loads
  // Subsequent changes are going to trigger changes and re-rendering across app
  getInitialState() {
      return {
          dice: [
            {name: 'purple',
             facts: PurpleDice.PurpleDice},
            {name: 'green',
             facts: GreenDice.GreenDice},
            {name: 'yellow',
            facts: YellowDice.YellowDice}, 
            {name: 'blue',
             facts: BlueDice.BlueDice},
            {name: 'black',
             facts: BlackDice.BlackDice},
            {name: 'red',
             facts: RedDice.RedDice},
            {name: 'white',
             facts: WhiteDice.WhiteDice}
        ]
      };
  }

  reduce(state, action) {
    return state;
  }    

}

export default new DiceFactsStore();

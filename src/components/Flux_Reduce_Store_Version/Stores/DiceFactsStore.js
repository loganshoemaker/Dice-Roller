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

import BlackDie from './../../../styles/images/black.png';
import BlueDie from './../../../styles/images/blue.png';
import GreenDie from './../../../styles/images/green.png';
import PurpleDie from './../../../styles/images/purple.png';
import RedDie from './../../../styles/images/red.png';
import WhiteDie from './../../../styles/images/white.png';
import YellowDie from './../../../styles/images/yellow.png';

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
      switch (action.type) {
          default:
              return state;
      }
  }    
}

export default new DiceFactsStore();

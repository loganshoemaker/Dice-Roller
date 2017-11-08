import {ReduceStore} from 'flux/utils';
import diceDispatcher from './../../DiceDispatcher.js';
import Actions from './../Actions/Actions';

import BlackDie from './../../../styles/images/black.png';
import BlueDie from './../../../styles/images/blue.png';
import GreenDie from './../../../styles/images/green.png';
import PurpleDie from './../../../styles/images/purple.png';
import RedDie from './../../../styles/images/red.png';
import WhiteDie from './../../../styles/images/white.png';
import YellowDie from './../../../styles/images/yellow.png';

class ActiveDiceStore extends ReduceStore {

    constructor() {
        super(diceDispatcher);
    }

    // Set the intitial state of the store before the rest of the app loads
    // Subsequent changes are going to trigger changes and re-rendering across app
    getInitialState() {
        return {
            activeDice: [
              {name: 'green',
              active: 0,
              imagefile: GreenDie,},
              {name: 'yellow',
              active: 0,
              imagefile: YellowDie,},
              {name: 'black',
              active: 0,
              imagefile: BlackDie},
              {name: 'blue',
              active: 0,
              imagefile: BlueDie,},
              {name: 'purple',
              active: 0,
              imagefile: PurpleDie,},
              {name: 'red',
              active: 0,
              imagefile: RedDie,},
              {name: 'white',
              active: 0,
              imagefile: WhiteDie,}
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

export default new ActiveDiceStore();

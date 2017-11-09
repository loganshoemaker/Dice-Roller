import {ReduceStore} from 'flux/utils';
import diceDispatcher from './../../DiceDispatcher.js';
import Actions from './../Actions/Actions';

// This may not need to exist in both available AND active
import BlackDie from './../../../styles/images/black.png';
import BlueDie from './../../../styles/images/blue.png';
import GreenDie from './../../../styles/images/green.png';
import PurpleDie from './../../../styles/images/purple.png';
import RedDie from './../../../styles/images/red.png';
import WhiteDie from './../../../styles/images/white.png';
import YellowDie from './../../../styles/images/yellow.png';

class AvailableDiceStore extends ReduceStore {

    constructor() {
        super(diceDispatcher);
    }

    // Set the intitial state of the store before the rest of the app loads
    // Subsequent changes are going to trigger changes and re-rendering across app
    getInitialState() {
        return {
          availableDice: [
            {name: 'green',
             available: 6,
            imagefile: GreenDie,},
            {name: 'yellow',
             available: 4,
            imagefile: YellowDie,},
            {name: 'black',
             available: 4,
            imagefile: BlackDie},
            {name: 'blue',
             available: 4,
             imagefile: BlueDie,},
            {name: 'purple',
             available: 6,
            imagefile: PurpleDie,},
            {name: 'red',
             available: 2,
            imagefile: RedDie,},
            {name: 'white',
             available: 2,
            imagefile: WhiteDie,}
        ]
      };
    }

    reduce(state, action) {
        switch (action.type) {
            case 'ADD_ACTIVE_DICE':
                return state;
            default:
                return state;
        }
    }    
}

export default new AvailableDiceStore();

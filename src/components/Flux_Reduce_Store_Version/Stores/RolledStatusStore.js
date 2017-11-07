import {ReduceStore} from 'flux/utils';
import diceDispatcher from './../../DiceDispatcher.js';
import Actions from './../Actions/Actions';

class RolledStatusStore extends ReduceStore {

    constructor() {
        super(diceDispatcher);
    }

    // Set the intitial state of the store before the rest of the app loads
    // Subsequent changes are going to trigger changes and re-rendering across app
    getInitialState() {
        return {
            rolled: false
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case 'TOGGLE_ROLLED':
                if (state.rolled === false) {
                    state = {rolled: true}
                } else {
                    state = {rolled: false}
                }
                return state;
            default:
                return state;
        }
    }    
}

export default new RolledStatusStore();

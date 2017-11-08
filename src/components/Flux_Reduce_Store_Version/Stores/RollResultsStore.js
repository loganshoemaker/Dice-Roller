import {ReduceStore} from 'flux/utils';
import diceDispatcher from './../../DiceDispatcher.js';
import Actions from './../Actions/Actions';

class RollResultsStore extends ReduceStore {

    constructor() {
        super(diceDispatcher);
    }

    // Set the intitial state of the store before the rest of the app loads
    // Subsequent changes are going to trigger changes and re-rendering across app
    getInitialState() {
        return {
            rollResults: {
              success: 0,
              threat: 0,
              advantage: 0,
              failure: 0,
              triumph: 0,
              despair: 0,
              dark_destiny: 0,
              light_destiny: 0,
              sides: []
          }
        };
    }

    reduce(state, action) {
        switch (action.type) {
            default:
                return state;
        }
    }    
}

export default new RollResultsStore();

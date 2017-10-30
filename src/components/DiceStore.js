import { EventEmitter } from 'events';
import diceDispatcher from './DiceDispatcher';

import * as PurpleDice from './Dice/PurpleDiceData.js';
import * as GreenDice from './Dice/GreenDiceData.js';
import * as YellowDice from './Dice/YellowDiceData.js';
import * as BlueDice from './Dice/BlueDiceData.js';
import * as BlackDice from './Dice/BlackDiceData.js';
import * as RedDice from './Dice/RedDiceData.js';
import * as WhiteDice from './Dice/WhiteDiceData.js';

class DiceStore extends EventEmitter {

    constructor() {
        super();
        
        this.dice = [
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
        ];
        
        this.availableDice = [
            {name: 'green',
             available: 3},
            {name: 'yellow',
             available: 2},
            {name: 'black',
             available: 2},
            {name: 'blue',
             available: 2},
            {name: 'purple',
             available: 3},
            {name: 'red',
             available: 1},
            {name: 'white',
             available: 1}
        ]
        
        this.activeDice = {
            green: 0,
            yellow: 0,
            black: 0,
            blue: 0,
            purple: 0,
            red: 0,
            white: 0
        }
        
        this.results = {
            success: 0,
            threat: 0,
            advantage: 0,
            failure: 0,
            triumph: 0,
            despair: 0,
            darkdestiny: 0,
            lightdestiny: 0
        }     
    }

    getDice() {
        return this.dice;
    }
    
    getAvailable() {
        return this.availableDice;
    }
    
    getActive() {
        return this.activeDice;
    }    
    
    handleActions(action) {
        switch(action.type) {
//            case "GET_AVAILABLE_DICE": {
//                this.getAvailable();
//                break;
//            }            
//            case "GET_ACTIVE_DICE": {
//                this.getActive();
//                break;
//            }    
            default: {
                break;
            }
        }
    }
}

const diceStore = new DiceStore();
diceDispatcher.register(diceStore.handleActions.bind(diceStore));

export default diceStore;

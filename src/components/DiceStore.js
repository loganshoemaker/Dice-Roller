import { EventEmitter } from 'events';
import diceDispatcher from './DiceDispatcher';

import * as PurpleDice from './Dice/PurpleDiceData.js';
import * as GreenDice from './Dice/GreenDiceData.js';
import * as YellowDice from './Dice/YellowDiceData.js';
import * as BlueDice from './Dice/BlueDiceData.js';
import * as BlackDice from './Dice/BlackDiceData.js';
import * as RedDice from './Dice/RedDiceData.js';
import * as WhiteDice from './Dice/WhiteDiceData.js';

import BlackDie from './../styles/images/black.png';
import BlueDie from './../styles/images/blue.png';
import GreenDie from './../styles/images/green.png';
import PurpleDie from './../styles/images/purple.png';
import RedDie from './../styles/images/red.png';
import WhiteDie from './../styles/images/white.png';
import YellowDie from './../styles/images/yellow.png';

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
             available: 3,
            imagefile: GreenDie,},
            {name: 'yellow',
             available: 2,
            imagefile: YellowDie,},
            {name: 'black',
             available: 2,
            imagefile: BlackDie},
            {name: 'blue',
             available: 2,
             imagefile: BlueDie,},
            {name: 'purple',
             available: 3,
            imagefile: PurpleDie,},
            {name: 'red',
             available: 1,
            imagefile: RedDie,},
            {name: 'white',
             available: 1,
            imagefile: WhiteDie,}
        ]
        
        this.activeDice = [
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
    
    addActiveDice(data) {
        this.availableDice.map((availableDice) => {
            if (availableDice.name == data.name && availableDice.available !== 0) {
                this.activeDice.map((activeDice) => {
                    if (availableDice.name == activeDice.name) {
                        availableDice.available--;
                        activeDice.active++;
                    }  
                })
            }
        })
        this.emit("change");
    }
    
    removeActiveDice(data) {
        this.activeDice.map((activeDice) => {
            if (activeDice.name == data.name && activeDice !== 0) {
                this.availableDice.map((availableDice) =>{
                    if(availableDice.name == activeDice.name){
                        availableDice.available++;
                        activeDice.active--;
                    }
                })
            }
        })
        this.emit("change");
    }
    
    handleActions(action) {
        switch(action.type) {
//            case "GET_AVAILABLE_DICE": {
//                this.getAvailable();
//                break;
//            }            
            case "ADD_ACTIVE_DICE": {
                this.addActiveDice(action.data);
                break;
            }  
            case "REMOVE_ACTIVE_DICE": {
                this.removeActiveDice(action.data);
                break;
            }                  
            default: {
                break;
            }
        }
    }
}

const diceStore = new DiceStore();
diceDispatcher.register(diceStore.handleActions.bind(diceStore));

export default diceStore;

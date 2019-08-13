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
        
        this.rolled = false;
        
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
            dark_destiny: 0,
            light_destiny: 0,
            sides: []
        }
    }
    
    checkIfRolled() {
        return this.rolled;
    }
    
    clearRollResults() {
        this.rolled = false;
        this.emit("change");
    }    

    removeAllActiveDice() {
        this.availableDice = [
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

        this.rolled = false;
        
        this.emit("change");
    }
    
    getRollResults() {
        let a = this.results;
        let b = {};
        b.success = a.success;
        b.advantage = a.advantage;
        b.failure = a.failure;
        b.threat = a.threat;
        b.despair = a.despair;
        b.triumph = a.triumph;
        b.sides = this.results.sides;        
        b.dark_destiny = a.dark_destiny;
        b.light_destiny = a.light_destiny;
        b.netSuccess = (a.success + a.triumph) - (a.failure + a.despair);
        b.netAdvantage = (a.advantage - a.threat);       
        
        return b;
    }
    
    rollDice() {
        this.results = {
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
        
        const diceToRoll = [];
        const sidesRolled = [];
        let availableKeys = [];
        
        // Create the pool of dice to actually roll
        this.activeDice.forEach((activeDice) => {
            this.dice.forEach((dice) => {
                if (
                    activeDice.active !== 0
                    && activeDice.name === dice.name
                ){
                    let i = 0;
                    while (i < activeDice.active) {
                        diceToRoll.push(Object.assign(activeDice, dice));
                        i++;
                    }
                }
            })    
        })
        
        // Get the number of sides
        diceToRoll.forEach((dice) => {
            const numberOfSides = Object.keys(dice.facts.sides).length;
            
            // Get a random side for a dice and push that it to an array
            const sideRolled = Math.floor(Math.random() * numberOfSides) + 0;
            sidesRolled.push(dice.facts.sides[sideRolled]);
            this.results.sides.push(dice.facts.sides[sideRolled].imgFile);
            availableKeys = Object.keys(dice.facts.sides[sideRolled]);
        })

        sidesRolled.forEach((side) => {
            availableKeys.forEach((key) => {
                this.results[key] = (this.results[key] + side[key])
            })
        })

        this.rolled = true;
        this.emit("change");
        
    }

    getAllDice() {
        return this.dice;
    }

    getAvailableDice() {
        return this.availableDice;
    }
    
    getActiveDice() {
        return this.activeDice;
    }    
    
    addActiveDice(data) {
        this.availableDice.forEach((availableDice) => {
            if (
                availableDice.name === data.name
                && availableDice.available !== 0
            ) {
                this.activeDice.forEach((activeDice) => {
                    if (availableDice.name === activeDice.name) {
                        availableDice.available--;
                        activeDice.active++;
                    }  
                })
            }
        })
        this.emit("change");
    }
    
    removeActiveDice(data) {
        this.activeDice.forEach((activeDice) => {
            if (
                activeDice.name === data.name
                && activeDice !== 0
            ) {
                this.availableDice.forEach((availableDice) =>{
                    if(availableDice.name === activeDice.name){
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
            case "ADD_ACTIVE_DICE": {
                this.addActiveDice(action.data);
                break;
            }  
            case "REMOVE_ACTIVE_DICE": {
                this.removeActiveDice(action.data);
                break;
            }
            case "ROLL": {
                this.rollDice();
                break;
            }    
            case "CLEAR_ROLL_RESULTS": {
                this.clearRollResults();
                break;
            }

            case "REMOVE_ALL_ACTIVE_DICE": {
                this.removeAllActiveDice();
                break;
            }
                
                
            // These correctly run their functions and data is accessible here, but not returning to views/components
//            case "GET_ALL_DICE":{
//                return this.getAllDice();
//                break;
//            }
//            
//            case "GET_ACTIVE_DICE":{
//                this.getActiveDice();
//                break;
//            }    
//
//            case "GET_AVAILABLE_DICE":{
//                this.getAvailableDice();
//                break;
//            }   
//                
//            case "GET_ROLL_RESULTS":{
//                this.getRollResults();
//                break;
//            }    
//                
//            
//            case "CHECK_IF_ROLLED":{
//                this.checkIfRolled();
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

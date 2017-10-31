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
             available: 6,
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
    
    getRollResults() {
        let a = this.results;
        let b = {};
        /*
        Success: check if action succeeds; total < 0 = success. 1:1 with failure. increase magnitude above 0.
        Advantage: opportunity for positive side effect. 1:1 with threat. increase magnitude.
        Triumph: equals 1 success. Can cancel success with failure. Secondary side effect not canceled by failure.
        */
        
        /*
        Failure: If failure > 0, net failure.  Multiple failures do not add up; is boolean.
        Threat: Increase per extra threat total after counting?
        Despair: equals 1 failure, can be canceled.
        */
        /*
        DarkDestiny: Just total
        LightDestiny: Just total
        */
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
        b.netAdvantage = (a.advantage - a.threat)        
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
        const sidesRolledImages = [];
        let availableKeys = [];
        
        // Create the pool of dice to actually roll
        this.activeDice.map((activeDice) => {
            this.dice.map((dice) => {
                if (activeDice.active !== 0 && activeDice.name == dice.name){
                    let i = 0;
                    while (i < activeDice.active) {
                        diceToRoll.push(Object.assign(activeDice, dice));
                        i++;
                    }
                }
            })    
        })
        
        // Get the number of sides
        diceToRoll.map((dice) => {
            const numberOfSides = Object.keys(dice.facts.sides).length;
            
            // Get a random side for a dice and push that it to an array
            const sideRolled = Math.floor(Math.random() * numberOfSides) + 0;
            sidesRolled.push(dice.facts.sides[sideRolled]);
            this.results.sides.push(dice.facts.sides[sideRolled].imgFile);
            availableKeys = Object.keys(dice.facts.sides[sideRolled]);
        })

        sidesRolled.map((side) => {
            availableKeys.map((key) => {
                this.results[key] = (this.results[key] + side[key])
            })
        })

        console.log(this.results);
        
        this.emit("change");
        
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

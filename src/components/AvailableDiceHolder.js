import React from 'react';

import * as PurpleDice from './Dice/PurpleDiceData.js';
import * as GreenDice from './Dice/GreenDiceData.js';
import * as YellowDice from './Dice/YellowDiceData.js';
import * as BlueDice from './Dice/BlueDiceData.js';
import * as BlackDice from './Dice/BlackDiceData.js';
import * as RedDice from './Dice/RedDiceData.js';
import * as WhiteDice from './Dice/WhiteDiceData.js';

export default class AvailableDiceHolder extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    getDicedata() {
        let tempArray = [];
        
        for (let diceKey in this.props.availableDice) {
//            tempArray.push(this.props.availableDice[dice].name);
            for (let dice in this.props.dice) {
                
                if (dice == diceKey) {
                
                    let tempDice = {};
                    
                    tempDice.name = this.props.dice[dice].name;
                    tempDice.imageFile = this.props.dice[dice].facts.imagefile;
                    tempDice.available = this.props.availableDice[diceKey].available;
                
                    tempArray.push(tempDice);
                    
                }
            
            }
            
        }
        
        return tempArray;
    }
    
    render() {
        
        const diceData = this.getDicedata();
        
        return ( 
            diceData.map((dice, i) =>
                <div className="availableDice" key={i}>                          
                    <img src={dice.imageFile} alt={dice.name}/><br/>
                    <span>{dice.available}</span>
                </div>
            )
        )
    }
}





//<img alt={GreenDice.GreenDice.name} src={GreenDice.GreenDice.imagefile} />
//<span>Remaining: </span>
import React from 'react';

//import RollButton from './RollButton.js';
//import RollResults from './RollResults.js';
import * as DiceActions from './DiceActions';
import DiceStore from './DiceStore';

export default class ActiveDiceHolder extends React.Component {
    
    constructor(props){
        super(props)
    }

    prepareActiveDice() {
        
        let diceContainer = [];
        
        this.props.activeDice.map((activeDice) => {
            
            let i = 0;
            
            while (i < activeDice.active) {
                diceContainer.push(activeDice);
                i++;
            }   
            
        })
        
        return diceContainer;
    }
    
    checkRollButton(a) {
        if (a.length > 0) {
            return <button onClick={ () => DiceActions.roll() }>Roll Dice</button>
        }
    }
    
    checkResetButton(a) {
        if (a.length > 0) {
            return <button onClick={ () => window.location.reload()}>Remove All Dice</button>
        }
    }
    
    render() {
        const diceContainer = this.prepareActiveDice();
        const rollButton = this.checkRollButton(diceContainer);
        const resetButton = this.checkResetButton(diceContainer);        

        return (
            <div>
                {rollButton}
                {diceContainer.map((dice, i) => 
                    <div className="die" key={i}>
                        <img onClick={ () => DiceActions.removeActiveDice(dice) } src={dice.imagefile} alt={dice.name}/>
                    </div>
                )}
                {resetButton}
            </div>        
        )
    }     
}

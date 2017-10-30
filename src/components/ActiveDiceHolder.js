import React from 'react';

//import RollButton from './RollButton.js';
//import RollResults from './RollResults.js';
import * as DiceActions from './DiceActions';

export default class ActiveDiceHolder extends React.Component {
    
    constructor(props){
        super(props)
    }

    prepareActivedice() {
        
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
    
    render() {
        
        const diceContainer = this.prepareActivedice();

        return (
            diceContainer.map((dice, i) => 
                <div className="die" key={i}>
                    <img onClick={ () => DiceActions.removeActiveDice(dice) } src={dice.imagefile} alt={dice.name}/>
                </div>
            )
        )
    }     
}


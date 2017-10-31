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
    
    checkResetButton(a) {
        if (a.length > 0) {
            return <button onClick={ () => window.location.reload()}>Remove All Dice</button>
        }
    }
    
    render() {
        const diceContainer = this.prepareActiveDice();
        const resetButton = this.checkResetButton(diceContainer);        
//        const resetButton = '';
        
//        if (diceContainer.length > 0) {
//            console.log("bigger");
//            const resetButton = <button onClick={ () => window.location.reload()}>Remove All Dice</button>
//        } else {
//            console.log("none");
//            const resetButton = "Heyyy"
//        }
        

        return (
            <div>
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

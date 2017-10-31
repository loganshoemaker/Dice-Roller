import React from 'react';

import * as DiceActions from './DiceActions';

export default class AvailableDiceHolder extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    render() {
        return ( 
            <div>
                <h1>Available Dice</h1>
                <div className="description">Click a dice to add to your active pool</div>
                {this.props.availableDice.map((dice, i) =>
                    <div className="die" key={i}>                          
                        <img onClick={ () => DiceActions.addActiveDice(dice)} src={dice.imagefile} alt={dice.name}/><br/>
                        <span className="remaining-value">{dice.available}</span>
                        <span className="remaining-label">Remaining</span>
                    </div>
                )}
            </div>
        )
    }
}

import React from 'react';
import * as DiceActions from '../store/diceActions';

const AvailableDiceHolder = props => {
    const { availableDice } = props;
    return (
        <div>
            <h1>Available Dice</h1>
            <div className="description">Click a dice to add to your active pool</div>
            {availableDice.map((dice, i) =>
                <div className="die" key={i}>                          
                    <img onClick={ () => DiceActions.addActiveDice(dice)} src={dice.imagefile} alt={dice.name}/><br/>
                    <span className="remaining-value">{dice.available}</span>
                    <span className="remaining-label">Remaining</span>
                </div>
            )}
        </div>
    );
}

export default AvailableDiceHolder;

import React from 'react';

import * as DiceActions from './DiceActions';

export default class AvailableDiceHolder extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    render() {

        return ( 
            this.props.availableDice.map((dice, i) =>
                <div className="die" key={i}>                          
                    <img onClick={ () => DiceActions.addActiveDice(dice)} src={dice.imagefile} alt={dice.name}/><br/>
                    <span>{dice.available}</span>
                </div>
            )
        )
    }
}

import React from 'react';

import RollResults from './RollResults.js';

export default class RollButton extends React.Component {
    
    constructor(props){
        
        super(props)
        
        this.state = {ActiveDice: this.props.ActiveDice, RollResults: {}};
        
    }
    
    componentWillReceiveProps(nextProps){
        if (this.state.ActiveDice !== nextProps.ActiveDice) {
            this.setState({
                ActiveDice: nextProps.ActiveDice
            })
        }         
    }
    
    calculateResults() {

        let data = this.state.ActiveDice;;
        
        let results = {};
        
        let resultValues = [];
        
        data.map(function(dice){
        
            let sideRolled = Math.floor(Math.random() * (dice.type-1)) + 0;
            
            let sideRolledValue = dice.sides[sideRolled];

            resultValues.push(sideRolledValue);
            
        })

        results.success = 0; 
        results.advantage = 0;
        results.failure = 0;
        results.threat = 0;
        results.triumph = 0;
        results.despair = 0;
        
        resultValues.map(function(result){
            results.success += result.success;
            results.advantage += result.advantage;
            results.failure += result.failure;
            results.threat += result.threat;
            results.triumph += result.triumph;
            results.despair += result.despair;
        })
        
        this.setState({
            RollResults: results
        })
        
        console.log(results);
        
    }
    
    render() {            

        return (
            <div>
                <button onClick={ () => this.calculateResults() }>Roll</button>
                <RollResults RollResults={this.state.RollResults} />
            </div>
            
        )
        
    }
    
}

/* 
roll a side
    -   random number between 1 and type
    -   values from that index of that sides array

export const PurpleDice = {
    name: 'purple',
    type: 8,
    imagefile: PurpleDie,
    sides: [
        {success: 0,
        advantage: 0,
        triumph: 0,
        failure: 0,
        threat: 0,
        despair: 0}
    ]       
};
*/
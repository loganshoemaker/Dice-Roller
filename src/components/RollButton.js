import React from 'react';

import RollResults from './RollResults.js';

export default class RollButton extends React.Component {
    
    constructor(props){
        
        super(props)
        
        this.state = {ActiveDice: this.props.ActiveDice, RollResults: {}, SideImages: []};
        
    }
    
    componentWillReceiveProps(nextProps){
        if (this.state.ActiveDice !== nextProps.ActiveDice) {
            this.setState({
                ActiveDice: nextProps.ActiveDice
            })
        }         
    }
    
    calculateResults() {

        let data = this.state.ActiveDice;
        
        let results = {};

        let sideImages = [];
        
        let resultValues = [];
        
        data.map(function(dice){
        
            let sideRolled = Math.floor(Math.random() * (dice.type)) + 0;
            
            let sideRolledValue = dice.sides[sideRolled];

            resultValues.push(sideRolledValue);

            sideImages.push(sideRolledValue.imgFile);
            
        })

        results.success = 0; 
        results.advantage = 0;
        results.failure = 0;
        results.threat = 0;
        results.triumph = 0;
        results.despair = 0;
        results.dark_destiny = 0;
        results.light_destiny = 0;
        
        resultValues.map(function(result){
            results.success += result.success;
            results.advantage += result.advantage;
            results.failure += result.failure;
            results.threat += result.threat;
            results.triumph += result.triumph;
            results.despair += result.despair;
            results.dark_destiny += result.dark_destiny;
            results.light_destiny += result.light_destiny;
        })
        
        this.setState({
            RollResults: results
        })
        
        this.setState({
            SideImages: sideImages
        })

    }
    
    render() {            

        return (
            <div>
                <button onClick={ () => this.calculateResults() }>Roll</button>
                <RollResults RollResults={this.state.RollResults} SideImages={this.state.SideImages} />
            </div>
            
        )
        
    }

}

import React from 'react';
import { Button } from '../baseComponents';

export default class RollButton extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            activeDice: this.props.activeDice,
            rollResults: {},
            sideImages: []
        };
    }
    
    componentWillReceiveProps(nextProps){
        if (this.state.activeDice !== nextProps.activeDice) {
            this.setState({
                activeDice: nextProps.activeDice
            })
        }         
    }
    
    sendRollResults = (rollresults, rollresultsimages) => {
        this.props.passRollResults(rollresults, rollresultsimages);
    }
    
    calculateResults = () => {
        const data = this.state.activeDice;
        const results = {};
        const sideImages = [];
        const resultValues = [];
        data.forEach(function (dice) {
            const sideRolled = Math.floor(Math.random() * (dice.type)) + 0;
            const sideRolledValue = dice.sides[sideRolled];
            resultValues.push(sideRolledValue);
            sideImages.push(sideRolledValue.imgFile);
        });
        results.success = 0; 
        results.advantage = 0;
        results.failure = 0;
        results.threat = 0;
        results.triumph = 0;
        results.despair = 0;
        results.dark_destiny = 0;
        results.light_destiny = 0;
        resultValues.forEach(function (result){
            results.success += result.success;
            results.advantage += result.advantage;
            results.failure += result.failure;
            results.threat += result.threat;
            results.triumph += result.triumph;
            results.despair += result.despair;
            results.dark_destiny += result.dark_destiny;
            results.light_destiny += result.light_destiny;
        })
        
        this.sendRollResults(results, sideImages);
        
    }
    
    render() {            
        return (
            <Button onClick={ () => this.calculateResults() }>Roll</Button>
        )
    }

}


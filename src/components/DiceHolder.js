import React from 'react';

import * as DiceActions from './DiceActions';
import DiceStore from './DiceStore';

import AvailableDiceHolder from './AvailableDiceHolder';
import ActiveDiceHolder from './ActiveDiceHolder';
import RollResults from './RollResults';

export default class DiceHolder extends React.Component {

    constructor(){
        super();
            this.state = {activeDice: DiceStore.getActive(), availableDice: DiceStore.getAvailable(), rollResults: DiceStore.getRollResults()}
    }
    
    componentDidMount(){
        DiceStore.on("change", () => {
            this.setState({
                activeDice: DiceStore.getActive(),
                availableDice: DiceStore.getAvailable(),
                rollResults: DiceStore.getRollResults()
            })
        })
    }
    
    render() {
        console.log(this.state.rollResults);
        return (
            <div>
                <div>
                    <AvailableDiceHolder availableDice={this.state.availableDice} dice={DiceStore.getDice()} />
                </div>
                <div>
                    <button onClick={ () => DiceStore.rollDice() }>Roll Dice!</button>
                </div>
                <div>
                    <ActiveDiceHolder activeDice={this.state.activeDice} dice={DiceStore.getDice()} availableDice={this.state.availableDice}/>
                </div>
                <RollResults data={this.state.rollResults}/>
            </div>
        )
    }
}
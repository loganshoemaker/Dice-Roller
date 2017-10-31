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
        return (
            <div id="dice-container">
                <div id="available-dice-container">
                    <AvailableDiceHolder availableDice={this.state.availableDice} dice={DiceStore.getDice()} />
                </div>
                <div id="active-dice-container">
                    <button onClick={ () => DiceStore.rollDice() }>Roll Dice!</button>
                    <ActiveDiceHolder activeDice={this.state.activeDice} dice={DiceStore.getDice()} availableDice={this.state.availableDice}/>
                </div>
                <RollResults data={this.state.rollResults}/>
            </div>
        )
    }
}
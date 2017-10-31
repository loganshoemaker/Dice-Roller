import React from 'react';

import * as DiceActions from './DiceActions';
import DiceStore from './DiceStore';

import AvailableDiceHolder from './AvailableDiceHolder';
import ActiveDiceHolder from './ActiveDiceHolder';
import RollResults from './RollResults';

export default class DiceHolder extends React.Component {

    constructor(){
        super();
            this.state = {activeDice: DiceStore.getActive(), availableDice: DiceStore.getAvailable(), rollResults: DiceStore.getRollResults(), rolled: DiceStore.checkRolled()}
    }
    
    componentDidMount(){
        DiceStore.on("change", () => {
            this.setState({
                activeDice: DiceStore.getActive(),
                availableDice: DiceStore.getAvailable(),
                rollResults: DiceStore.getRollResults(),
                rolled: DiceStore.checkRolled()
            })
        })
    }
    
    checkIfRolled() {
        if (this.state.rolled == true){
            return <div id="roll-results-container">
                    <RollResults data={this.state.rollResults}/>                
                </div>
        }
    }

    render() {
        
        const rollResults = this.checkIfRolled();

        return (
            <div id="dice-container">
                {rollResults}
                <section id="available-dice-container">
                    <h2>Available Dice</h2>
                    <AvailableDiceHolder availableDice={this.state.availableDice} dice={DiceStore.getDice()} />
                </section>
                <section id="active-dice-container">
                    <h1>Active Dice</h1>
                    <ActiveDiceHolder activeDice={this.state.activeDice} dice={DiceStore.getDice()} availableDice={this.state.availableDice}/>
                </section>
            </div>
        )
    }
}
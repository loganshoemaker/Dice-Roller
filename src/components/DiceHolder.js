import React from 'react';

import * as DiceActions from './DiceActions';
import DiceStore from './DiceStore';

import AvailableDiceHolder from './AvailableDiceHolder';
import ActiveDiceHolder from './ActiveDiceHolder';

export default class DiceHolder extends React.Component {

    constructor(){
        super();
            this.state = {activeDice: DiceStore.getActive(), availableDice: DiceStore.getAvailable()}
    }
    
    componentDidMount(){
        DiceStore.on("change", () => {
            this.setState({
                activeDice: DiceStore.getActive(),
                availableDice: DiceStore.getAvailable()
            })
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <AvailableDiceHolder availableDice={this.state.availableDice} dice={DiceStore.getDice()} />
                </div>
                <div>
                    <ActiveDiceHolder activeDice={this.state.activeDice} dice={DiceStore.getDice()} availableDice={this.state.availableDice}/>
                </div>
            </div>
        )
    }
}
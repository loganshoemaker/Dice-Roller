import React from 'react';
import ActiveDiceHolder from './ActiveDiceHolder.js';
import * as PurpleDice from './PurpleDiceData.js';
import * as GreenDice from './GreenDiceData.js';
import * as YellowDice from './YellowDiceData.js';
import * as BlueDice from './BlueDiceData.js';
import * as BlackDice from './BlackDiceData.js';
import * as RedDice from './RedDiceData.js';
import * as WhiteDice from './WhiteDiceData.js';

export default class DiceHolder extends React.Component {

    constructor(props){
        super(props);
        this.addDice = this.addDice.bind(this);
        this.removeAllDice = this.removeAllDice.bind(this);
    }

    componentWillMount(){
        if (!this.state) {
            this.setState({
                ActiveDice: []
            })    
        }
    }
    
    addDice = (dice) => {
        let tempActiveDice = this.state.ActiveDice;
        tempActiveDice.push(dice);
        this.setState({
            ActiveDice: tempActiveDice
        })
    }

    removeAllDice = () => {
        this.setState({
            ActiveDice: []
        })   
    }

    render() {           
        return (
            <div>
                <h1>Click a die to add to your active dice</h1>
                <img alt={GreenDice.GreenDice.name} src={GreenDice.GreenDice.imagefile} onClick={ () => this.addDice(GreenDice.GreenDice) }/> 
                <img alt={YellowDice.YellowDice.name} src={YellowDice.YellowDice.imagefile} onClick={ () => this.addDice(YellowDice.YellowDice) }/>
                <img alt={PurpleDice.PurpleDice.name} src={PurpleDice.PurpleDice.imagefile} onClick={ () => this.addDice(PurpleDice.PurpleDice) }/>
                <img alt={BlueDice.BlueDice.name} src={BlueDice.BlueDice.imagefile} onClick={ () => this.addDice(BlueDice.BlueDice) }/>
                <img alt={BlackDice.BlackDice.name} src={BlackDice.BlackDice.imagefile} onClick={ () => this.addDice(BlackDice.BlackDice) }/>
                <img alt={RedDice.RedDice.name} src={RedDice.RedDice.imagefile} onClick={ () => this.addDice(RedDice.RedDice) }/>
                <img alt={WhiteDice.WhiteDice.name} src={WhiteDice.WhiteDice.imagefile} onClick={ () => this.addDice(WhiteDice.WhiteDice) }/>
                <ActiveDiceHolder ActiveDice={this.state.ActiveDice} /><br/>
                <button onClick={ () => this.removeAllDice() }>Remove All Dice</button>
            </div>
        ) 
            
    }

}


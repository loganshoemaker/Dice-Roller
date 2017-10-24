import React, { Component } from 'react';
import ActiveDiceHolder from './ActiveDiceHolder.js';
import * as AllDice from './DiceData.js';

export default class DiceHolder extends React.Component {

    constructor(props){
        super(props);
        this.handleAddDice = this.handleAddDice.bind(this);
        this.removeAllDice = this.removeAllDice.bind(this);
    }

    componentWillMount(){
        if (!this.state) {
            this.setState({
                ActiveDice: []
            })    
        }
    }
    
    handleAddDice = (dice) => {

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
                <button onClick={ () => this.handleAddDice(AllDice.GreenDice) }>Green Dice</button>
                <button onClick={ () => this.handleAddDice(AllDice.YellowDice) }>Yellow Dice</button>
                <ActiveDiceHolder ActiveDice={ this.state.ActiveDice } /><br/>
                <button onClick={ () => this.removeAllDice() }>Remove All Dice</button>
            </div>
        ) 
            
    }

}


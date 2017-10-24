import React, { Component } from 'react';
import ActiveDiceHolder from './ActiveDiceHolder.js';
import * as AllDice from './DiceData.js';

export default class DiceHolder extends React.Component {

    constructor(props){
        super(props);
        this.handleAddDice = this.handleAddDice.bind(this);
    }

    handleAddDice = (dice) => {

        console.log(dice);
        
        let tempActiveDice = this.props.ActiveDice;

        tempActiveDice.push(dice);

        this.setState({
            ActiveDice: tempActiveDice
        })

    }

    render() {           

        return (
            <div>
                <button onClick={ () => this.handleAddDice(AllDice.GreenDice) }>Green Dice</button>
                <button onClick={ () => this.handleAddDice(AllDice.YellowDice) }>Yellow Dice</button>
                <ActiveDiceHolder ActiveDice={this.props.ActiveDice} />
            </div>
        ) 
            
    }

}


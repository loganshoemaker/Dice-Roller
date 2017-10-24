import React from 'react';
import ActiveDiceHolder from './ActiveDiceHolder.js';
import * as AllDice from './DiceData.js';

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
                <img alt={AllDice.GreenDice.name} src={AllDice.GreenDice.imagefile} onClick={ () => this.addDice(AllDice.GreenDice) }/> 
                <img alt={AllDice.YellowDice.name} src={AllDice.YellowDice.imagefile} onClick={ () => this.addDice(AllDice.YellowDice) }/>
                <img alt={AllDice.PurpleDice.name} src={AllDice.PurpleDice.imagefile} onClick={ () => this.addDice(AllDice.PurpleDice) }/>
                <ActiveDiceHolder ActiveDice={this.state.ActiveDice} /><br/>
                <button onClick={ () => this.removeAllDice() }>Remove All Dice</button>
            </div>
        ) 
            
    }

}


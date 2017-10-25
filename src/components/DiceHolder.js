import React from 'react';
import ActiveDiceHolder from './ActiveDiceHolder.js';
import * as PurpleDice from './Dice/PurpleDiceData.js';
import * as GreenDice from './Dice/GreenDiceData.js';
import * as YellowDice from './Dice/YellowDiceData.js';
import * as BlueDice from './Dice/BlueDiceData.js';
import * as BlackDice from './Dice/BlackDiceData.js';
import * as RedDice from './Dice/RedDiceData.js';
import * as WhiteDice from './Dice/WhiteDiceData.js';

export default class DiceHolder extends React.Component {

    constructor(props){
        super(props);
        this.addDice = this.addDice.bind(this);
        this.checkAvailableDice = this.checkAvailableDice.bind(this);
        this.removeAllDice = this.removeAllDice.bind(this);
        this.checkAvailableDice();
    }

    componentWillMount(){
        if (!this.state) {
            this.setState({
                ActiveDice: []
            })
            this.setState({
                greenActive: 0
            })          
            this.setState({
                yellowActive: 0  
            })
            this.setState({
                redActive: 0
            })          
            this.setState({
                blueActive: 0  
            })          
            this.setState({
                blackActive: 0  
            })
            this.setState({
                whiteActive: 0
            })          
            this.setState({
                purpleActive: 0  
            })                      
        }
    }
    
    removeSingleDice = (dice) => {

        let diceState = this.state[(dice.name).concat('Active')];

        let diceStateName = (dice.name).concat('Active');
        
        let tempActiveDice = diceState - 1;
        
        this.setState({ [diceStateName]: tempActiveDice})

    }
    
    checkAvailableDice = (dice) => {
        
        if(dice){
            
            let diceState = this.state[(dice.name).concat('Active')];

            let diceStateName = (dice.name).concat('Active');

            if (diceState < dice.limit) {
                      
                this.addDice(dice);
                
                let tempActiveDice = diceState + 1;
            
                this.setState({ [diceStateName]: tempActiveDice });
                
                console.log("Dice Color: " + dice.name);
                console.log("Limit: " + dice.limit);
                console.log("Active Dice: " + diceState);
                
            } else {
                
                alert(dice.name + " limit has been reached!");
                
            }

        }
        
    }
    
    addDice(dice) {    
        console.log(dice);
        
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
        this.setState({
            ActiveDice: []
        })
        this.setState({
            greenActive: 0
        })          
        this.setState({
            yellowActive: 0  
        })
        this.setState({
            redActive: 0
        })          
        this.setState({
            blueActive: 0  
        })          
        this.setState({
            blackActive: 0  
        })
        this.setState({
            whiteActive: 0
        })          
        this.setState({
            purpleActive: 0  
        })  

    }

    render() {   

        return (
            <div id="dice-holder">
                <h1>Click a die to add to your active dice</h1>
                <div className="dice-container">
                    <div className="dice-preview">
                        <img alt={GreenDice.GreenDice.name} src={GreenDice.GreenDice.imagefile} onClick={ () => this.checkAvailableDice(GreenDice.GreenDice) }/><br/>
                        <span>Remaining: </span>
                    </div>
                    <div className="dice-preview">
                        <img alt={YellowDice.YellowDice.name} src={YellowDice.YellowDice.imagefile} onClick={ () => this.checkAvailableDice(YellowDice.YellowDice) }/><br/>
                        <span>Remaining: </span>
                    </div>
                    <div className="dice-preview">
                        <img alt={PurpleDice.PurpleDice.name} src={PurpleDice.PurpleDice.imagefile} onClick={ () => this.checkAvailableDice(PurpleDice.PurpleDice) }/><br/>
                        <span>Remaining: </span>
                    </div>
                    <div className="dice-preview">
                        <img alt={BlueDice.BlueDice.name} src={BlueDice.BlueDice.imagefile} onClick={ () => this.checkAvailableDice(BlueDice.BlueDice) }/><br/>
                        <span>Remaining: </span>
                    </div>
                    <div className="dice-preview">
                        <img alt={BlackDice.BlackDice.name} src={BlackDice.BlackDice.imagefile} onClick={ () => this.checkAvailableDice(BlackDice.BlackDice) }/><br/>
                        <span>Remaining: </span>
                    </div>
                    <div className="dice-preview">
                        <img alt={RedDice.RedDice.name} src={RedDice.RedDice.imagefile} onClick={ () => this.checkAvailableDice(RedDice.RedDice) }/><br/>
                        <span>Remaining: </span>
                    </div>
                    <div className="dice-preview">
                        <img alt={WhiteDice.WhiteDice.name} src={WhiteDice.WhiteDice.imagefile} onClick={ () => this.checkAvailableDice(WhiteDice.WhiteDice) }/><br/>
                        <span>Remaining: </span>
                    </div>
                </div>
                <button onClick={ () => this.removeAllDice() }>Remove All Dice</button>
                <ActiveDiceHolder ActiveDice={this.state.ActiveDice} removeSingleDice={this.removeSingleDice}/>
            </div>
        )          
    }
}


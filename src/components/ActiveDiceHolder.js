import React from 'react';

import RollButton from './RollButton.js';
import RollResults from './RollResults.js';

export default class ActiveDiceHolder extends React.Component {
    
    constructor(props){
        super(props)
//        this.state = {ActiveDice: [], RollResults: {}, SideImages: []};
        
    }
    
    render() {
    
        return null
        
    }

//    // Need to pass and use nextProps
//    componentWillReceiveProps(nextProps){
//        if (this.state.ActiveDice !== nextProps.ActiveDice) {
//            this.setState({
//                ActiveDice: nextProps.ActiveDice
//            })
//        }         
//    }
//    
//    removeSingleDice = (dice) => {
//        this.props.removeSingleDice(dice);
//    }
//    
//    removeThisDice = (i) => {
//        
//        this.removeSingleDice(this.state.ActiveDice[i]);
//        
//        let tempDice = this.state.ActiveDice;
//        tempDice.splice(i, 1);
//        this.setState({
//            ActiveDice: tempDice
//        })
//    }
//    
//    passRollResults = (a, b) => {
//        this.setState({
//            RollResults: a
//        })
//        
//        this.setState({
//            SideImages: b
//        })
//
//    }
//
//    render() {    
//
//        if ( this.state.ActiveDice.length > 0 ) {
//            return (
//                <div id="active-dice">
//                    <div className="dice-container">
//                        <h1>Active Dice</h1>
//                        {this.state.ActiveDice.map((item, i) => 
//                            <div key={i}>
//                                <img alt={item.name} src={item.imagefile} onClick={ () => this.removeThisDice(i)}/>
//                            </div>
//                        )}
//                    </div>
//                    <div>
//                        <RollButton ActiveDice={this.state.ActiveDice} passRollResults={this.passRollResults}/>  
//                    </div>       
//                    <div>
//                        <RollResults RollResults={this.state.RollResults} SideImages={this.state.SideImages}/>
//                    </div>
//                </div>
//            )
//        } else {
//            return (
//                <div id="active-dice">
//                    <h1>No Active Dice Yet</h1>                        
//                </div>
//            )
//        }
//
//    }
}

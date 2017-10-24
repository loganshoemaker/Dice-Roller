import React from 'react';

import RollButton from './RollButton.js';

export default class ActiveDiceHolder extends React.Component {
    
    constructor(props){
        
        super(props)

        this.state = {ActiveDice: []};
        
        this.removeThisDice = this.removeThisDice.bind(this);
    }

    // Need to pass and use nextProps
    componentWillReceiveProps(nextProps){
        if (this.state.ActiveDice !== nextProps.ActiveDice) {
            this.setState({
                ActiveDice: nextProps.ActiveDice
            })
        }         
    }
    
    removeThisDice = (i) => {
        let tempDice = this.state.ActiveDice;
        tempDice.splice(i, 1);
        this.setState({
            ActiveDice: tempDice
        })
    }

    render() {                 

        if ( this.state.ActiveDice.length > 0 ) {

            return (

                <div id="active-dice">
                    <h1>Active Dice</h1>
                    {this.state.ActiveDice.map((item, i) => 
                        <div key={i}>
                            <img alt={item.name} src={item.imagefile} onClick={ () => this.removeThisDice(i)}/>
                        </div>
                    )}
                    <RollButton ActiveDice={this.state.ActiveDice} />
                </div>

            )

        } else {

            return (
                <div>
                    <h1>No Active Dice Yet</h1>                        
                </div>
            )

        }

    }
    
}

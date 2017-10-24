import React, { Component } from 'react';

export default class ActiveDiceHolder extends React.Component {
    
    constructor(props){
        
        super(props)

        this.state = {ActiveDice: []};
        
        this.removeThisDice = this.removeThisDice.bind(this);
    }

/*
    Need component state to equal props
    Update state
*/
    
    // Need to pass and use nextProps
    componentWillReceiveProps(nextProps){
        if (this.state.ActiveDice != nextProps.ActiveDice) {
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

        console.log("ActiveDiceHolder render")         

        if ( this.state.ActiveDice.length > 0 ) {

            return (

                <div id="active-dice">
                    <h1>Active Dice</h1>
                    {this.state.ActiveDice.map((item, i) => 
                        <div key={i}>
                            <img src={item.imagefile} onClick={ () => this.removeThisDice(i)}/>
                        </div>
                    )}
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

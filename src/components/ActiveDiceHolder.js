import React, { Component } from 'react';

export default class ActiveDiceHolder extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    render() {

        console.log(this.props.ActiveDice);

            if ( this.props.ActiveDice.length > 0 ) {
                        
                return (
                    
                    <div id="active-dice">
                        <h1>Active Dice Holder</h1>
                        {this.props.ActiveDice.map((item, i) => 
                            <div key={i}>
                                <img src={item.imagefile}/>
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

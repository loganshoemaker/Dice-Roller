import React, { Component } from 'react';

// Presentational Component

export default class Dice extends React.Component {

    constructor(props) {
    
        super(props);

    }
    
    render() {
        
        return (
            <div className={'die die-'.concat(this.props.die.name)}>
                <h1>{this.props.die.name}</h1>
                <img src={this.props.die.imagefile}/><br/>
                <strong>Sides: {this.props.die.type}</strong>
            </div>      
        )
    }
}

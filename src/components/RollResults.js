import React from 'react';

import DiceStore from './DiceStore';

export default class RollResults extends React.Component {
    constructor(props) {
        super(props); 
    }
    
    render() {
        return (            
            <div>
                <div>
                    {this.props.data.sides.map((image, i) => <img key={i} src={image}/>)}
                </div>
                <div>
                    <strong>Success: {this.props.data.success}</strong><br/>
                    <strong>Failure: {this.props.data.failure}</strong><br/> 
                    <strong>Advantage: {this.props.data.advantage}</strong><br/>
                    <strong>Threat: {this.props.data.threat}</strong><br/>  
                    <strong>Triumph: {this.props.data.triumph}</strong><br/>
                    <strong>Despair: {this.props.data.despair}</strong><br/>
                    <strong>Light Destiny: {this.props.data.light_destiny}</strong><br/>              
                    <strong>Dark Destiny: {this.props.data.dark_destiny}</strong><br/>  
                </div>
                <div>
                    <h1>Net Success: {this.props.data.netSuccess}</h1>
                    <h1>Net Advantage: {this.props.data.netAdvantage}</h1>
                </div>
            </div>
        )
    }
}

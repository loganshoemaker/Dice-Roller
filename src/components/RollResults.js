import React from 'react';

import * as DiceActions from './DiceActions';
import DiceStore from './DiceStore';
import Button from './Button';

export default class RollResults extends React.Component {
    constructor(props) {
        super(props); 
    }
    
    render() {
        return (            
            <section id="roll-results-container">
                <h2>Roll Results</h2>
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
                    <strong>Dark Destiny: {this.props.data.dark_destiny}</strong>
                </div>
                <div>
                    <h1>Net Success: {this.props.data.netSuccess}</h1>
                    <h1>Net Advantage: {this.props.data.netAdvantage}</h1>
                </div>
                <Button handleClick={ () => DiceActions.clearRollResults() } text="ClearResults" />
            </section>
        )
    }
}

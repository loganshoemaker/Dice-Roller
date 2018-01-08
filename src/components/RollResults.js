import React from 'react';

import * as DiceActions from './DiceActions';
import DiceStore from './DiceStore';
import Button from './Button';

const RollResults = props => {
    const { data, ...rest } = props;
    return (            
        <section id="roll-results-container">
            <h2>Roll Results</h2>
            <div>
                {data.sides.map((image, i) => <img key={i} src={image}/>)}
            </div>
            <div>
                <strong>Success: {data.success}</strong><br/>
                <strong>Failure: {data.failure}</strong><br/> 
                <strong>Advantage: {data.advantage}</strong><br/>
                <strong>Threat: {data.threat}</strong><br/>  
                <strong>Triumph: {data.triumph}</strong><br/>
                <strong>Despair: {data.despair}</strong><br/>
                <strong>Light Destiny: {data.light_destiny}</strong><br/>      
                <strong>Dark Destiny: {data.dark_destiny}</strong>
            </div>
            <div>
                <h1>Net Success: {data.netSuccess}</h1>
                <h1>Net Advantage: {data.netAdvantage}</h1>
            </div>
            <Button handleClick={ () => DiceActions.clearRollResults() }>Clear Results</Button>
        </section>
    )
}

export default RollResults;

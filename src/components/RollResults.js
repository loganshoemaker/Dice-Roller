import React from 'react';

export default class RollResults extends React.Component {

    constructor(props) {
    
        super(props);

    }
    
    render() {
        
        return (            
            <div id="results">
                <h1>Results</h1>
                <strong>Success: </strong>{this.props.RollResults.success}<br />
                <strong>Advantage: </strong>{this.props.RollResults.advantage}<br />
                <strong>Threat: </strong>{this.props.RollResults.threat}<br />     
                <strong>Failure: </strong>{this.props.RollResults.failure}<br />
                <strong>Triumph: </strong>{this.props.RollResults.triumph}<br />
                <strong>Despair: </strong>{this.props.RollResults.despair}<br />               
            </div>
        )
    }
}

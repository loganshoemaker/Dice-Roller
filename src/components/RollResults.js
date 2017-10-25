import React from 'react';

export default class RollResults extends React.Component {

    render() {
        return (            
            <div id="results">
                <h1>Results</h1>
                <div>
                    {this.props.SideImages.map((item, i) => 
                        <div key={i}>
                            <img alt={"side face"} src={item} onClick={ () => this.removeThisDice(i)}/>
                        </div>
                    )}
                </div><br/><br/><br/>
                <div>
                    <strong>Success: </strong>{this.props.RollResults.success}<br />
                    <strong>Advantage: </strong>{this.props.RollResults.advantage}<br />
                    <strong>Threat: </strong>{this.props.RollResults.threat}<br />     
                    <strong>Failure: </strong>{this.props.RollResults.failure}<br />
                    <strong>Triumph: </strong>{this.props.RollResults.triumph}<br />
                    <strong>Despair: </strong>{this.props.RollResults.despair}<br />   
                    <strong>Dark Destiny: </strong>{this.props.RollResults.dark_destiny}<br />
                    <strong>Light Destiny: </strong>{this.props.RollResults.light_destiny}<br />   
                </div>
            </div>
        )
    }
}

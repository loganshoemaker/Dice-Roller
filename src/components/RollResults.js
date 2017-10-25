import React from 'react';

export default class RollResults extends React.Component {

    constructor(props) {
    
        super(props);

    }
    
    /* Change from props to state and update to keep track of force dice in/out */
    
    forceCheck(props) {
               
        console.log(props);
        
        if ((props.RollResults.dark_destiny >= 0) || (props.RollResults.light_destiny >= 0)) {
            return (
                <div>
                    <strong>
                        Dark Destiny: {props.RollResults.dark_destiny}
                    </strong><br />
                    <strong>
                        Light Destiny: {props.RollResults.light_destiny}
                    </strong>
                </div>
            )
        }

    }
    
    render() {
     
        return (            
            <div id="results">
                <h1>Results</h1>
        
                {this.props.SideImages.map((item, i) => 
                    <div key={i}>
                        <img src={item} onClick={ () => this.removeThisDice(i)}/>
                    </div>
                )}
                
                <strong>Success:    </strong>{this.props.RollResults.success}<br />
                <strong>Advantage:  </strong>{this.props.RollResults.advantage}<br />
                <strong>Threat:     </strong>{this.props.RollResults.threat}<br />     
                <strong>Failure:    </strong>{this.props.RollResults.failure}<br />
                <strong>Triumph:    </strong>{this.props.RollResults.triumph}<br />
                <strong>Despair:    </strong>{this.props.RollResults.despair}<br />   
                    
                {this.forceCheck(this.props)}
                    
            </div>
        )
    }
}

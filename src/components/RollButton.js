import React from 'react';

export default class RollButton extends React.Component {
    
    constructor(props){
        
        super(props)
        
        this.state = {ActiveDice: this.props.ActiveDice};
        
    }
    
    componentWillReceiveProps(nextProps){
        if (this.state.ActiveDice !== nextProps.ActiveDice) {
            this.setState({
                ActiveDice: nextProps.ActiveDice
            })
        }         
    }
    
    render() {            

        console.log(this.state.ActiveDice);
        
        return (
            <div>
                <button>Roll</button>
            </div>
            
        )
        
    }
    
}
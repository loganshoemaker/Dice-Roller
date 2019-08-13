class DiceStore extends EventEmitter {
    constructor() {
        super();
        this.dice = [
            {name: 'purple',
             facts: PurpleDice.PurpleDice},
            {name: 'green',
             facts: GreenDice.GreenDice},
            {name: 'yellow',
            facts: YellowDice.YellowDice}, 
            {name: 'blue',
             facts: BlueDice.BlueDice},
            {name: 'black',
             facts: BlackDice.BlackDice},
            {name: 'red',
             facts: RedDice.RedDice},
            {name: 'white',
             facts: WhiteDice.WhiteDice}
        ];
    }

    getAllDice() {
        return this.dice;
    }

    handleActions(action) {
        switch(action.type) {   
            case "GET_ALL_DICE": {
                this.getAllDice();
                break;
            } 
            default: {
                break;
            }
        }
    }
}


export function getAllDice() {
    diceDispatcher.dispatch({
        type: "GET_ALL_DICE"
    })
}

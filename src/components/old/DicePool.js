import React, { Component } from 'react';

import {Dice} from './Dice.js';

export default class DicePool extends React.Component {

    constructor(props) {
        
        super(props); 

        function renderDice(i) {
            return <Dice value={i} />;
        }

        let tempDiceHolder = [];

        this.props.diceFacts.forEach(function(i){

            let countDice = 0;

            while(countDice < i.numDice) {

                i.dice = renderDice(i.sides);

                    tempDiceHolder.push(i);                

                countDice++;

            }

        })
        
        this.state = {diceHolder: tempDiceHolder}  
        
    }

    render() {

        const loopData = this.state.diceHolder.map((a, index) => {
            return <button key={index}>Color: {a.name} - Sides: {a.type}</button>
        });        

        return (
            <div>
                {loopData}
            </div>

        )

    }

}

DicePool.defaultProps = {
    diceFacts: [
        {"name":"GreenDice", "type":8, "numDice":3, "sides": {
            1: "testa",
            2: "testb",
            3: "testc",
            4: "testd",
            5: "teste",
            6: "testf",
            7: "testg",
            8: "testh"           
        }},
        {"name":"YellowDice", "type":12, "numDice":2, "sides": {
            1: "testa",
            2: "testb",
            3: "testc",
            4: "testd",
            5: "teste",
            6: "testf",
            7: "testg",
            8: "testh",
            9: "testi",
            10: "testj",
            11: "testk",
            12: "testl"     
        }},            
        {"name":"PurpleDice", "type":8, "numDice":3, "sides": {
            1: "testa",
            2: "testb",
            3: "testc",
            4: "testd",
            5: "teste",
            6: "testf",
            7: "testg",
            8: "testh"
        }}            
    ]
}

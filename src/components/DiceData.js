import GreenDie from './../styles/images/green.png';
import YellowDie from './../styles/images/yellow.png';
import PurpleDie from './../styles/images/purple.png';

export const ALLDICE = [
        
    { id: 1,
      name: 'green',
      type: 8,
      imagefile: GreenDie,
      sides: [
            {side: 1,
             value: 'positive'},    
            {side: 2, 
             value: 'negative'},
            {side: 3,
             value: 'neutral'}
      ]
    },
    { id: 2,
      name: 'purple',
      type: 8,
      imagefile: PurpleDie,     
      sides: [
            {side: 1,
             value: 'positive'},    
            {side: 2, 
             value: 'negative'},
            {side: 3,
             value: 'neutral'}
      ]
    },
    { id: 3,
      name: 'yellow',
      type: 12,
      imagefile: YellowDie,     
      sides: [
            {side: 1,
             value: 'positive'},    
            {side: 2, 
             value: 'negative'},
            {side: 3,
             value: 'neutral'}
      ]
    }
]

export const GreenDice = {
    name: 'green',
    type: 8,
    imagefile: GreenDie
};

export const YellowDice = {
    name: 'yellow',
    type: 12,
    imagefile: YellowDie 
};


export const PurpleDice = {
    name: 'purple',
    type: 8,
    imagefile: PurpleDie
};
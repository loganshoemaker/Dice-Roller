import GreenDie from './../styles/images/green.png';
import YellowDie from './../styles/images/yellow.png';
import PurpleDie from './../styles/images/purple.png';

export const ALLDICE = [
        
    { id: 1,
      name: 'green',
      type: 8,
      imagefile: GreenDie,
      sides: [
        {success: 1,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},
          
        {success: 1,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},  
          
        {success: 0,
         advantage: 2,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},
          
        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},
          
        {success: 1,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},
          
        {success: 0,
         advantage: 2,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},
          
        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},
          
        {success: 1,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},          
      ]
    },
    { id: 2,
      name: 'purple',
      type: 8,
      imagefile: PurpleDie,     
      sides: [
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 1,
         despair: 0},  
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 2,
         threat: 0,
         despair: 0},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 1,
         threat: 0,
         despair: 0},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 1,
         threat: 1,
         despair: 0},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 2,
         threat: 0,
         despair: 0},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 1,
         threat: 0,
         despair: 0},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 1,
         threat: 1,
         despair: 0},
      ]
    },
    { id: 3,
      name: 'yellow',
      type: 12,
      imagefile: YellowDie,     
        sides: [
            {success: 0,
             advantage: 2,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},

            {success: 0,
             advantage: 1,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},  

            {success: 0,
             advantage: 1,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},

            {success: 0,
             advantage: 1,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},

            {success: 1,
             advantage: 0,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},

            {success: 0,
             advantage: 2,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},

            {success: 0,
             advantage: 1,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},  

            {success: 0,
             advantage: 1,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},

            {success: 0,
             advantage: 1,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},

            {success: 1,
             advantage: 0,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},   

            {success: 0,
             advantage: 1,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},  

            {success: 0,
             advantage: 1,
             triumph: 0,
             failure: 0,
             threat: 0,
             despair: 0},        
        ]       
    }
]

export const GreenDice = {
    name: 'green',
    type: 8,
    imagefile: GreenDie,
    sides: [
        {success: 1,
        advantage: 0,
        triumph: 0,
        failure: 0,
        threat: 0,
        despair: 0},

        {success: 1,
        advantage: 1,
        triumph: 0,
        failure: 0,
        threat: 0,
        despair: 0},  

        {success: 0,
        advantage: 2,
        triumph: 0,
        failure: 0,
        threat: 0,
        despair: 0},

        {success: 0,
        advantage: 1,
        triumph: 0,
        failure: 0,
        threat: 0,
        despair: 0},

        {success: 1,
        advantage: 0,
        triumph: 0,
        failure: 0,
        threat: 0,
        despair: 0},

        {success: 0,
        advantage: 2,
        triumph: 0,
        failure: 0,
        threat: 0,
        despair: 0},

        {success: 0,
        advantage: 1,
        triumph: 0,
        failure: 0,
        threat: 0,
        despair: 0},

        {success: 1,
        advantage: 0,
        triumph: 0,
        failure: 0,
        threat: 0,
        despair: 0},          
    ]
};

export const YellowDice = {
    name: 'yellow',
    type: 12,
    imagefile: YellowDie,
    sides: [
        {success: 0,
         advantage: 2,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},

        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},  

        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},

        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},

        {success: 1,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},
        
        {success: 0,
         advantage: 2,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},

        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},  

        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},

        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},

        {success: 1,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},   
        
        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},  

        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0},        
    ]       
};

export const PurpleDice = {
    name: 'purple',
    type: 8,
    imagefile: PurpleDie,
    sides: [
        {success: 0,
        advantage: 0,
        triumph: 0,
        failure: 0,
        threat: 0,
        despair: 0},

        {success: 0,
        advantage: 0,
        triumph: 0,
        failure: 0,
        threat: 1,
        despair: 0},  

        {success: 0,
        advantage: 0,
        triumph: 0,
        failure: 2,
        threat: 0,
        despair: 0},

        {success: 0,
        advantage: 0,
        triumph: 0,
        failure: 1,
        threat: 0,
        despair: 0},

        {success: 0,
        advantage: 0,
        triumph: 0,
        failure: 1,
        threat: 1,
        despair: 0},

        {success: 0,
        advantage: 0,
        triumph: 0,
        failure: 2,
        threat: 0,
        despair: 0},

        {success: 0,
        advantage: 0,
        triumph: 0,
        failure: 1,
        threat: 0,
        despair: 0},

        {success: 0,
        advantage: 0,
        triumph: 0,
        failure: 1,
        threat: 1,
        despair: 0},
    ]
};
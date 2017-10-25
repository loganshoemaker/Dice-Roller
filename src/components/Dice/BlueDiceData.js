import BlueDie from './../../styles/images/blue.png';
import blue from './../../styles/images/blueDice/blue.png';
import blue_1a from './../../styles/images/blueDice/blue_1a.png';
import blue_1a1s from './../../styles/images/blueDice/blue_1a1s.png';
import blue_1s from './../../styles/images/blueDice/blue_1s.png';
import blue_2a from './../../styles/images/blueDice/blue_2a.png';


export const BlueDice = {
    name: 'blue',
    type: 6,
    limit: 2,
    imagefile: BlueDie,
      sides: [
        {success: 1,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: blue_1s},
          
        {success: 0,
         advantage: 2,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: blue_2a},
          
        {success: 1,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: blue_1a1s},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: blue},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: blue},
          
        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: blue_1a}
    ]
};

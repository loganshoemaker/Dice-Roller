import GreenDie from './../../styles/images/green.png';
import green from './../../styles/images/greenDice/green.png';
import green_a1 from './../../styles/images/greenDice/green_a1.png';
import green_a2 from './../../styles/images/greenDice/green_a2.png';
import green_s1 from './../../styles/images/greenDice/green_s1.png';
import green_s1a1 from './../../styles/images/greenDice/green_s1a1.png';
import green_s2 from './../../styles/images/greenDice/green_s2.png';


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
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: green_s1},
          
        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: green_a1},
          
        {success: 1,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: green_s1a1},
          
        {success: 2,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: green_s2},
          
        {success: 0,
         advantage: 1,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: green_a1},
          
        {success: 1,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: green_s1},
          
        {success: 0,
         advantage: 2,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: green_a2},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,    
         dark_destiny: 0,
         light_destiny: 0,  
         imgFile: green},          
      ]
};

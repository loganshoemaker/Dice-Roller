import blackDie from './../styles/images/black.png';
import black from './../styles/images/blackDice/black.png';
import black_1f from './../styles/images/blackDice/black_1f.png';
import black_1t from './../styles/images/blackDice/black_1t.png';


export const BlackDice = {
    name: 'black',
    type: 6,
    imagefile: blackDie,
      sides: [
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 1,
         threat: 0,
         despair: 0,
         imgFile: black_1f},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 1,
         threat: 0,
         despair: 0,
         imgFile: black_1f},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 1,
         despair: 0,
         imgFile: black_1t},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 1,
         despair: 0,
         imgFile: black_1t},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,
         imgFile: black},
          
        {success: 0,
         advantage: 0,
         triumph: 0,
         failure: 0,
         threat: 0,
         despair: 0,
         imgFile: black}
    ]
};

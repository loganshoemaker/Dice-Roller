import ActionTypes from './ActionTypes';
import diceDispatcher from './../../DiceDispatcher';

const Actions = {

  addActiveDice(dice) {
    diceDispatcher.dispatch({
      type: ActionTypes.ADD_ACTIVE_DICE,
      dice
    })
  },

  removeActiveDice(dice){
    diceDispatcher.dispatch({
      type: ActionTypes.REMOVE_ACTIVE_DICE,
      dice
    })
  },

  addAvailableDice(dice) {
    diceDispatcher.dispatch({
      type: ActionTypes.ADD_AVAILABLE_DICE,
      dice
    })
  },

  removeAvailableDice(dice){
    diceDispatcher.dispatch({
      type: ActionTypes.REMOVE_AVAILABLE_DICE,
      dice
    })
  },

  roll(){
    diceDispatcher.dispatch({
      type: ActionTypes.ROLL
    })
  },

  toggleRolled() {
    diceDispatcher.dispatch({
      type: ActionTypes.TOGGLE_ROLLED
    })
  },

  clearRollResults(){
    diceDispatcher.dispatch({
      type: ActionTypes.CLEAR_ROLL_RESULTS
    })

  }
};

export default Actions;

import diceDispatcher from './DiceDispatcher';

export function addActiveDice(data) {
    diceDispatcher.dispatch({
        type: "ADD_ACTIVE_DICE",
        data
    })
}

export function removeActiveDice(data) {
    diceDispatcher.dispatch({
        type: "REMOVE_ACTIVE_DICE",
        data
    })
}

export function roll() {
    diceDispatcher.dispatch({
        type: "ROLL"
    })
}

export function clearRollResults() {
    diceDispatcher.dispatch({
        type: "CLEAR_ROLL_RESULTS"
    })
}
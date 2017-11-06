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

//// Not entirely certain HOW to return this; look into axios or write promises?
//// Currently thinking that read only functions do not need to go through the dispatcher; not state or data is changing in any of these actions so there should be no downstream effects from these functions
//export function getAllDice() {
//    diceDispatcher.dispatch({
//        type: "GET_ALL_DICE"
//    })
//}
//
//export function getActiveDice() {
//    diceDispatcher.dispatch({
//        type: "GET_ACTVE_DICE"
//    })
//}
//
//export function getAvailableDice() {
//    diceDispatcher.dispatch({
//        type: "GET_AVAILABLE_DICE"
//    })
//}
//
//export function getRollResults() {
//    diceDispatcher.dispatch({
//        type: "GET_ROLL_RESULTS"
//    })
//}
//
//export function checkIfRolled() {
//    diceDispatcher.dispatch({
//        type: "CHECK_IF_ROLLED"
//    })
//}
//

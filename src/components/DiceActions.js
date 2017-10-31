import diceDispatcher from './DiceDispatcher';

//export function createUser(data) {
//    Dispatcher.dispatch({
//        type: "CREATE_USER",
//        data
//    })
//}
//
//export function deleteUser(key) {
//    Dispatcher.dispatch({
//        type: "DELETE_USER",
//        key
//    })
//}
//
//export function updateUser(data) {
//    Dispatcher.dispatch({
//        type: "UPDATE_USER",
//        data
//    })
//}
//
//export function startUpdating(key) {
//    Dispatcher.dispatch({
//        type: "START_UPDATING",
//        key
//    })
//}
//
//export function getAvailable() {
//    diceDispatcher.dispatch({
//        type: "GET_AVAILABLE_DICE",
//    })
//}
//
//export function getActive() {
//    diceDispatcher.dispatch({
//        type: "GET_ACTIVE_DICE",
//    })
//}

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

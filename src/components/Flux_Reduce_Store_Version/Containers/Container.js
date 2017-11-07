import AppView from './../Views/View';
import {Container} from 'flux/utils';
import RolledStatusStore from './../Stores/RolledStatusStore';
import DiceFactsStore from './../Stores/DiceFactsStore';
import Actions from './../Actions/Actions';

// I think this just registers the imported store and allows us to getState() on them
function getStores() { 
  return [
    DiceFactsStore,
    RolledStatusStore
  ];
}

// Gets the state of the various stores and imports to bundle into the application
function getState() {
  return {
    rolled: RolledStatusStore.getState().rolled,
    dice: DiceFactsStore.getState().dice,
    onToggleRolled: Actions.toggleRolled
  };
}

// Combine these local functions with the view
export default Container.createFunctional(AppView, getStores, getState);

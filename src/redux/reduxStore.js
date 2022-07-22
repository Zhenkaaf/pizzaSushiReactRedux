import {combineReducers, legacy_createStore as createStore} from 'redux';
import PizzaReducer from './PizzaReducer';
import SushiReducer from './SushiReducer';

let redusers = combineReducers({
    PizzaPage: PizzaReducer,
    SushiPage: SushiReducer
});
let store = createStore(redusers);

export default store;
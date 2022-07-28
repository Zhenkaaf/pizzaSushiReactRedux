import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import PizzaReducer from './PizzaReducer';
import SushiReducer from './SushiReducer';
import HeaderReducer from './HeaderReducer';
import ShoppingCartReducer from './ShoppingCartReducer';
import thunkMiddleware from 'redux-thunk';


let redusers = combineReducers({
    PizzaPage: PizzaReducer,
    SushiPage: SushiReducer,
    HeaderPage: HeaderReducer,
    CartPage: ShoppingCartReducer
});
let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
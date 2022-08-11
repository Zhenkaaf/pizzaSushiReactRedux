import { connect } from "react-redux";
import ShoppingCart from "./ShoppingCart.jsx";
import { delPizzaActionCreator } from './../../redux/ShoppingCartReducer.js';

let mapStateToProps = (state) => {
    return {
        cartPage: state.CartPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        delPizza: (e) => {
            let pizzaIndex = e.target.parentNode.parentNode.id;
          
            dispatch(delPizzaActionCreator(pizzaIndex));
        }
    }
}

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
export default ShoppingCartContainer;

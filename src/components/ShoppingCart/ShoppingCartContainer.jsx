import { connect } from "react-redux";
import ShoppingCart from "./ShoppingCart.jsx";

let mapStateToProps = (state) => {
    
    return {
        
        cartPage: state.CartPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
export default ShoppingCartContainer;

import { connect } from "react-redux";
import Header from "./Header.jsx";
import { getTimeThunkCreator } from './../../redux/HeaderReducer.js';
import { updateDataActionCreator } from "../../redux/ShoppingCartReducer.js";

let mapStateToProps = (state) => {
    return {
        headerPage: state.HeaderPage,
        cartPage: state.CartPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getTimee: () => {
            dispatch(getTimeThunkCreator())
        },
        updateDataOrderPizza: (data) => {
            dispatch(updateDataActionCreator(data))
        }
    }
}

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)
export default HeaderContainer;
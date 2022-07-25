import { connect } from "react-redux";
import Header from "./Header.jsx";
import { getTimeThunkCreator } from './../../redux/HeaderReducer.js';

let mapStateToProps = (state) => {
    return {
        headerPage: state.HeaderPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getTimee: () => {
            dispatch(getTimeThunkCreator())
        }
    }
}

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)
export default HeaderContainer;
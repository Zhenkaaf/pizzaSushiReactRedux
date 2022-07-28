import { connect } from "react-redux";
import { changeDiametrActionCreator, getPizzaInfoActionCreator } from "../../redux/PizzaReducer";
import {setInfoToCartActionCreator} from './../../redux/ShoppingCartReducer';
import Pizza from "./Pizza";

let mapStateToProps = (state) => {
    return {
        pizzaPage: state.PizzaPage,
       
    }
   
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeDiametr: (event) => {
            let pizzaId = event.target.parentNode.parentNode.id;
            let sizeId = event.target.id;
            dispatch(changeDiametrActionCreator(pizzaId, sizeId))
        },
        getPizzaInfo: (event) => {
            let pizzaId = event.target.parentNode.parentNode.id;
            dispatch(getPizzaInfoActionCreator(pizzaId))
        },
        sentInfoToCart: (pizzaInfo) => {
           
            dispatch(setInfoToCartActionCreator(pizzaInfo));
        }
    }
}

const PizzaContainer = connect(mapStateToProps, mapDispatchToProps)(Pizza);
export default PizzaContainer;
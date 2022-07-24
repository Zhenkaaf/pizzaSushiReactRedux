import { connect } from "react-redux";
import { changeDiametrActionCreator } from "../../redux/PizzaReducer";
import Pizza from "./Pizza";

let mapStateToProps = (state) => {
    return {
        pizzaPage: state.PizzaPage
    }
   
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeDiametr: (event) => {
            let pizzaId = event.target.parentNode.parentNode.id;
            let sizeId = event.target.id;
            dispatch(changeDiametrActionCreator(pizzaId, sizeId))
        }
    }
}

const PizzaContainer = connect(mapStateToProps, mapDispatchToProps)(Pizza);
export default PizzaContainer;
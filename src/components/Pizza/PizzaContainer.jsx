import { connect } from "react-redux";
import Pizza from "./Pizza";

let mapStateToProps = (state) => {
    return {
        pizzaPage: state.PizzaPage
    }
   
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const PizzaContainer = connect(mapStateToProps, mapDispatchToProps)(Pizza);
export default PizzaContainer;
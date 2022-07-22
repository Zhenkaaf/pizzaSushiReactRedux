import Sushi from "./Sushi";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        sushiPage: state.SushiPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SushiContainer = connect(mapStateToProps, mapDispatchToProps)(Sushi);
export default SushiContainer;
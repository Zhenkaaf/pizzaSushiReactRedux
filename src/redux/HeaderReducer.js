import {timeApi} from './../components/api/api.js';


const SET_TIME = 'SET_TIME';

let initialState = {
    currentTime: null
}



const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TIME: 
        return {
            ...state,
            currentTime: action.time
        }
        default:
            return state;
    }
}

export const getTimeThunkCreator = () => {
    return (dispatch) => {
    
        timeApi.getTime()
        .then(response => {
            dispatch(setTimeActionCreator(response.data.time));
           
        })
    }
}



export const setTimeActionCreator = (time) => {
    return {
        type: 'SET_TIME',
        time
    }
}

export default HeaderReducer;
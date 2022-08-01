import { cloneDeep } from 'lodash';
const PUSH_INFO_TO_CART = 'PUSH_INFO_TO_CART';
const DEL_PIZZA = 'DEL_PIZZA';
const UPDATE_DATA_ORDER_PIZZA = 'UPDATE_DATA_ORDER_PIZZA';


/* localStorage.setItem('myKey', localStorageArr); */
let initialState = {
    orderList: []
}

const ShoppingCartReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case PUSH_INFO_TO_CART: {
            let objInfo = {};
          /*   objInfo.id = action.pizzaInfo.pizzaId; */
            let item = action.pizzaInfo.pizzaSizes.filter(item => { if (item.isActive == true) { return item } });
            objInfo.name = action.pizzaInfo.name;
            objInfo.size = item[0].size;
            objInfo.price = item[0].price;
            objInfo.count = 1;
            //сначала запихнуть в локал сторадж, потом вытащить и запихнуть все в orderList
            
            if (localStorage.getItem('myKey') == null) {
                let localStorageArr = [];
                localStorageArr.push(objInfo);
                let convertedToJson = JSON.stringify(localStorageArr);
                localStorage.setItem('myKey', convertedToJson);
            }
            else {
                let returnedObj = localStorage.getItem('myKey');
                let localStorageArr = JSON.parse(returnedObj);
                localStorageArr.push(objInfo);
                let convertedToJson = JSON.stringify(localStorageArr);
                localStorage.setItem('myKey', convertedToJson);
            }
            return {
                ...state,
                orderList: JSON.parse(localStorage.getItem('myKey')) // сюда запихнуть из локал сторадж
            }
        }
        case DEL_PIZZA: {
            let returnedObj = localStorage.getItem('myKey');
            let localStorageArr = JSON.parse(returnedObj);
            localStorageArr.splice(action.pizzaIndex, 1);
            let convertedToJson = JSON.stringify(localStorageArr);
            localStorage.setItem('myKey', convertedToJson);
            console.log(localStorageArr);
            return {
                ...state,
                orderList: JSON.parse(localStorage.getItem('myKey')) // сюда запихнуть из локал сторадж
            }

        }
        case UPDATE_DATA_ORDER_PIZZA: {
           
          
            
               
                return {
                    ...state,
                    orderList: JSON.parse(action.data) // сюда запихнуть из локал сторадж
                }
            
            
        }
        default:
            return state;
    }
}


export const setInfoToCartActionCreator = (pizzaInfo) => {
    return {
        type: 'PUSH_INFO_TO_CART',
        pizzaInfo
        /* props.info.pizzaSizes.map(item => {if(item.isActive == true){return item.size, item.price}}) */
    }
}
export const delPizzaActionCreator = (pizzaIndex) => {
    return {
        type: 'DEL_PIZZA',
        pizzaIndex
    }
}
export const updateDataActionCreator = (data) => {
    return {
        type: 'UPDATE_DATA_ORDER_PIZZA',
        data
    }
}

export default ShoppingCartReducer;
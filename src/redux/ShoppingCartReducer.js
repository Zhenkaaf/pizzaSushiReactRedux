import { cloneDeep } from 'lodash';
const PUSH_INFO_TO_CART = 'PUSH_INFO_TO_CART';



/* localStorage.setItem('myKey', localStorageArr); */
let initialState = {
    orderList: []

}

const ShoppingCartReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case PUSH_INFO_TO_CART: {
            let objInfo = {};
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

export default ShoppingCartReducer;
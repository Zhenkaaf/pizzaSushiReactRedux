
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import shopCart from './../../img/shopCart.png';
import style from './Header.module.css';

const Header = (props) => {
    /* if (props.headerPage.currentTime == null) {
       setInterval(props.getTimee, 60000);
    } */
    console.log(props);
    console.log(props.cartPage.orderList);

    /*  let localStorageArr = JSON.parse(returnedObj);
     
     let convertedToJson = JSON.stringify(localStorageArr);
     localStorage.setItem('myKey', convertedToJson);
     console.log(localStorageArr); */

    useEffect(() => {
        if (props.cartPage.orderList.length == 0) {
            let returnedObj = localStorage.getItem('myKey');
            let localStorageArr = JSON.parse(returnedObj);
            if (localStorageArr.length != 0) {
                alert('useEffect');
                props.updateDataOrderPizza(returnedObj);
            }
        }
    })


    return (
        <header>
            <p>
                <NavLink to='/'>pizza-sushi-app</NavLink>
            </p>
            <div>

                <div className={style.header}>
                    <NavLink to='/cart'>
                        <div dat='8' className={style.shopCartBlock}>
                            <img src={shopCart} alt="" />
                            <span className={style.spanData}>{props.cartPage.orderList.length}</span>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div>
                {/* {props.headerPage.currentTime} */}
            </div>

        </header>
    )
}
export default Header;
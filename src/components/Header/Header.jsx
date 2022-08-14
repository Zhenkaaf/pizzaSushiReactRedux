
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ModalCartIsEmpty } from "../Modal/Modal";
import shopCart from './../../img/shopCart.png';
import logo from './../../img/logo.svg';
import style from './Header.module.css';


const Header = (props) => {
    /* if (props.headerPage.currentTime == null) {
       setInterval(props.getTimee, 60000);
    } */


    /*  let localStorageArr = JSON.parse(returnedObj);
     
     let convertedToJson = JSON.stringify(localStorageArr);
     localStorage.setItem('myKey', convertedToJson);
     console.log(localStorageArr); */

    useEffect(() => {
        if (localStorage.getItem('myKey') == null) {
            return
        }
        if (props.cartPage.orderList.length == 0) {
            let returnedObj = localStorage.getItem('myKey');
            let localStorageArr = JSON.parse(returnedObj);
            if (localStorageArr.length != 0) {

                props.updateDataOrderPizza(returnedObj);
            }
        }
    })
    let isCartEmpty = props.cartPage.orderList.length;
    let cartLink = '/cart';
    if (isCartEmpty == false) {
        cartLink = '/';
    }

    const [openModal, setOpenModal] = useState(false);
    return (
        <header>
            <div className={style.headerBody}>
                <div className={style.flexBoxLeft}>
                </div>
                <div className={style.flexBoxCenter}>
                    <div className={style.menuLink}>
                        <NavLink to='/pizza'>Пицца</NavLink>
                    </div>
                    <div className={style.logoBlock}>
                        <NavLink to='/'><img className={style.logo} src={logo} alt="" /></NavLink>
                    </div>
                    <div className={`${style.menuLink} ${style.menuLinkSushi}`}>
                        <NavLink to='/sushi'>Суши</NavLink>
                    </div>
                </div>
                <div className={style.flexBoxRight}>
                    <div className={style.headerCart}>
                        <NavLink to={cartLink}>
                            <div className={style.shopCartBlock}>
                                <img src={shopCart} alt="" onClick={() => {
                                    if (isCartEmpty == false) {
                                        setOpenModal(true);
                                    }
                                }} />
                                <span className={style.spanData}>{props.cartPage.orderList.length}</span>
                            </div>
                        </NavLink>
                    </div>
                </div>

                {openModal && <ModalCartIsEmpty setOpenModal={setOpenModal}></ModalCartIsEmpty>}

                {/* <div>
                    {props.headerPage.currentTime}
                </div> */}
            </div>
        </header>
    )
}
export default Header;
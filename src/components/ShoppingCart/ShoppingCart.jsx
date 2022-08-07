import { useState } from 'react';
import style from './ShoppingCart.module.css';


const ShoppingCart = (props) => {
    console.log(props);
    let [totalSum, setTotalSum] = useState(0);
    let PizzzaList = props.cartPage.orderList.map((item, index) => {
        totalSum = totalSum + item.price;
        return <OrderItem key={index} index={index}
            name={item.name} size={item.size} price={item.price} count={item.count} del={props.delPizza}></OrderItem>;
    });
   


    return (
        <div className={style.cartPage}>
            {props.cartPage.orderList.length
                ? <div>
                    <div>
                        <h2>ВАШ ЗАКАЗ</h2>
                    </div>
                    <div className={style.cartBody}>
                        <div className={style.adress}>
                            Адрес доставки
                        </div>
                        <div className={style.dishes}>
                            <h4>Блюда в вашем заказе</h4>

                            <div>
                                <table cellSpacing='0'>
                                    <thead >
                                        <tr>
                                            <th align='left'>Блюдо</th>
                                            <th>Кол-во</th>
                                            <th>Сумма</th>
                                        </tr>
                                    </thead>
                                    <tbody className={style.greenLine}>
                                        {PizzzaList}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className={style.totalSum} align='right' colSpan='3'>{totalSum} грн</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
                : <div>your cart is empty</div>
            }

        </div>

    )
}

const OrderItem = (props) => {
    return (
        <tr className={style.orderItemTr} id={props.index}>
            <td align='left'>{props.name}, ø {props.size}</td>
            <td>{props.count}</td>
            <td>{props.price} грн</td>
            {/* <div>{props.index}</div> */}
            <td><button onClick={(e) => { props.del(e) }}>delete</button></td>
        </tr>
    )
}


export default ShoppingCart;
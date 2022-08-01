import style from './ShoppingCart.module.css';


const ShoppingCart = (props) => {
    console.log(props);
    let PizzzaList = props.cartPage.orderList.map((item, index) => {
        return <OrderItem key={index} index={index} 
        name={item.name} size={item.size} price={item.price} count={item.count} del={props.delPizza}></OrderItem>;
    });


    return (
        <div>
            <div>
                ВАШ ЗАКАЗ
            </div>
            <div className={style.body}>
                <div className={style.adress}>
                    Адрес доставки
                </div>
                <div className={style.dishes}>
                    Блюда в Вашем заказе
                    {PizzzaList}
                </div>
            </div>
        </div>

    )
}

const OrderItem = (props) => {
    return (
        <div id={props.index}>
            <div>{props.name}</div>
            <div>{props.size}</div>
            <div>{props.count}</div>
            <div>{props.price}</div>
            {/* <div>{props.index}</div> */}
            <div><button onClick={(e) => {props.del(e)}}>delete</button></div>
        </div>
    )
}


export default ShoppingCart;
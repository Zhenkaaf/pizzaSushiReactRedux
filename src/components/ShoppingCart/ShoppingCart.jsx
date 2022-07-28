import style from './ShoppingCart.module.css';


const ShoppingCart = (props) => {
    console.log(props);
    let PizzzaList = props.cartPage.orderList.map(item => {
        return <OrderItem name={item.name} size={item.size} price={item.price} count={item.count}></OrderItem>;
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
        <div>
            <div>{props.name}</div>
            <div>{props.size}</div>
            <div>{props.count}</div>
            <div>{props.price}</div>
            <div><button>delete</button></div>
        </div>
    )
}


export default ShoppingCart;
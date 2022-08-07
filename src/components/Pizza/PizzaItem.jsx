import style from './PizzaItem.module.css';



const PizzaItem = (props) => {



    return (
        <div className={style.item}>
            <div id={props.pizzaId} >
                <div className={style.ItemImg}>{<img src={`${props.imgUrl}`} ></img>}</div>
                <div className={style.itemName}>{props.name}</div>
                <div className={style.itemIngredients}>{props.ingredients}</div>
                <div className={style.sizesBody}>
                    {props.sizes.map(item => {
                        return <button className={item.isActive ? style.active : style.regular} key={item.id} id={item.id}
                            onClick={(event) => { props.changeDiametr(event) }}>ø {item.size}</button>
                    })}
                </div>
                <div className={style.bodyOrder}>
                    <div className={style.itemPrice}>{props.sizes.map(item => {
                        if (item.isActive == true) {
                            return item.price;
                        }
                    })} грн</div>
                    <div>
                        <button className={style.btnOrder} onClick={(e) => {
                            props.setOpenModal(true);
                            props.getPizzaInfo(e);
                        }}>заказать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}






export default PizzaItem;

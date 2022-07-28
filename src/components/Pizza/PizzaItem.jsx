import style from './PizzaItem.module.css';



const PizzaItem = (props) => {
  


    return (
        <div>
            <div id={props.pizzaId} className={style.item}>
                <div>название: {props.name}</div>
                <div>состав: {props.ingredients}</div>
                <div className={style.ItemImg}>картинка: {<img src={`${props.imgUrl}`} ></img>}</div>
                <div>
                    {props.sizes.map(item => {
                        return <button className={item.isActive ? style.active : style.regular} key={item.id} id={item.id}
                         onClick={(event) => { props.changeDiametr(event) }}>ø {item.size}</button>
                    })}
                </div>
                <div>цена: {props.sizes.map(item => {
                    if (item.isActive == true) {
                        return item.price;
                    }
                })}</div>
                <div>
                    <button onClick={(e) => {
                        props.setOpenModal(true);
                        props.getPizzaInfo(e);
                    }}>заказать</button>
                </div>
            </div>
        </div>
    )
}






export default PizzaItem;

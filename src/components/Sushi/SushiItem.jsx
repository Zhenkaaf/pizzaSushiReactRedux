import style from './SushiItem.module.css';


const SushiItem = (props) => {
    return (
        <div className={style.item}>
            <div>название: {props.name}</div>
            <div>цена: {props.price}</div>
            <div>описание: {props.description}</div>
            <div className={style.ItemImg}>картинка: {<img src={`${props.imgUrl}`} ></img>}</div>
        </div>
    )
}
export default SushiItem;
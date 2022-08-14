import { NavLink } from "react-router-dom";
import style from './Modal.module.css';

const Modal = (props) => {
    console.log(props.info);

    return (
        <div className={style.modalBackground}>
            <div className={style.modalBody}>
                <div className={style.modalContent}>
                    <button onClick={() => { props.setOpenModal(false) }}>close</button>
                    <div className={style.title}>  I am modal window</div>
                    <div className={style.body}>{props.info.name}</div>
                    <div>{props.info.pizzaSizes.map(item => { if (item.isActive == true) { return item.price } })} грн</div>
                    <div>
                        <NavLink to='/cart'><button onClick={() => { props.sentInfoToCart(props.info) }}>заказать сразу</button></NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}

export const ModalCartIsEmpty = (props) => {
    return (
        <div className={style.modalBackground}>
            <div className={style.modalBody}>
                <div className={style.modalContent}>
                    <button onClick={() => { props.setOpenModal(false) }}>close</button>
                    <div className={style.title}>Ваша корзина пуста</div>
                </div>

            </div>
        </div>
    )
}


export const ModalOrderList = (props) => {
console.log(props);
console.log(props.allData);
    let PizzzaList = props.info.map((item, index) => {
        return <OrderItem key={index} index={index}
            name={item.name} size={item.size} price={item.price} count={item.count} del={props.delPizza}></OrderItem>;
    });
        
    return (
        <div className={style.modalBackground}>
            <div className={style.modalBody}>
                <div className={style.modalContent}>
                    <button onClick={() => { props.setModalState(false) }}>close</button>
                    <div>{PizzzaList}</div>
                    <div>Общая сумма: {props.totalSum} грн</div>
                    <div>Улица: {props.allData.street}</div>
                    <div>Дом номер: {props.allData.house}</div>
                    <div>Подъезд: {props.allData.entrance}</div>
                    <div>Этаж: {props.allData.floor}</div>
                    <div>Квартира: {props.allData.flat}</div>
                    <div>E-mail: {props.allData.email}</div>
                    <div>Имя: {props.allData.name}</div>
                    <div>Фамилия: {props.allData.surname}</div>
                    <div>Номер телефона: {props.allData.number}</div>
                </div>
                
            </div>
        </div>
    )
}

const OrderItem = (props) => {
    return (
       
        <tr className={style.orderItemTr} id={props.index}>
            <td align='left'>{props.name}, ø {props.size}</td>
            <td>{props.count}</td>
            <td>{props.price} грн</td>
          
          
        </tr>
         
         
       
    )
}



export default Modal;


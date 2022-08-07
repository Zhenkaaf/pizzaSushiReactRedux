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


export default Modal;


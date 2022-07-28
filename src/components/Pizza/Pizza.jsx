import { useState } from 'react';
import style from './Pizza.module.css';
import PizzaItem from './PizzaItem';
import Modal from '../Modal/Modal.jsx';



const Pizza = (props) => {
  
    const [desiredPizza, setDesiredPizza] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const findPizzaNeed = (e) => {
        setDesiredPizza(e.target.value);
    }

    let filteredPizzas = props.pizzaPage.pizzasArr.filter(item => {
        return item.name.toLowerCase().includes(desiredPizza.toLowerCase());
    })



    let pizzas = filteredPizzas.map(item => {
        return <PizzaItem key={item.pizzaId} name={item.name} pizzaId={item.pizzaId} price={item.pizzaSizes} imgUrl={item.imageUrl}
            ingredients={item.ingredients} sizes={item.pizzaSizes} changeDiametr={props.changeDiametr} setOpenModal={setOpenModal} getPizzaInfo={props.getPizzaInfo}></PizzaItem>;
    })




    return (
        <div>
            <div className={style.grayBackground}>
                <h2>I am pizza's block</h2>
                <div>
                    <input onChange={findPizzaNeed} value={desiredPizza} placeholder={'Поиск'}></input>
                </div>
                <div className={style.pizzasBody}>
                    {pizzas}
                </div>
            </div>
            <div className={style.modal}>
                {openModal && <Modal setOpenModal={setOpenModal} info={props.pizzaPage.pizzaInfo[0]} sentInfoToCart={props.sentInfoToCart}/>}
            </div>
        </div>
    )
}





export default Pizza;
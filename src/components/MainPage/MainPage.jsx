import cn from "classnames";
import { NavLink } from "react-router-dom";
import style from './MainPage.module.css';



const MainPage = () => {
    return (
        <div className={style.mainBody}>
            <h1>Доставка пиццы, доставка суши Харьков</h1>

            <div className={cn(style.flex)}>
            <div><NavLink to='/pizza'><img src='https://kingpizza.kh.ua/resources/products/600_20220219154125_e348884.jpg'></img></NavLink></div>
                <div><NavLink to='/sushi'><img src='https://kingpizza.kh.ua/resources/products/600_20200127202657_4d60af4830d4a.jpg' ></img></NavLink></div>
                
            </div>
        </div>
    )
}
export default MainPage;
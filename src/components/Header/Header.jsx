
import { NavLink } from "react-router-dom";


const Header = (props) => {
 /* if (props.headerPage.currentTime == null) {
    setInterval(props.getTimee, 60000);
 } */
 
   

    return (
        <header>
            <p>
                <NavLink to='/'>pizza-sushi-app</NavLink>
            </p>
           
            <div>
                {props.headerPage.currentTime}
            </div>
          
        </header>
    )
}
export default Header;
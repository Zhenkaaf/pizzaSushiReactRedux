import style from './App.module.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import cn from 'classnames';
import MainPage from './components/MainPage/MainPage';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import PizzaContainer from './components/Pizza/PizzaContainer';
import SushiContainer from './components/Sushi/SushiContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import ShoppingCartContainer from './components/ShoppingCart/ShoppingCartContainer';


function App() {


  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={style.App}>
          <div className={style.container}>
            <HeaderContainer></HeaderContainer>
            <main className={style.main} >
              <div className={cn(style.border)}>
                <Routes>
                  <Route path='/' element={<MainPage />}></Route>
                  <Route path="/sushi" element={<SushiContainer />}></Route>
                  <Route path="/pizza" element={<PizzaContainer />}></Route>
                  <Route path="/cart" element={<ShoppingCartContainer />}></Route>
                </Routes>
              </div>
            </main>
            <footer className={style.border}>
              footer
              npm i react-router-dom -save
            </footer>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

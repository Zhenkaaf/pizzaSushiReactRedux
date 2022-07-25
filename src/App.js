import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import cn from 'classnames';
import MainPage from './components/MainPage/MainPage';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import PizzaContainer from './components/Pizza/PizzaContainer';
import SushiContainer from './components/Sushi/SushiContainer';
import HeaderContainer from './components/Header/HeaderContainer';



function App() {


  return (
    <BrowserRouter>
   <Provider store={store}>
      <div className="App">
        <div className='container'>
        <HeaderContainer></HeaderContainer>
        
        <main >
          <h1>what do you want? pizza or sushi?</h1>
          <div className={cn('border', 'flex')}>
            <Routes>
              <Route path='/' element={<MainPage />}></Route>
              <Route path="/sushi" element={<SushiContainer />} />
              <Route path="/pizza" element={<PizzaContainer />} />
            </Routes>
          </div>
        </main>
        <footer className='border'>
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

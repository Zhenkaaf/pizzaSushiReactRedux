import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import cn from 'classnames';
import Sushi from './components/Sushi/Sushi';
import Pizza from './components/Pizza/Pizza';
import MainPage from './components/MainPage/MainPage';
import { Navigate } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className='border'>

          <p>
          <NavLink to='/'>pizza-sushi-app</NavLink>
          </p>


        </header>
        <main >
          <h1>what do you want? pizza or sushi?</h1>
          <div className={cn('border', 'flex')}>
            

            <Routes>
           {/*  <Route exact path="/" element={<Navigate to={'/'} />} /> */}
              <Route path='/' element={<MainPage/>}></Route>
              <Route path="/sushi" element={<Sushi />} />
              <Route path="/pizza" element={<Pizza />} />
            </Routes>
          </div>
        </main>
        <footer className='border'>
          footer
          npm i react-router-dom -save
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

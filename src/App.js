import './App.css';
import ShopCard from './Components/Cart/CartMain';
import CardsMain from './Components/Catalog/CardsMain';
import Like from './Components/Like/Like';
import Main from './Components/main/main';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { getcartTotalQuantity } from './Redux/cartSlice';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector((state) => state.cart);
  const cartTotalQuantity=useSelector(getcartTotalQuantity)
  return (
<div>
  <Router>
    <nav  >
      <Link className='link' to='/'>Главная</Link>
      <Link className='link' to='/catalog'>Каталог</Link>
      <Link className='link' to='/shop'>Корзина <i className="fa-solid fa-cart-shopping "></i> <span className='usePromo'>{cart.cartTotalQuantity}</span></Link>
      <Link className='link' to='/like'>отложенные <i className="fa-solid fa-heart"></i></Link>
    </nav>

    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/catalog' element={<CardsMain/>}/>
      <Route path='/shop' element={<ShopCard/>}/>
      <Route path='/like' element={<Like/>}/>
    </Routes>
  </Router>
</div>
)}

export default App;


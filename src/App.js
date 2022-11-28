import './App.css';
import ShopCard from './Components/Cart/CartMain';
import CardsMain from './Components/Catalog/CardsMain';
import Like from './Components/Like/Like';
import Main from './Components/main/main';
import { gsap } from "gsap";
import { useEffect } from 'react';
import { useRef } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useSelector } from 'react-redux';
import Login from './backEnd/logIn';
import LoginOut from './backEnd/logOut';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const cart = useSelector((state) => state.cart);
  
  const app = useRef();
    useEffect(() => {
    let ctx = gsap.context(() => {
        gsap.from(".fa-heart", { y:-15, ease: 'bounce', duration:1, scale:0.5 });
    }, app);
    return () => ctx.revert();
    },[cart.likeArray]);

  

  const {isLoading}=useAuth0()
  if (isLoading) return <h1>Пожалуйста, подождите...</h1>
  return (
<div>
  <Router>
    
    <nav  >
      <Link className='link' to='/'>Главная</Link>
      <Link className='link' to='/catalog'>Каталог</Link>
      <Link className='link' to='/shop'>Корзина <i className="fa-solid fa-cart-shopping "></i> <span className='usePromo'>{cart.cartTotalQuantity}</span></Link>
      <Link ref={app} className='link' to='/like'>отложенные <i className="fa-solid fa-heart"></i></Link>
      <Login/>
      <LoginOut/>
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


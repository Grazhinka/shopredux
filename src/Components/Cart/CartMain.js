import { useSelector } from "react-redux"
import { getCartArray, getTotals} from "../../Redux/cartSlice"
import CartItem from "./CartItem"
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { useState } from "react";

const CartMain = ()=>{
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const cartArray = useSelector(getCartArray);

    const [value, setValue] = useState();
    const [sale,setSale]=useState(0)
    
    function changeValue(e) {
        setValue(e.target.value.toUpperCase()); 
        console.log(value)
    }

    const addPromo=()=>{
        if (value==='SALE'){
            setSale(20)
        }
        else{alert('Такого промокода не существует')}
    }
    
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    return(
        <div className="marginTop">
            <h1>Корзина:</h1>  
            {cart.cartArray.length === 0 ? (
            <div >
                <p>Здесь пусто!</p>
            </div>
            ) : (<div>
            <div className="sub">
                <h4 className="sub-hh">Количество товаров: <span className="bolderColor">{cart.cartTotalQuantity}</span></h4>
                <h4 className="sub-h">Общая сумма:  <span className="bolder">$ {cart.cartTotalAmount}</span></h4>
                <input className="inputPromo" placeholder="Введите промо-код..." value={value} onChange={changeValue} />
                <button className="usePromo" onClick={addPromo}>Добавить</button>
                <h3>Общая сумма с учётом скидки: <span className="bolderColor">$ {cart.cartTotalAmount-cart.cartTotalAmount*(sale/100)}</span></h3>
            </div>
            <div >
                {cartArray.map((cartItem,index) => <CartItem  key={cartItem.id} cartItem={cartItem} index={index} />)}
            </div>
            </div>
            )}
        </div>)
}

export default CartMain




import { useDispatch, useSelector } from "react-redux"
import { data } from "../../data"
import { removeItemFromCart,increaseCart,decreaseCart} from "../../Redux/cartSlice"
import { addItemToLike2 } from "../../Redux/cartSlice"
import { getCartArray } from "../../Redux/cartSlice"


const CartCard = ({cartItem,index})=>{
    const cartArray=useSelector(getCartArray)
    const dispatch=useDispatch()
    const dataCard = data.find(item=>item.id === cartItem.productId)
    console.log(cartItem)


    return(
        <div className="korzinaDiv">
            <div className="baby">
                <p>{dataCard.name}</p>
                <p>size: <span className="span">{cartItem.size}</span></p>
            </div>
            <div >
               <img  alt='img' src={dataCard.image[0]} width='50px'/>
            </div>
            <div className="centerDiv baby">
                <button className="addPromoBtn"  onClick = {() => {dispatch(increaseCart({cartItemID: cartItem.id}))}}>+</button>
                <h2>{cartItem.quantity}</h2>
                <button className="addPromoBtn" onClick = {() => {dispatch(decreaseCart({cartItemID: cartItem.id}))}}>-</button>
            </div>
            <div className="baby">
                <p>Цена: <span className="span">${dataCard.price}</span></p> 
                <p>Сумма по товару: <span className="span">${dataCard.price*cartItem.quantity}</span></p> 
            </div>
            
            <div className="baby  ">
               <div className="container ">   
                   <span className="shopAllBtn" onClick={()=>dispatch(addItemToLike2({cartItem,index}))}> <i className="fa-solid fa-heart"></i> </span>  
                   <span className="shopAllBtn" onClick={()=>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}><i className="fa-solid fa-trash-can"></i></span>
               </div>
               <p>Остаток на складе: <span className="span">{cartItem.kolvo}</span></p>
            </div>
   
        </div>
    )
}

export default CartCard
import { useDispatch } from "react-redux"
import { data } from "../../data"
import { getLikeArray} from "../../Redux/cartSlice";
import { useSelector } from "react-redux";
import { removeItemFromLike } from "../../Redux/cartSlice";
import { addItemToCart2 } from "../../Redux/cartSlice";


function Like(){
    const likeArray = useSelector(getLikeArray);
    const dispatch=useDispatch()


    return(  
        <div className="marginTop">
            <h1>Отложенные товары:</h1>
            {likeArray.length===0?(
                <div>
                   <p>Здесь пусто!</p>
                </div>
            ):(<div >
                {likeArray.map((cartItem,index)=>{
                const dataCard = data.find(item=>item.id === cartItem.productId)
                return(
                <div className="korzinaDiv" key={index}>
                    <p className="baby">{dataCard.name}</p>
                    <div className="baby">
                       <img className="smallImg"  alt='img'  src={dataCard.image[0]}/>
                    </div>
                    <p className="baby span">{cartItem.size}</p>
                    <p className="baby">Цена : <span className="bolder">${cartItem.price}</span></p>
                    <button className="shopSmallBtn baby" onClick={()=>dispatch(addItemToCart2({cartItem,index}))} ><i className="fa-solid fa-cart-plus"></i></button>
                    <span className="shopSmallBtn baby" onClick={()=>dispatch(removeItemFromLike({cartItem,index,cartItemID: cartItem.id}))}><i className="fa-solid fa-trash-can"></i></span>
                </div>
                )
                })}
            </div>)}
        </div>
    )
}

export default Like



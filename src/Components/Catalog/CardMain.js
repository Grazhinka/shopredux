import { useState } from 'react';
import CardSlide from './CardSlide';
import { addItemToCart } from '../../Redux/cartSlice';
import { useDispatch } from "react-redux"
import { addItemToLike } from '../../Redux/cartSlice';



function CardMain({product}){
    const {id,name,description,price,showMore,size}=product
    const dispatch=useDispatch()

    const [showText,setShowText]=useState(false)

    const showTextClick=(product)=>{
        product.showMore=!product.showMore
       setShowText(!showText)
    }

    const [value, setValue] = useState(0);
    function changeValue(e) {
       setValue(e.target.value); 
    }
 
    return(
        <div className='container'> 
            <div className='card' key={id}>
                <h2>{name}</h2>
                <CardSlide key={id} numberProduct={id}/>
                <p>{showMore? description : description.substring(0,20)+'...'}</p>
                <button className='descriptionBtn'  onClick={()=>showTextClick(product)}>{showMore? 'свернуть описание':'развернуть описание'}</button>
                <h2 className='bolder'>$ {price}</h2>
                <div className='centerDiv sizeBtnDiv'>   
                   {size.map((sizeItem,index)=>{
                        return(
                            <div className='divSize'  key={index}>
                                <label className="radio" ><input id={id} className='form_radio' type="radio" name={id} value={sizeItem.numb}  onChange={changeValue} /><div className="radio__text">{sizeItem.size}</div></label> 
                            </div>
                        )
                    })}
                </div> 
                <div>
                   <button className='shopSmallBtn'  onClick={()=>dispatch(addItemToLike({product,value}))}><i className="fa-solid fa-heart"></i></button>  
                   <button className='usePromo' onClick={()=>dispatch(addItemToCart({product,value}))} >В корзину<i className="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>
        </div>
    );
}
export default CardMain
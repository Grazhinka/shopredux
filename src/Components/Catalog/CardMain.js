import { useState } from 'react';
import CardSlide from './CardSlide';
import { addItemToCart,addSize,getArr } from '../../Redux/cartSlice';
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux';
import { addItemToLike } from '../../Redux/cartSlice';
import { getSelectedSize } from '../../Redux/filtSlise';
import { filterSize } from '../../Redux/filtSlise';



function CardMain({product}){
    const {id,name,description,price,showMore,size}=product
    const dispatch=useDispatch()
    const selectedSize=useSelector(getSelectedSize)
    const [showText,setShowText]=useState(false)

    const showTextClick=(product)=>{
        product.showMore=!product.showMore
       setShowText(!showText)
    }

    const [value, setValue] = useState(1);
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
                <h2 className='span2'>$ {price}</h2>
                <button className='shopAllBtn'  onClick={()=>dispatch(addItemToLike({product,value}))}><i className="fa-solid fa-heart"></i></button>  
                
                <div className='centerDiv sizeBtnDiv'>
                    
                   {size.map((sizeItem,index)=>{
                        return(
                            <div  key={index}>
                                <label   className={selectedSize === sizeItem.numb ? 'sizeButtonSelected' : 'sizeButton'}   onClick={()=>{dispatch(filterSize(sizeItem.numb))}} ><input className='form_radio'    type="radio" name="radio" value={sizeItem.numb}  onChange={changeValue} />{sizeItem.size}-{sizeItem.kolvo}</label> 
                            </div>
                        )
                    })}
                </div> 
                
                <button onClick={()=>dispatch(addItemToCart({product,value}))} className='shopAddBtnMain'><i className="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>
    );
}
export default CardMain



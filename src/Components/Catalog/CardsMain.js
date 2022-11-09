import React, { useEffect, useState } from 'react';
import CardMain from "./CardMain";
import { useSelector } from "react-redux"
import { data } from '../../data';
import { getSelectedCategory } from '../../Redux/catalogSlice';
import Filter from '../Filter/Filter';


function CardsMain(){
    const selectedCategory=useSelector(getSelectedCategory)

    const filtrArray=data.filter(product=>{
        if(selectedCategory==='ВСЁ')return true;
        return selectedCategory === product.category;
    })
    const newFiltrArray=[...filtrArray]
  
    const [showFiltrArray,setShowFiltrArray] = useState(filtrArray)
    
    useEffect(() => {    
        setShowFiltrArray(filtrArray)
      },
      [selectedCategory])

    const down=()=>{
        setShowFiltrArray(newFiltrArray.sort((a, b) => b.price - a.price))
       }
    
    const up=()=>{
        setShowFiltrArray(newFiltrArray.sort((a, b) => a.price - b.price))
    }

    const list=()=>{
        setShowFiltrArray(newFiltrArray.sort((a, b) => a.id - b.id))
    }
    
    return(   
        <div className='marginTop'  >
            <Filter/> 
            <div className='centerDiv' >
                <button className='sortBtn' onClick={list}><i className="fa-solid fa-list"></i></button>
                <button className='sortBtn' onClick={up}>Цена <i className="fa-solid fa-up-long"></i></button>
                <button className='sortBtn' onClick={down}>Цена <i className="fa-solid fa-down-long"></i></button>    
            </div>
            <div className='container'>
                {showFiltrArray.map(product=><CardMain key={product.id} product={product}/> )}
            </div>
        </div>
    )
}

export default CardsMain

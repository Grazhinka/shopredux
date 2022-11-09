import { useDispatch } from "react-redux";
import { filterCategory } from "../../Redux/catalogSlice";
import { data } from "../../data";
import { Link } from "react-router-dom";
import React from "react";
import { gsap } from "gsap";
const { useEffect, useRef } = React;


function Main() {
    const dispatch=useDispatch();

    const app = useRef();
    useEffect(() => {
    let ctx = gsap.context(() => {
        gsap.to(".go", { scale:1.2, delay:4,ease: 'bounce'});
        gsap.from(".gift", { y:-1000, ease: 'bounce', duration:5 });
        gsap.from(".nameLink ", { x:-500, duration:1, stagger:.7 , opacity:0});
    }, app);
    return () => ctx.revert();
    });

    return (
    <div className='centerDivColumn marginTop' ref={app}>
        <h1>Магазин одежды "Т&K"</h1>
        <div className="go" >
           <Link onClick={()=>{dispatch(filterCategory('ВСЁ'))}} className="usePromo"  to="/catalog" > К покупкам! </Link>
        </div> 
        <div className="centerDiv">
            <Link onClick={()=>{dispatch(filterCategory('костюмы'))}}   to="/catalog" className="LinkName"><img alt='img' className="mainImg"  src={data[5].image}/> <p className="nameLink">Костюмы</p> </Link>
            <Link onClick={()=>{dispatch(filterCategory('верхняя одежда'))}}  to="/catalog" className="LinkName"><img alt='img' className="mainImg"   src={data[2].image}/> <p className="nameLink">верхняя одежда</p> </Link>
            <Link onClick={()=>{dispatch(filterCategory('платья'))}}  to="/catalog" className="LinkName"><img alt='img' width='200px' className="mainImg" src={data[3].image}/> <p className="nameLink">Платья</p> </Link>
        </div>       
        <img onClick={()=>{alert('Ваш промокод на скидку: SALE')}} className='centerDiv gift' alt='gift'  src='https://shop-clothes-shop.netlify.app/static/media/gift.37a05416dede1fbd9561.png'/>
    </div>
    );
}

export default Main;
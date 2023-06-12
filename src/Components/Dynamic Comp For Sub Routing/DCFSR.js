import style from '../Dynamic Comp For Sub Routing/DCFSR.module.css';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { INCREAMENT , CART } from "../../Store/actions";
import {useNavigate} from "react-router-dom";


export default function DCFSR(props){
    const [t,i18n] = useTranslation();
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/Products')
        .then(res=>setProducts(res.data));
    },[])
    
    function onLikeBtnClick(index) {
        products[index].love = !products[index].love;
    
    
        let icon = document.getElementById(index);
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");
    }
    products.forEach((el) => (el.love = false));
    
    const dispatch = useDispatch();
    const handleIncrement = (prod,e)=>{
        e.preventDefault();
        e.stopPropagation();
        dispatch({
            type:INCREAMENT, CART 
        }) ;
        CART.push(prod)
        console.log(CART);
    }

    const nav = useNavigate();
    const gotoProdDetails = (id,e)=>{
        nav("/fruits&vegetables/fresh-vegetables/"+id);
        e.preventDefault();
        e.stopPropagation();
    }

    return(
        <>
            <div>
                <h3>{props.title}</h3>
                <div className="row">
                    {products.map((prod,index)=>(
                        prod.kind===props.kind &&  
                        <div className="col-sm-6 col-md-4 col-lg-3" onClick={(event)=>gotoProdDetails(prod.id,event)}>
                            <div className={style.cardstyle}>
                                        <div className={style.loveIcon}>
                                            <span>
                                                <i
                                                id={prod.id}
                                                className="fa-regular fa-heart"
                                                onClick={()=>onLikeBtnClick(prod.id)}
                                                ></i>
                                            </span>
                                        </div>
                                        <div className="text-center">
                                            <img src={prod.img} width="160px" height="160px" />
                                        </div>
                                        {i18n.language==="ar"?<p>{prod.name_ar}</p>:<p>{prod.name_en}</p>}
                                        {i18n.language==="ar"?<p className={style.price}>{prod.price} جنية / <span>{prod.size_ar}</span></p>:
                                        <p className={style.price}>{prod.pice} EGP <span>{prod.size_en}</span></p>}
                                        <button onClick={(event)=>handleIncrement(prod,event)} className={style.button+" btn"}>{t("addToCart")}</button>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
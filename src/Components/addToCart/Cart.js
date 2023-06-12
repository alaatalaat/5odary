import { useDispatch } from "react-redux";
import { CART } from "../../Store/actions";
import { useTranslation } from "react-i18next";
import cartStyle from "./addTOCart.module.css";
import { useState } from "react";

export default function Cart(){

    const [t,i18n] = useTranslation();
    const dispatch = useDispatch();
    const cartProducts = ()=>{
        dispatch({
        type:CART,
        }) ;
    }
    var total = 0 ;
    CART.forEach((prod)=>{
        total = total + prod.price;
        return total;
    });
    console.log(total)

    const [newArr,setNewArr] = useState([])
    const deleteProd = (index)=>{
        setNewArr(CART.splice(index,1)) ;
        dispatch({
            type : "DECREAMENT"
        })
        
    }
   

    return(
        <>
            
            <div className="container-fluid">
                <h6 className="text-danger">{t("orderOver")}</h6>
                {CART.map((item,index)=>(
                <div className={cartStyle.row+" row m-1 rounded"}>
                    <div className="col-3 px-0">
                        <img src={item.img} width="80px" height="80px"/>
                    </div>
                    <div className="col-6 px-0">
                        {i18n.language==="ar"? <p className={cartStyle.prodName+" py-1"}>{item.name_ar}</p>:<p className={cartStyle.prodName+" py-1"}>{item.name_en}</p>}
                        <span className={cartStyle.price}>{item.price} L.E</span>
                    </div>
                    <div className="col-3" style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                        <i class="fa-solid fa-trash text-danger" onClick={()=>deleteProd(index)}></i>
                    </div>
                </div>
            ))}
            </div>
            <div className={cartStyle.totalPrice}>
                <span>{t("totalPrice")} : </span>
                <span>{total} L.E</span>
            </div>
        </>
    );
}


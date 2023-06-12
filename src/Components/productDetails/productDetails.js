import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams,Link} from 'react-router-dom';
import prodDetails from "../productDetails/productDetails.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { INCREAMENT ,  CART } from "../../Store/actions";

export default function ProductDetails(){
    const [t,i18n] = useTranslation();
    const params = useParams();
    const [prodInfo,setProdInfo] = useState([]);

    useEffect(()=>{ //FruitsAndVegetables
        axios.get('http://localhost:8080/Products/'+params.id)
        .then((res)=>setProdInfo(res.data));
    },[]);

    console.log('PP : ',params);

    function onLikeBtnClick(index) {
        prodInfo.love = !prodInfo.love;
        let icon = document.getElementById(index);
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");
    }
    prodInfo.love = false;

    const dispatch = useDispatch();
    const handleIncrement = (prod)=>{
        dispatch({
        type:INCREAMENT, CART 
        }) ;
        CART.push(prod)
        console.log(CART)
    }


    return(
        <>
            <div className='container-fluid'>
                <div className='row mx-4'>
                    <div className={prodDetails.divContainImg +' col-md-5'}>
                        <img className={prodDetails.img} src={prodInfo.img} width="250px" height="250px" />
                    </div>
                    <div className={prodDetails.divPosition +' col-md-7 pt-md-4'} >
                       <div className={prodDetails.Icon}>
                            <span>
                                <i
                                id={prodInfo.id}
                                className="fa-regular fa-heart"
                                onClick={()=>onLikeBtnClick(prodInfo.id)}
                                ></i>
                            </span>
                            <span>
                                <Link to={"/edit/"+params.id} ><i class="fa-solid fa-pen-to-square"></i></Link>
                            </span>
                         </div>
                         <div>
                            <b>{i18n.language==="ar"? prodInfo.name_ar :prodInfo.name_en} ({i18n.language==='ar'? prodInfo.size_ar :prodInfo.size_en})</b>
                        </div>
                        <span className={prodDetails.price}>{prodInfo.price} {i18n.language==='ar'?'جنية':'EGP'}</span>
                        {i18n.language==='ar' ?
                            <p> نوفر لك تجربة تسوق ممتعة لأجود أنواع الخضار بأعلى قيمة غذائية وجودة مع تنفيذ كل طلبات العميل من حيث الكمية والحجم والشكل المطلوب</p> : 
                            <p>We provide you with an enjoyable shopping experience for the finest types of vegetables with the highest nutritional value and quality, while fulfilling customer requests in terms of quantity, size and required shape</p>
                        }
                        <button onClick={()=>handleIncrement(prodInfo)} className={prodDetails.button+" btn"}>{t("addToCart")}</button>
                    </div>
                </div>
            </div>
        </>
    );
}


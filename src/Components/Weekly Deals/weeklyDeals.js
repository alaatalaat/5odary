import offers from "../../assets/offers.jpg";
import { Link ,useNavigate } from "react-router-dom"; 
import vegetables from "../../assets/vegetables.png";
import kitchen from "../../assets/kitchen.png";
import grocery from "../../assets/grocery.png";
import detergents from "../../assets/detergents.png";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { INCREAMENT , CART } from "../../Store/actions";
import '../Weekly Deals/weeklyDeals.css';


export default function WeeklyDeals(){
    const [t, i18n] = useTranslation();
    const [wDeals,setWDeals] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/Products")
        .then((res)=>res.json())
        .then((data)=>setWDeals(data));
        
    },[]);

    function onLikeBtnClick(index) {
        wDeals[index].love = !wDeals[index].love;
    
    
        let icon = document.getElementById(index+wDeals.kind);
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");
      }
      wDeals.forEach((el) => (el.love = false));
    
      
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
        nav("/weekly-deals/"+id);
        e.preventDefault();
        e.stopPropagation();
    }

    return(
        <>
        <div className="container-fluid px-5 py-4">
            <img src={offers} width="100%" />
            <h3 className="mt-5">{t("exploreByCat")}</h3>
            <div className="row mx-0 pt-2" id="popularCat">
                <div className="col-md my-2 my-md-0">
                    <Link to="../fruits&vegetables">
                    <div className="py-2 rounded">
                        <img src={vegetables} width="70px" />
                        <p className="mt-3">{t("Fr&Ve")}</p>
                    </div>
                    </Link>
                </div>
                <div className="col-md my-2 my-md-0">
                    <Link to="../khodarChicken">
                    <div className="py-2 rounded">
                        <img src={kitchen} width="70px" />
                        <p className="mt-3">{t("khodarCh")}</p>
                    </div>
                    </Link>
                </div>
                <div className="col-md my-2 my-md-0">
                    <Link to="../grocery">
                    <div className="py-2 rounded">
                        <img src={grocery} width="70px" />
                        <p className="mt-3">{t("grocery")}</p>
                    </div>
                    </Link>
                </div>
                <div className="col-md my-2 my-md-0">
                    <Link to="../detergents">
                    <div className="py-2 rounded">
                        <img src={detergents} width="70px" />
                        <p className="mt-3">{t("detergents")}</p>
                    </div>
                    </Link>
                </div>
            </div>

            <div>
                <div className="mt-5" style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>{t("weeklyDeals")}</h3>
                </div>
                <div className="row mx-0 pt-2" id="weeklyDeals">
                {wDeals.map(
                    (prod, index) => (
                        prod.kind === "weekly-deals" &&
                        <div className="col-md-3 my-2" onClick={(event)=>gotoProdDetails(prod.id,event)}>
                        <div className="py-3">
                            <div>
                                <span>
                                    <i
                                    id={index+wDeals.kind}
                                    className="fa-regular fa-heart"
                                    onClick={() => onLikeBtnClick(index)}
                                    ></i>
                                </span>
                            </div>
                            
                            <div>
                                <img src={prod.img} width="116px" height="116" />
                            </div>
                            {i18n.language === "ar" ? (
                            <p className="mt-3">{prod.name_ar}</p>
                            ) : (
                            <p className="mt-3">{prod.name_en}</p>
                            )}
                            
                            <span>
                            {prod.price} /{" "}
                            {i18n.language === "ar" ? prod.size_ar : prod.size_en}
                            </span>
                            <button onClick={(event)=>handleIncrement(prod,event)} className="d-block rounded w-100 mt-5">
                            {t("addToCart")}
                            </button>
                        </div>
                        </div> 
                    )
                )}
                </div>
            </div>
        </div>
        </>
    )
}
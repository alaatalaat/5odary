import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import salads from "../../assets/khodar kitchen/6.png";
import  readyVe from "../../assets/readyVe.png";
import  khodarT from "../../assets/khodarT.png";
import { useEffect, useState } from "react";
import axios from "axios";




export default function KhodarKicken(){
    const [t,i18n] = useTranslation();
    const [KhodarProd,setKhodarProd] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/Products')
        .then((res)=>{
            setKhodarProd(res.data);
        });
    },[]);

    const saladCount =  KhodarProd.filter(n => n["kind"]==="salad").length ;
    const readyVeCount =  KhodarProd.filter(n=>n["kind"]==="readyVe").length ;
    const khodarTableCount =  KhodarProd.filter(n=>n["kind"]==="khodarT").length ;
    

    return(
        <>
            <div className="container-fluid">
                <div className="row mx-4 my-4">
                    <div className="col-md-3">
                        <h4>{t("groceryCategories")}</h4>
                        <ul>
                            <li>
                                <Link to="/khodarKitchen/salads"><img src={salads} width="25px" height="25px" /> {t("salads")}</Link>
                                <span>({saladCount})</span>
                            </li>
                            <li>
                                <Link to="/khodarKitchen/readyVegetables"><img src={readyVe} width="25px" height="25px" /> {t("readyVe")}</Link>
                                <span>({readyVeCount})</span>
                            </li>
                            <li>
                                <Link to="/khodarKitchen/khodarTable"><img src={khodarT} width="25px" height="25px" /> {t("khodarT")}</Link>
                                <span>({khodarTableCount})</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
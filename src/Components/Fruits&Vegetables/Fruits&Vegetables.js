import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import freshV from "../../assets/fresV.png";
import freshF from "../../assets/freshF.png";
import freshL from "../../assets/freshL.png";
import fruitsAndVe from "./fruitsAndVe.module.css";
import  "./fruitsAndVe.module.css";
import { useEffect, useState } from "react";
import axios from "axios";


export default function FruitsAndVegetables(){
    const [t,i18n] = useTranslation();
    const [greoceryProd,setGreoceryProd] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/Products')
        .then((res)=>{
            setGreoceryProd(res.data);
        });
    },[]);

    const freshVeCount =  greoceryProd.filter(n => n["kind"]==="freshVe").length ;
    const freshFrCount =  greoceryProd.filter(n=>n["kind"]==="freshFr").length ;
    const freshLeCount =  greoceryProd.filter(n=>n["kind"]==="freshLeaves").length ;
    

    return(
        <>
            <div className="container-fluid">
                <div className="row mx-4 my-4">
                    <div className="col-md-3">
                        <h4>{t("groceryCategories")}</h4>
                        <ul>
                            <li>
                                <Link to="/fruits&vegetables/fresh-vegetables"><img src={freshV} width="25px" height="25px" /> {t("freshVe")}</Link>
                                <span>({freshVeCount})</span>
                            </li>
                            <li>
                                <Link to="/fruits&vegetables/fresh-fruits"><img src={freshF} width="25px" height="25px" /> {t("freshFr")}</Link>
                                <span>({freshFrCount})</span>
                            </li>
                            <li>
                                <Link to="/fruits&vegetables/fresh-herbs&leaves"><img src={freshL} width="25px" height="25px" /> {t("fresh&leaves")}</Link>
                                <span>({freshLeCount})</span>
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
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

import bevarage from "../../assets/grocery/g1.png";
import  grains from "../../assets/grocery/g2.png";
import spices from "../../assets/grocery/g3.png";
import  honey from "../../assets/grocery/g4.png";

import { useEffect, useState } from "react";
import axios from "axios";




export default function Grocery(){
    const [t,i18n] = useTranslation();
    const [GroceryProd,setGroceryProd] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/Products')
        .then((res)=>{
            setGroceryProd(res.data);
        });
    },[]);

    const bevarageCount =  GroceryProd.filter(n => n["kind"]==="bevarage").length ;
    const grainsCount =  GroceryProd.filter(n=>n["kind"]==="grains").length ;
    const spicesCount =  GroceryProd.filter(n=>n["kind"]==="spices").length ;
    const honeyCount = GroceryProd.filter(n=>n["kind"]==="honey").length ;
    

    return(
        <>
            <div className="container-fluid">
                <div className="row mx-4 my-4">
                    <div className="col-md-3">
                        <h4>{t("groceryCategories")}</h4>
                        <ul>
                            <li>
                                <Link to="/grocery/bevarage"><img src={bevarage} width="25px" height="25px" /> {t("bevarage")}</Link>
                                <span>({bevarageCount})</span>
                            </li>
                            <li>
                                <Link to="/grocery/grains&legumes"><img src={grains} width="25px" height="25px" /> {t("grains&legumes")}</Link>
                                <span>({grainsCount})</span>
                            </li>
                            <li>
                                <Link to="/grocery/spices&mixes"><img src={spices} width="25px" height="25px" /> {t("spices&mixes")}</Link>
                                <span>({spicesCount})</span>
                            </li>
                            <li>
                                <Link to="/grocery/honey&jams"><img src={honey} width="25px" height="25px" /> {t("honey&jams")}</Link>
                                <span>({honeyCount})</span>
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
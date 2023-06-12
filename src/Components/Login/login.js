import { useTranslation } from "react-i18next";
import loginStyle from "./login.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Login(){
    const [t,i18n] = useTranslation();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
   const [flag,setFlag] = useState();

    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/register').then((res)=>{
            setUsers(res.data);
        }).catch();
    },[]);
    
    function loginData(e){
        e.preventDefault();
        users.forEach((el)=>{
            if((el.email===email || el.phone===email) && el.password===password ){
                window.location.pathname="/";   
                setFlag(false)  
            }else{
                setFlag(true)
            }
        });
    };


    return(
        <>
            <div className="container">
                <div className="row">
                    <div className={loginStyle.divsInRow+" col-sm-12 col-md-7"}>
                        <form onSubmit={loginData} className={loginStyle.form}>
                            <h4><b>{t("signin")}</b></h4>
                            <div className="mt-4">
                                <label className="my-1">{t("phoneNumOrEmail")}</label>
                                <input type="text"  className={loginStyle.input+" form-control"} onChange={(e)=>{setEmail(e.target.value);}} />
                            </div>
                            <div>
                                <label className="my-1">{t("password")}</label>
                                <input type="text"  className="form-control" onChange={(e)=>{setPassword(e.target.value)}} />
                            </div>
                            <input type="submit" className={loginStyle.submit + " form-control my-3"} value={t("signin")}/>
                            {flag&&<span className="text-danger">{t("checkData")}</span>}
                        </form>
                    </div>
                    <div className={loginStyle.divsInRow+" col-sm-12 col-md-5"}>
                        <div className={loginStyle.cardContainer +" card px-4 py-4"}>
                            <h4>{t("newClient")}</h4>
                            <span className={loginStyle.spanInCard}>{t("subscribeToBeAble")}</span>
                            <ul>
                                <li>{t("addToWishlist")}</li>
                                <li>{t("addShipping")}</li>
                                <li>{t("trackOrder")}</li>
                                <li>{t("takeAdvantage")}</li>
                            </ul>
                            <button className={loginStyle.signupInCard+" btn my-3"}>
                                <Link to="/register">{t("signup")}</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
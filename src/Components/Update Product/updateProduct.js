import { useTranslation } from "react-i18next";
import style from "../Update Product/updateProduct.module.css";
import { useParams } from "react-router-dom";
import { useState  ,useEffect } from "react";
import axios from "axios" ;

export default function UpdateProduct(props){
    const param = useParams();
    
    const [prod,setProd] = useState({
        id: 0 ,
        img: " ",
        name_ar: " ",
        name_en: " ",
        price: 0 ,
        size_ar: " ",
        size_en: " ",
        kind: " "
    });

    useEffect(()=>{
        axios.get('http://localhost:8080/Products/'+param.id)
        .then((res)=>setProd({
            id : res.data.id ,
            img : res.data.img ,
            name_ar : res.data.name_ar ,
            name_en : res.data.name_en ,
            price:  parseInt(res.data.price) ,
            size_ar:  res.data.size_ar ,
            size_en: res.data.size_en,
            kind:res.data.kind 
        }));
    },[]); 

    function updateData(){
        axios.put('http://localhost:8080/Products/'+param.id,{
                id: prod.id ,
                img: prod.img,
                name_ar: prod.name_ar,
                name_en: prod.name_en,
                price: parseInt(prod.price) ,
                size_ar: prod.size_ar,
                size_en: prod.size_en,
                kind: prod.kind
        }).then(
           setProd({...prod,price:0})
        )
    }

    

    const [t, i18n] = useTranslation();
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <form className={style.form +" col-sm-12 col-md-6 mx-auto my-5 py-2"} >
                    <div>
                        <label>{t("productName")}</label>
                        {i18n.language==="ar"?
                        <input type="text" value={prod.name_ar}  
                        onChange={(e)=>{setProd({...prod,name_ar:e.target.value})}} 
                        className="form-control"  /> :
                        <input type="text" value={prod.name_en}  
                        onChange={(e)=>{setProd({...prod,name_en:e.target.value})}} 
                        className="form-control"  />
                        }

                    </div>

                    <div>
                        <label>{t("prodPrice")}</label>
                        <input type="text" value={prod.price}  
                        onChange={(e)=>{setProd({...prod,price:e.target.value})}} 
                        className="form-control" />
                    </div>

                    {/* <div>
                        <label>{t("prodPhoto")}</label>
                        <input type="text" value={prod.img}  
                        onChange={(e)=>{setProd({...prod,img:e.target.value})}} 
                        className="form-control"  />
                    </div> */}

                    <div className={style.containSave}>
                        <button className={style.saveBtn +" btn"} 
                        onClick={updateData}>{t("save")}</button>
                    </div>

                </form>
            </div>
        </div>
        </>
    )
}
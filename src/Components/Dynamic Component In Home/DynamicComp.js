import { useTranslation } from "react-i18next";
import { Link ,useNavigate} from "react-router-dom";
import { useState ,useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { INCREAMENT ,CART} from "../../Store/actions";
import axios from 'axios';

export default function DynamicComp(props) {
  // const [like, setLike] = useState(false);

  const [t, i18n] = useTranslation();
  
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
 
  const [products,setProd] = useState([]);
  products.forEach((el) => (el.love = false));

  useEffect(()=>{
    axios.get("http://localhost:8080/Products").then((res)=>{
      setProd(res.data);
    })
  },[]);
  const nav = useNavigate();
  const gotoProdDetails = (id,e)=>{
        nav(props.prod+"/"+id);
        e.preventDefault();
        e.stopPropagation();
  }

  function onLikeBtnClick(index,e) {
    products[index].love = !products[index].love;
    let icon = document.getElementById(index+props.kind);
    icon.classList.toggle("fa-solid");
    icon.classList.toggle("fa-regular");
    // console.log(products[index].love);
    e.stopPropagation();
  }
  
  return (
    <>
      <div>
        <div
          className="mt-5"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h3>{props.h3Text}</h3>
          <span>
            <Link>
              {t("viewAll")}{" "}
              {i18n.language === "ar" ? (
                <i class="fa-sharp fa-solid fa-arrow-left"></i>
              ) : (
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
              )}
            </Link>
          </span>
        </div> 
        <div className="row mx-0 pt-2" id="weeklyDeals">
          {products.map(
            (prod, index) =>
              prod.status === props.status && (
                <div className="col my-2" onClick={(event)=>gotoProdDetails(prod.id,event)}>
                  <div className="py-3">
                    <div>
                      <span>
                        <i
                          id={index+props.kind}
                          className="fa-regular fa-heart"
                          onClick={(event) => onLikeBtnClick(index,event)}
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
                    <button onClick={(e)=>handleIncrement(prod,e)} className="d-block rounded w-100 mt-5">
                      {t("addToCart")}
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

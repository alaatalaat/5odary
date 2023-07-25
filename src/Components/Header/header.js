import logo from "../../assets/logo.jpg";
import "../Header/header.css";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from 'react';
import emptyCredit from "../../assets/empty-credit.png" ;
import { useSelector } from "react-redux";
import Cart from "../addToCart/Cart";
import { CART } from "../../Store/actions";
import { useDispatch } from "react-redux";



export default function Header(props) {
  const btn1 = document.getElementsByClassName("accordion-button")[0];
  const [t, i18n] = useTranslation();
  
  const countState = useSelector( state => state.count );
  
  function openAsideNav() {
    console.log("done");
    var aside = document.getElementById("asideNavbar");
    aside.classList.remove("d-none");
    aside.classList.add("d-block");
    aside.classList.add("animate__fadeInRight");
    aside.classList.remove("animate__fadeOutRight");
  }
  function closeAsideNav() {
    console.log("done");
    var aside = document.getElementById("asideNavbar");
    aside.classList?.add("animate__fadeOutRight");
    aside.classList?.remove("animate__fadeInRight");
    aside.classList?.remove("d-block");
  }
  function showcontainerForCart(e){
    let containerForCart = document.getElementById("containerForCart");
    containerForCart.classList?.toggle('d-none');
    e.stopPropagation();
  }
  
  const dispatch = useDispatch();
  const cartProducts = ()=>{
    dispatch({
      type:CART,
    }) ;
  }

  return (
    <>
      <div id="headerInLgScreen" className="d-none d-lg-block">
        <div className="container-fluid " id="whiteHeader">
          <div className="container px-0">
            <div className="row">
              <div className="col-3" id="hContainLang">
                <img src={logo} width="40px" height="30px" />
                <div>
                  {i18n.language === "ar" && (
                    <button
                      onClick={() => {
                        i18n.changeLanguage("en");
                        document.body.setAttribute("dir", "ltr");
                        document.body.style.fontFamily= 'Poppins';
                      }}
                    >
                      En
                    </button>
                  )}

                  {i18n.language === "en" && (
                    <button
                      onClick={() => {
                        i18n.changeLanguage("ar");
                        document.body.setAttribute("dir", "rtl");
                        document.body.style.fontFamily= 'JFFlat';
                      }}
                    >
                      Ar
                    </button>
                  )}
                </div>
              </div>
              <div className="col-6"></div>
              <div className="col-3 px-0" id="hContainCart">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      {t("signInUp")} <i className="fa-solid fa-chevron-down"></i>
                    </Dropdown.Toggle>
                  </Dropdown>
                </div>
                <div>
                  <a style={{cursor:'pointer'}} onClick={showcontainerForCart}><i className="fa-solid fa-cart-shopping"></i> {t("cart")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="navbar">
          <div className="container">
            <Navbar>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link>
                    <Link to="#">{t("weeklyDeals")}</Link>
                  </Nav.Link>

                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {t("Fr&Ve")} <i className="fa-solid fa-chevron-down"></i>
                    </Dropdown.Toggle>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      {t('khodarCh')} <i className="fa-solid fa-chevron-down"></i>
                    </Dropdown.Toggle>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {t('grocery')} <i className="fa-solid fa-chevron-down"></i>
                    </Dropdown.Toggle>
                  </Dropdown>


                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {t('detergents')} <i className="fa-solid fa-chevron-down"></i>
                    </Dropdown.Toggle>
                  </Dropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>

      <div id="hearderInSmallScreen" className="d-lg-none bg-light">
        <div className="container">
          <div className="row py-3">
            <div className="col-6">
              <i className="fa-solid fa-bars" onClick={openAsideNav}></i>
            </div>
            <div className="col-6">
              {i18n.language === "en" && (
                <button
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    document.body.setAttribute('dir','rtl');
                  }}
                >
                  Ar
                </button>
              )}
              {i18n.language === "ar" && (
                <button
                  onClick={() => {
                    i18n.changeLanguage("en");
                    document.body.setAttribute('dir','ltr')
                  }}
                >
                  En
                </button>
              )}
              <i className="fa-solid fa-cart-shopping" onClick={showcontainerForCart}></i>
            </div>
          </div>
        </div>
      </div>
      <div id="asideNavbar" className="d-none animate__animated">
        <div>
          <button onClick={closeAsideNav} id="closeBtn">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div
          className="px-4"
          style={{ borderBottom: "1px solid #6c757d", paddingBottom: "15px" }}
        >
          <Button variant="outline-secondary" className="w-100">{t('signin')}</Button>
        </div>
        <div>
          <ul>
            <li>
              <Link to="#">{t("weeklyDeals")}</Link>
            </li>
            <li>
              <Accordion eventKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {t("Fr&Ve")}
                    {btn1?.classList.contains("collapsed") ? (
                      <i className="fa-solid fa-chevron-down mx-1"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-up mx-1"></i>
                    )}
                  </Accordion.Header>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Accordion eventKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {t("khodarCh")}
                    {btn1?.classList.contains("collapsed") ? (
                      <i className="fa-solid fa-chevron-down mx-1"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-up mx-1"></i>
                    )}
                  </Accordion.Header>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Accordion eventKey="2">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {t('grocery')}
                    {btn1?.classList.contains("collapsed") ? (
                      <i className="fa-solid fa-chevron-down mx-1"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-up mx-1"></i>
                    )}
                  </Accordion.Header>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Accordion.Header>
                    {t('detergents')}
                    {btn1?.classList.contains("collapsed") ? (
                      <i className="fa-solid fa-chevron-down mx-1"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-up mx-1"></i>
                    )}
                  </Accordion.Header>
            </li>
          </ul>
        </div>
      </div>

      <div id="containerForCart" className="d-none">
        <div className="" id="addToCart">
          <div className="divOneInAddCart">
            <h4>عربة التسوق ({countState})</h4>
            <button>
              <i onClick={showcontainerForCart} class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div>
              { CART.length===0 ?
                <div id="emptyCart">
                 <div>
                  <img src={emptyCredit} />
                  <p>عربة التسوق فارغة</p>
                 </div>
                </div> :
                 <Cart />
              }
          </div>
        </div>
      </div>

      {countState >0 && <div id="fixed-AddToCart-IconInBtn" onClick={showcontainerForCart}>
        <div id="conterOnIcon">{countState}</div>
        <i class="fa-sharp fa-solid fa-cart-plus"></i>
      </div>} 
    </>
  );
}

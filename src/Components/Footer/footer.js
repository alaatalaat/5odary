import "../Footer/footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import facebook from "../../assets/contact/facebook.png";
import twitter from "../../assets/contact/twitter.png";
import instagram from "../../assets/contact/Instagram.webp";
import youtube from "../../assets/contact/youtube.png";
import linkedin from "../../assets/contact/linkedin.png";
import googleplay from "../../assets/googleplay.png";
export default function Footer() {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <div className="container-fluid px-5 py-5" id="footer">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <p>
              <b>{t("Fr&Ve")}</b>
              <ul>
                <li>
                  <Link to="fruits&vegetables/fresh-vegetables">{t("freshVe")}</Link>
                </li>
                <li>
                  <Link to="fruits&vegetables/fresh-fruits">{t("freshFr")}</Link>
                </li>
                <li>
                  <Link to="fruits&vegetables/fresh-herbs&leaves">{t("fresh&leaves")}</Link>
                </li>
              </ul>
            </p>
          </div>
          <div className="col-sm-6 col-md-3">
            <b>{t("khodarCh")}</b>
            <ul>
              <li>
                <Link to="khodarKitchen/salads">{t("salads")}</Link>
              </li>
              <li>
                <Link to="khodarKitchen/readyVegetables">{t("readyVe")}</Link>
              </li>
              <li>
                <Link to="khodarKitchen/khodarTable">{t("khodarT")}</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
          <b>{t("grocery")}</b>
            <ul>
              <li>
                <Link to="grocery/bevarage">{t("bevarage")}</Link>
              </li>
              <li>
                <Link to="grocery/grains&legumes">{t("grains&legumes")}</Link>
              </li>
              <li>
                <Link to="grocery/spices&mixes">{t("spices&mixes")}</Link>
              </li>
              <li>
                <Link to="grocery/honey&jams">{t("honey&jams")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-4 mt-4 mt-md-0">
                <p><b>{t("contactWithUs")}</b></p>
                <a><img className="my-md-1" src={facebook} width="35px" height="35px" /></a>
                <a><img className="my-md-1" src={twitter} width="35px" height="35px" /></a>
                <a><img className="my-md-1" src={linkedin} width="35px" height="35px" /></a>
                <a><img className="my-md-1" src={instagram} width="35px" height="35px" /></a>
                <a><img className="my-md-1" src={youtube} width="35px" height="35px" /></a>
            </div>
            <div className="col-md-4"></div>
            <div className="col-sm-12 col-md-4 mt-4 mt-md-0">
                <p><b>{t("getOurApp")}</b></p>
                <a className="btn my-md-1"><i className="fa-solid fa-apple-whole"></i> App Store</a>
                <a className="btn my-md-1"><img src={googleplay} width="20px" height="20px" /> Google Play</a>
            </div>
        </div>
      </div>

      <div className="container-fluid px-5 py-3" id="lastFooter">
        <div className="row">
            <div className="col-sm-12 col-md ">{t("aboutkhodar")}</div>
            <div className="col-sm-12 col-md ">{t("helpCenter")}</div>
            <div className="col-sm-12 col-md ">{t("returnspolicy")}</div>
            <div className="col-sm-12 col-md ">{t("contactUs")}</div>
            <div className="col-sm-12 col-md ">{t("privacyPolicy")}</div>
            <div className="col-sm-12 col-md-12 col-lg-5 text-md-center text-muted">@Green.com 2020 All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

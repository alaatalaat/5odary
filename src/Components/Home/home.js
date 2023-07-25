import offers from "../../assets/offers.jpg";
import "../Home/home.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import offerIcon from "../../assets/offer-icon.png";
import vegetables from "../../assets/vegetables.png";
import kitchen from "../../assets/kitchen.png";
import grocery from "../../assets/grocery.png";
import detergents from "../../assets/detergents.png";
import discount from "../../assets/discount.png";
import { useEffect, useState } from "react";
import DynamicComp from "../Dynamic Component In Home/DynamicComp";


export default function Home() {
  const [like, setLike] = useState(false);

  const [t, i18n] = useTranslation();
  var bestSelling = [
    {
      id: "1",
      img: require("../../assets/best selling/1.jpg"),
      name_ar: "زنجبيل فريش",
      name_en: "Sweet Apple",
      price: 22,
      size_ar: "100 جرام",
      size_en: "100 gm",
    },
    {
      id: "2",
      img: require("../../assets/best selling/2.jpg"),
      name_ar: "خلطة كارى الضحي",
      name_en: "Al Doha Curry mix",
      price: 13.0,
      size_ar: "70 جرام",
      size_en: "70 gm",
    },
    {
      id: "3",
      img: require("../../assets/best selling/3.jpg"),
      name_ar: "عنب أسود لبناني",
      name_en: "Lebanese Black Grape",
      price: 85,
      size_ar: "1 كيلو ",
      size_en: "1 KG",
    },
    {
      id: "4",
      img: require("../../assets/best selling/4.png"),
      name_ar: "موز مستورد فاخر",
      name_en: "Banana",
      price: 70,
      size_ar: "1 كيلو",
      size_en: "1 KG",
    },
    {
      id: "5",
      img: require("../../assets/best selling/5.png"),
      name_ar: "طحينة البوادي",
      name_en: "Al-Bawadi Tahina",
      price: 19,
      size_ar: "255 جرام",
      size_en: "255 gm",
    },
  ];

  var FruitsAndVegetables = [
    {
      id: "1",
      img: require("../../assets/fruits vegetables/1.jpeg"),
      name_ar: "طماطم درجة أولى فاخر",
      name_en: "Tomato 1st Grade",
      price: 12,
      size_ar: "1 كجم",
      size_en: "1 KG",
    },
    {
      id: "2",
      img: require("../../assets/fruits vegetables/2.jpg"),
      name_ar: "خيار درجة أولى",
      name_en: "Cucumber 1st Grade",
      price: 18.0,
      size_ar: "1 كجم",
      size_en: "1 KG",
    },
    {
      id: "3",
      img: require("../../assets/fruits vegetables/3.jpg"),
      name_ar: "بطاطس",
      name_en: "Lebanese Black Grape",
      price: 12,
      size_ar: "1 كيلو ",
      size_en: "1 KG",
    },
    {
      id: "4",
      img: require("../../assets/fruits vegetables/4.jpg"),
      name_ar: "بصل أحمر",
      name_en: "Banana",
      price: 16,
      size_ar: "1 كيلو",
      size_en: "1 KG",
    },
    {
      id: "5",
      img: require("../../assets/fruits vegetables/5.jpg"),
      name_ar: "بصل أبيض",
      name_en: "Al-Bawadi Tahina",
      price: 22,
      size_ar: "1 كجم",
      size_en: "1 KG",
    },
  ];

  var KhodarKitchen = [
    {
      id: "1",
      img: require("../../assets/khodar kitchen/1.png"),
      name_ar: "تشيكن سيزار سلاد",
      name_en: "Chicken Caesar Salad",
      price: 60,
      size_ar: "عبوة",
      size_en: "pack",
    },
    {
      id: "2",
      img: require("../../assets/khodar kitchen/2.png"),
      name_ar: "ميلانو سلاد",
      name_en: "Milano Salad",
      price: 50,
      size_ar: "عبوة",
      size_en: "pack",
    },
    {
      id: "3",
      img: require("../../assets/khodar kitchen/3.png"),
      name_ar: "جريك سلاد",
      name_en: "Greek Salad",
      price: 12,
      size_ar: "عبوة",
      size_en: "pack",
    },
    {
      id: "4",
      img: require("../../assets/khodar kitchen/4.png"),
      name_ar: "جرين سلاد",
      name_en: "Green salad",
      price: 40,
      size_ar: "عبوة",
      size_en: "pack",
    },
    {
      id: "5",
      img: require("../../assets/khodar kitchen/5.png"),
      name_ar: "كرنب احمر مبشور",
      name_en: "Grated red cabbage salad",
      price: 14,
      size_ar: "250 جرام",
      size_en: "250 gm",
    },
  ];

  var Grocery = [
    {
      id: "1",
      img: require("../../assets/grocery/1.jpg"),
      name_ar: "فول سودانى محمص بقشره بالملح",
      name_en: "Roasted peanuts shell with salt 1 kg",
      price: 75,
      size_ar: "1 كجم",
      size_en: "1 KG",
    },
    {
      id: "2",
      img: require("../../assets/grocery/2.png"),
      name_ar: "ينسون إيزيس",
      name_en: "Isis Anise",
      price: 8,
      size_ar: "12 فتلة",
      size_en: "12 Bags",
    },
    {
      id: "3",
      img: require("../../assets/grocery/3.jpg"),
      name_ar: "نسكافيه 3*1",
      name_en: "Nescafe 3in1",
      price: 52,
      size_ar: "1 كجم",
      size_en: "24 Bags",
    },
    {
      id: "4",
      img: require("../../assets/grocery/4.jpg"),
      name_ar: "خلطة كارى الضحي",
      name_en: "Al Doha Curry mix",
      price: 19.5,
      size_ar: "70 جرام",
      size_en: "70 kg",
    },
    {
      id: "5",
      img: require("../../assets/grocery/5.jpg"),
      name_ar: "قرفة الضحي",
      name_en: "Al Doha Cinnamon",
      price: 15,
      size_ar: "65 جرام",
      size_en: "65 kg",
    },
  ];

  const [subscribe, setSubscribe] = useState("");
  const [message, setMessage] = useState("");
  const [accept, setAccept] = useState(false);

  const handleOnChangeEmail = (e) => {
    setSubscribe(e.target.value);
  };

  var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g;

  function subscribeForm() {
    setAccept(true);
    // console.log(subscribe);
    // console.log('acc',accept);
    if (regEx.test(subscribe)) {
      setMessage(t("successSubscribe"));
      setSubscribe(" ");
    } else if (!regEx.test(subscribe) || subscribe === "") {
      setMessage(t("errorSubscribe"));
    } else {
      setMessage("");
    }
  }
  

  return (
    <>
      <div className="container-fluid px-5 py-4">
        <img src={offers} width="100%" />
        <h3 className="mt-5">{t("Popular Categories")}</h3>
        <div className="row mx-0 pt-2" id="popularCat">
          <div className="col-md my-2 my-md-0">
            <Link to="#">
              <div className="py-2 rounded">
                <img src={offerIcon} width="70px" />
                <p className="mt-3">{t("weeklyDeals")}</p>
              </div>
            </Link>
          </div>
          <div className="col-md my-2 my-md-0">
            <Link to="#">
              <div className="py-2 rounded">
                <img src={vegetables} width="70px" />
                <p className="mt-3">{t("Fr&Ve")}</p>
              </div>
            </Link>
          </div>
          <div className="col-md my-2 my-md-0">
            <Link to="#">
              <div className="py-2 rounded">
                <img src={kitchen} width="70px" />
                <p className="mt-3">{t("khodarCh")}</p>
              </div>
            </Link>
          </div>
          <div className="col-md my-2 my-md-0">
            <Link to="#">
              <div className="py-2 rounded">
                <img src={grocery} width="70px" />
                <p className="mt-3">{t("grocery")}</p>
              </div>
            </Link>
          </div>
          <div className="col-md my-2 my-md-0">
            <Link to="#">
              <div className="py-2 rounded">
                <img src={detergents} width="70px" />
                <p className="mt-3">{t("detergents")}</p>
              </div>
            </Link>
          </div>
        </div>

        <DynamicComp  h3Text={t("weeklyDeals")} status="weeklyOffers" prod="weeklyProd"  kind="weeklyDeals" />

        <DynamicComp h3Text={t("mostSeller")} status="bestSeller" prod="bestSeller" kind="bestSelling" />

        <div>
          <img className="mt-5" src={discount} width="100%" />
        </div>

        <DynamicComp h3Text={t("Fr&Ve")} status="fruitAndVegetables" prod="fruitAndVegetables" kind="fruitsVegetables"/>

        <DynamicComp h3Text={t("khodarCh")} status="weeklyOffers" prod="weeklyProd"  kind="KhodarKitchen" />

        <div className="row mt-5 pb-5">
          <div className="col-sm-6 mx-auto text-center">
            <h4 className="subscribe">{t("shareNews")}</h4>
            <div className="mt-4">
              <form>
                <input
                  type="email"
                  value={subscribe}
                  onChange={handleOnChangeEmail}
                />
                <button type="button" onClick={subscribeForm}>
                  {t("subscribe")}
                </button>
              </form>
            </div>
            <span
              className={
                message === t("successSubscribe")
                  ? "text-success"
                  : "text-danger"
              }
            >
              {message}
            </span>
          </div>
        </div>
        
      </div>
    </>
  );
}

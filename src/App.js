import "./App.css";
import Header from "../src/Components/Header/header";
import { Suspense } from "react";
import Home from "./Components/Home/home";
import WeeklyDeals from "./Components/Weekly Deals/weeklyDeals";
import Detergents from "./Components/Detergents/detergents";
import FruitsAndVegetables from "./Components/Fruits&Vegetables/Fruits&Vegetables";
import FreshVegetables from "./Components/Fruits&Vegetables/Fresh Vegetables/FreshVegetables";
import FreshFruits from "./Components/Fruits&Vegetables/Fresh Fruits/FreshFruits";
import FreshHerbsLeaves from "./Components/Fruits&Vegetables/Fresh Herb&Leaves/Fresh Herbs&Leaves"
import KhodarChicken from "./Components/Khodar Chicken/Khodar kitchen";
import Salads from "./Components/Khodar Chicken/Salads/salads";
import ReadyVegetables from "./Components/Khodar Chicken/Ready Vegetables/readyVegetables";
import KhodarTable from "./Components/Khodar Chicken/khodar Table/khodarTable";
import Grocery from "./Components/Grocery/grocery";
import Bevarage from "./Components/Grocery/Bevarage/bevarage";
import GrainsAndLegumes from "./Components/Grocery/Grains Legumes/GrainsLegumes";
import SpicesMixes from "./Components/Grocery/Spices Mixes/SpicesMixes";
import HoneyJams from "./Components/Grocery/Honey Jams/HoneyJams";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../src/Components/Footer/footer";
import Register from "../src/Components/Register/register";
import Login from "../src/Components/Login/login";
import store from "../src/Store/store";
import { Provider } from "react-redux";
import ProductDetails from "./Components/productDetails/productDetails";
import UpdateProduct from "./Components/Update Product/updateProduct";
import { useState ,useEffect } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';


function App() {
  const cookies = new Cookies();
  useEffect(()=>{
    const getTalentID = async () => {
      try {
        const response = await axios.post(
          'http://systemha-backend-env.eba-f9cmsdh3.us-east-1.elasticbeanstalk.com/recognize-tenant/domain_name',
          {
            domainName: 'andrew.systemha.com'
          }
        )
        //console.log('Get Successfully:', response.data.result.tenant_id) 

        cookies.set('talent_id', response.data.result.tenant_id);
        //console.log(cookies.get('talent_id')); 

        axios.create({
          baseURL: 'https://api.systemha.com/',
          timeout: 1000,
          headers: {
            "autorization": `Bearer${cookies.get('tenantid')}=`
          }
        })
      } catch (error) {
        console.error('Errorrr :', error)
      }
    }

    getTalentID()

  },[])




  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <Suspense fallback="Looooooooooding">
              <Routes>
                <Route exact path="fruits&vegetables" element={<FruitsAndVegetables />}>
                  <Route exact path="fresh-vegetables" element={<FreshVegetables />} />
                  <Route exact path="fresh-fruits" element={<FreshFruits />} />
                  <Route exact path="fresh-herbs&leaves" element={<FreshHerbsLeaves />} />
                </Route>

                <Route path="/fruits&vegetables/fresh-vegetables/:id" element={<ProductDetails />} />
                <Route path="/weeklyProd/:id" element={<ProductDetails />} />
                <Route path="/bestSeller/:id" element={<ProductDetails />} />
                <Route path="/fruitAndVegetables/:id" element={<ProductDetails />} />

                <Route path="/edit/:id" element={<UpdateProduct />} />
                
                <Route path="khodarKitchen" element={<KhodarChicken />}>
                  <Route path="salads" element={<Salads />} />
                  <Route path="readyVegetables" element={<ReadyVegetables />} />
                  <Route path="khodarTable" element={<KhodarTable />} />
                </Route>
                
                <Route path="/grocery" element={<Grocery />} >
                  <Route path="bevarage" element={<Bevarage />} />
                  <Route path="grains&legumes" element={<GrainsAndLegumes />} />
                  <Route path="spices&mixes" element={<SpicesMixes />} />
                  <Route path="honey&jams" element={<HoneyJams />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route exact path="weekly-deals" element={<WeeklyDeals/>} />
                <Route path="detergents" element={<Detergents />} />
                <Route exact path="/" element={<Home/>} />
              </Routes>
          </Suspense>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;

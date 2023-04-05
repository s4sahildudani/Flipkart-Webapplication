import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Flightsdata from "./pages/Flightsdata";
import TopOffers from "./pages/TopOffers";
import Cart from "./pages/Cart";
import CustomreCare from "./pages/More/CustomreCare";
import Advertise from "./pages/More/Advertise";
import DownloadData from "./pages/More/DownloadData";
import Seller from "./pages/Seller";
import SellerServices from "./pages/seller/SellerServices";
import SellerResource from "./pages/seller/SellerResource";
import Notidficationpref from "./pages/More/Notidficationpref";
import Itemsdata from "./pages/Itemsdata";
import MobileData from "./pages/Mobile/MobileData";
import Contactus from "./pages/Contactus";
import SellAuth from "./pages/SellAuth";
import AboutUs from "./pages/AboutUs";
import Carreer from "./pages/Carreer";
import Dashboard from "./pages/Dashboard";
import SellingItems from "./SellingItems";
import Shoes from "./pages/Shoes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flightsdata" element={<Flightsdata />} />
          <Route path="/topOffers" element={<TopOffers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mobiledata" element={<MobileData />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/downloadData" element={<DownloadData />} />
          <Route path="/Notpreference" element={<Notidficationpref />} />
          <Route path="/customerCare" element={<CustomreCare/>} />
          <Route path="/advertise" element={<Advertise/>} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/sellerServices" element={<SellerServices/>} />
          <Route path="/sellerResource" element={<SellerResource/>} />
          <Route path="/itemsdata" element={<Itemsdata />} />
          <Route path="/sellauth" element={<SellAuth />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/carreer" element={<Carreer />} />
          <Route path="/sellingItems" element={<SellingItems />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shoes" element={<Shoes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

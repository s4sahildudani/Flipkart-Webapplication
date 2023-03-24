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
         
          <Route path="/sellerServices" element={<SellerServices/>} />
          <Route path="/sellerResource" element={<SellerResource/>} />
          <Route path="/itemsdata" element={<Itemsdata />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Flightsdata from "./pages/Flightsdata";
import TopOffers from "./pages/TopOffers";
import Cart from "./pages/Cart";
import NotPrefference from "./pages/More/NotPrefference";
import CustomreCare from "./pages/More/CustomreCare";
import Advertise from "./pages/More/Advertise";
import MobileOffers from "./pages/MobileOffers";
import DownloadData from "./pages/More/DownloadData";
import Seller from "./pages/Seller";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flightsdata" element={<Flightsdata />} />
          <Route path="/topOffers" element={<TopOffers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/downloadData" element={<DownloadData />} />
          <Route path="/notPreference" element={<NotPrefference/>} />
          <Route path="/customerCare" element={<CustomreCare/>} />
          <Route path="/advertise" element={<Advertise/>} />
          <Route path="/mobileOffers" element={<MobileOffers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import * as React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ReactCarousel from "../components/ReactCarousel";
import ControlledCarousel from "../components/ControlledCarousel";
import ShopNow from "../components/ShopNow";
import Offers from "../components/Offers";
import { useNavigate } from "react-router-dom";
import NavData from "../components/NavData";
function Home() {
  
  const navigate = useNavigate();
  
  const handleFlightdata = () =>{
      navigate("/flightsdata")
  }
  const handleOffers = () =>{
    navigate("/topOffers")
  }
  return (
    <>
      <div>
        <NavData  />
        {/* Card  */}
        <Card  handleFlightdata={handleFlightdata} handleOffers={handleOffers} />
        {/* Slider */}
        <ReactCarousel />
        {/* cards carousel */}
        <ControlledCarousel />
        {/* shopNow */}
        <ShopNow />
        {/* discount */}
        <Offers />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Home;

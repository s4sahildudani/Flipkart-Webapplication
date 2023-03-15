import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
// import Paper from "@mui/material/Paper";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ReactCarousel from "../components/ReactCarousel";
import ControlledCarousel from "../components/ControlledCarousel";
import ShopNow from "../components/ShopNow";
import Offers from "../components/Offers";
// import Dialog from "@mui/material/Dialog";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";


import { useNavigate } from "react-router-dom";
import NavData from "../components/NavData";
function Home() {
  
  const navigate = useNavigate();
  
  const handleFlightdata = () =>{
      navigate("/flightsdata")
  }
  return (
    <>
      <div>
        <NavData  />

        {/* Card  */}
        <Card  handleFlightdata={handleFlightdata} />
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

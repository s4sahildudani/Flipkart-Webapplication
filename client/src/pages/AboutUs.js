import React from "react";
import { Grid, Box } from "@mui/material";
import "./AboutUs.css";
import Aboutus from "../images/Aboutus.png";
import Aboutus2 from "../images/Aboutus2.png";
import Aboutus3 from "../images/Aboutus3.png";
import Aboutus4 from "../images/Aboutus4.png";
import Aboutus5 from "../images/Aboutus5.png";
import Aboutus6 from "../images/Aboutus6.png";
import NavData from '../components/NavData';
import Footer from '../components/Footer';
function AboutUs() {
  return (
    <>
    <NavData />
      <Grid container className="aboutUsbg">
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:"center"}}>
          <Box sx={{marginTop:"3%"}}>
            <img src={Aboutus} alt="" />
          </Box>
          <Box sx={{marginTop:"3%"}}>
            <img src={Aboutus2} alt="" />
          </Box>
          <Box sx={{marginTop:"3%"}}>
            <img src={Aboutus3} alt="" />
          </Box>
          <Box sx={{marginTop:"3%"}}>
            <img src={Aboutus4} alt="" />
          </Box>
          <Box sx={{marginTop:"3%"}}>
            <img src={Aboutus5} alt="" />
          </Box>
          <Box sx={{marginTop:"3%"}}>
            <img src={Aboutus6} alt="" />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default AboutUs;

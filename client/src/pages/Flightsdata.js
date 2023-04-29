import React from "react";
import Travel2 from "../images/Travel2.jpg";
import { Box, Grid, Card, Typography } from "@mui/material";
import NavData from "../components/NavData";
import CardFlights3 from "../images/cardFlights3.jpg";
import CardFlights2 from "../images/cardFlights2.jpg";
import CardFlights from "../images/cardFlights.jpg";
import Pinktravel from "../images/Pinktravel.jpg";
function Flightsdata() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <NavData />
          <Box sx={{ padding: "1%" }}>
            <img width="100%" height="680px" src={Travel2} alt="" />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: "29px" }}>
              <b>Best Offers</b>
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              Take a break with Coffe
            </Typography>
          </Box>

          <Grid sx={{ display: "flex" }}>
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: "1%" }}>
              <Card sx={{ padding: "2%" }}>
                <img src={CardFlights} alt="" width="100%" />
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: "1%" }}>
              <Card sx={{ padding: "2%" }}>
                <img src={CardFlights2} alt="" width="100%" />
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: "1%" }}>
              <Card sx={{ padding: "2%" }}>
                <img src={CardFlights3} alt="" width="100%" />
              </Card>
            </Grid>
          </Grid>
          <Grid sx={{ display: "flex" }}>
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: "1%" }}>
              <Card sx={{ padding: "2%" }}>
                <img src={CardFlights} alt="" width="100%" />
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: "1%" }}>
              <Card sx={{ padding: "2%" }}>
                <img src={CardFlights2} alt="" width="100%" />
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: "1%" }}>
              <Card sx={{ padding: "2%" }}>
                <img src={CardFlights3} alt="" width="100%" />
              </Card>
            </Grid>
          </Grid>
          <Grid sx={{background:"cream"}}>
          <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: "29px" }}>
                <b>Paying with Supercoins</b>
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                Take a break with Coffee
              </Typography>
            </Box>
          <Grid sx={{display:"flex"}}>
            
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: "1%" }}>
              <Card sx={{ padding: "2%" }}>
                <img src={Pinktravel} alt="" width="100%" />
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: "1%" }}>
              <Card sx={{ padding: "2%" }}>
                <img src={Pinktravel} alt="" width="100%" />
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: "1%" }}>
              <Card sx={{ padding: "2%" }}>
                <img src={Pinktravel} alt="" width="100%" />
              </Card>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Flightsdata;

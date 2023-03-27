import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HandshakeIcon from "@mui/icons-material/Handshake";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Grid, Box, Typography, Button, TextField } from "@mui/material";
import NavSeller from "../components/NavSeller";
import Conclave from "../images/seller_conclave.png";
import Paathshala from "../images/biz-paathshala-webinar.png";
import Samarth from "../images/Samarth4.png";
import "./seller.css";
import Chaitanya from "../images/Chaitanya_Ramalingegowda__DirectorCo-founder_Wakefit.png";
import Raju from "../images/Raju.png";
import Shubhash from "../images/Shubhash_Chopra.png";
import Footer from '../components/Footer';
function Seller() {
  return (
    <>
      <NavSeller />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="sellerBg"
          sx={{ height: "450px", display: "flex" }}
        >
          <Grid item xs={6} sm={6} md={6} lg={6} sx={{ padding: "4%" }}>
            <Typography sx={{ color: "white", fontSize: "30px" }}>
              Launch Your Buisness in <br />
              10 minutes
            </Typography>
            <Box>
              <TextField
                sx={{ width: "58%", backgroundColor: "white", marginTop: "3%" }}
                label="Enter 10 Digits Phone number Here"
                id="fullWidth"
              />
            </Box>
            <Box>
              <Button
                sx={{
                  background: "rgb(255, 204, 0)",
                  color: "black",
                  width: "180px",
                  marginTop: "3%",
                }}
              >
                <b>Start Selling</b>
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            sx={{ padding: "4%", marginLeft: "15%" }}
          >
            <Typography sx={{ color: "rgb(255, 204, 0)", fontSize: "35px" }}>
              Sell Online to <br /> 50 Crores + customers
            </Typography>
            <Box sx={{ display: "flex", marginTop: "3%" }}>
              <Box sx={{ marginLeft: "3%" }}>
                <AddCardIcon
                  sx={{
                    background: "rgb(255, 204, 0)",
                    width: "20%",
                    height: "30%",
                  }}
                />
                <Typography sx={{ color: "white" }}>
                  7 Day <br /> Payment
                </Typography>
              </Box>
              <Box sx={{ marginLeft: "1%" }}>
                <LocationOnIcon
                  sx={{
                    background: "rgb(255, 204, 0)",
                    width: "20%",
                    height: "30%",
                  }}
                />
                <Typography sx={{ color: "white" }}>
                  PAN-India <br /> delivery
                </Typography>
              </Box>
              <Box sx={{ marginLeft: "1%" }}>
                <HandshakeIcon
                  sx={{
                    background: "rgb(255, 204, 0)",
                    width: "20%",
                    height: "30%",
                  }}
                />
                <Typography sx={{ color: "white" }}>
                  50000+ <br /> sellers
                </Typography>
              </Box>
              <Box sx={{ marginLeft: "1%" }}>
                <BusinessCenterIcon
                  sx={{
                    background: "rgb(255, 204, 0)",
                    width: "20%",
                    height: "30%",
                  }}
                />
                <Typography sx={{ color: "white" }}>
                  Account <br /> Mangagement
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid sx={{ background: "light-grey", display: "flex", padding: "4%","@media (max-width:900px)": {
                  display:"block"
                }, }}>
          <Box sx={{ display: "flex" }}>
            <img src={Chaitanya} alt="" />
            <Box sx={{ padding: "2%" }}>
              <Typography>
                "BBD and BDS sales compounded the consumer demand which led to a
                milestone of 150% YoY revenue growth from Flipkart."
              </Typography>
              <Typography sx={{ marginTop: "2%" }}>
                <b>Chaitanya Ramalingegowda, Wakefit.co</b>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", marginLeft: "4%" }}>
            <img src={Raju} alt="" />
            <Box sx={{ padding: "2%" }}>
              <Typography>
                "BBD and BDS sales compounded the consumer demand which led to a
                milestone of 150% YoY revenue growth from Flipkart."
              </Typography>
              <Typography sx={{ marginTop: "2%" }}>
                <b>Raju Lunawath, Amazestore</b>
              </Typography>
            </Box>{" "}
          </Box>
          <Box sx={{ display: "flex", marginLeft: "4%" }}>
            <img src={Shubhash} alt="" />

            <Box sx={{ padding: "2%" }}>
              <Typography>
                "BBD and BDS sales compounded the consumer demand which led to a
                milestone of 150% YoY revenue growth from Flipkart."
              </Typography>
              <Typography sx={{ marginTop: "2%" }}>
                <b>Shubhash Chopra, DivisaStore</b>
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          md={12}
          sx={{ background: "lightgrey" }}
        >
         <Typography sx={{textAlign:"center" ,fontSize:"35px"}}>Popular categories to sell online in India</Typography>
         <Grid sx={{display:"flex",padding:"4%"}}>
          <Grid item xs={3} sm={3} lg={3} md={3}>
            <Typography>Womens Day Offer</Typography>
            <Typography sx={{marginTop:"1%"}}>Sell Mobile Online</Typography>
            <Typography sx={{marginTop:"1%"}}>Sell Clothes Online</Typography>
            <Typography sx={{marginTop:"1%"}}>Sell Sarees Online</Typography>
          </Grid>
          <Grid item xs={3} sm={3} lg={3} md={3}>
            <Typography>Sell Electronics</Typography>
            <Typography sx={{marginTop:"1%"}}>Online Sell </Typography>
            <Typography sx={{marginTop:"1%"}}>Shoes Online</Typography>
          </Grid>
          <Grid item xs={3} sm={3} lg={3} md={3}>
            <Typography>Sell Jewellery</Typography>
            <Typography sx={{marginTop:"1%"}}>Online Sell</Typography>
            <Typography sx={{marginTop:"1%"}}>Tshirts Online</Typography>
              
             
          </Grid>
          <Grid item xs={3} sm={3} lg={3} md={3}>
            <Typography>Sell Toys</Typography>
            <Typography sx={{marginTop:"1%"}}>Online Sell </Typography>
            <Typography sx={{marginTop:"1%"}}>Appliances Online</Typography>
          </Grid>
        </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ textAlign: "center", fontSize: "40px" }}>
            Events and Programs
          </Typography>
          <Grid display="flex" sx={{ padding: "7%" }}>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <img src={Conclave} alt="" height="100%" />
              <Typography>Seller Events</Typography>
              <Typography>Flipkart admin | 29 AUug,2022 |5min Read</Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{ marginLeft: "100px" }}>
              <img src={Paathshala} alt="" height="100%" />
              <Typography>webinars</Typography>
              <Typography>Flipkart admin | 29 AUug,2022 |5min Read</Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <img
                src={Samarth}
                alt=""
                height="100%"
                style={{ marginRight: "5%" }}
              />
              <Typography>Flipkart Samarth</Typography>
              <Typography>Flipkart admin | 29 AUug,2022 |5min Read</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            sx={{
              textAlign: "center",
              marginTop: "0px",
              fontSize: "25px",
              lineHeight: "34px",
              fontWeight: "500",
            }}
          >
            SELL ON FLIPKART
          </Typography>
          <Box
            sx={{
              textAlign: "center",
              marginLeft: "13%",
              marginRight: "13%",
              marginTop: "3%",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>
              Flipkart Marketplace is India’s leading platform for selling
              online. Be it a manufacturer, vendor or supplier, simply sell your
              products online on Flipkart and become a top e-commerce player
              with minimum investment. Through a team of experts offering
              exclusive seller workshops, training, and seller support, Flipkart
              focuses on empowering sellers across India.
              <br />
              Selling on Flipkart.com is easy and absolutely free. All you need
              is to register, list your catalog and start selling your products.
              <br />
              What's more? We have third party ‘Ecommerce Service Providers’ who
              provide logistics, cataloging support, product photoshoot and
              packaging materials. We have a program called Seller Protection
              Fund to safeguard sellers from losses via compensations. We
              provide Flipkart Fulfilment services through which you can ensure
              faster delivery of your items, quality check by our experts and a
              delightful packaging. Combine these with the fastest payments in
              the industry and you get an excellent seller portal. No wonder
              Flipkart is India’s favourite place to sell online.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Seller;

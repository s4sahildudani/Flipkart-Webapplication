import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import AllOffersData from "../components/AllOffersData";
import NavData from "../components/NavData";
function Contactus() {
  return (
    <>
      <NavData />
      {/* <AllOffersData /> */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ padding: "4%", bgcolor: "#d5d7db" }}
        >
          <Box>
            <Typography sx={{
                fontSize: "15px",
                
                "@media (min-width:600px)": {
                  fontSize: "25px",
                },
                "@media (min-width:960px)": {
                  fontSize: "30px ",
                },
              }}>
              Flipkart Help Center | 24x7 Customer Care Support
            </Typography>
            <Typography 
            sx={{
                fontSize: "14px",
                
                
              }}>
              The Flipkart Help Centre page lists out various types of issues
              that you may have encountered so that there can be quick
              resolution and you can go back to shopping online. For example,
              you can get more information regarding order tracking, delivery
              date changes, help with returns (and refunds), and much more. The
              Flipkart Help Centre also lists out more information that you may
              need regarding Flipkart Plus, payment, shopping, and more. The
              page has various filters listed out on the left-hand side so that
              you can get your queries solved quickly, efficiently, and without
              a hassle. You can get the Flipkart Help Centre number or even
              access Flipkart Help Centre support if you need professional help
              regarding various topics. The support executive will ensure speedy
              assistance so that your shopping experience is positive and
              enjoyable. You can even inform your loved ones of the support page
              so that they can properly get their grievances addressed as well.
              Once you have all your queries addressed, you can pull out your
              shopping list and shop for all your essentials in one place. You
              can shop during festive sales to get your hands on some
              unbelievable deals online. This information is updated on
              27-Mar-23
            </Typography>
          </Box>
          <Box sx={{display:"flex" ,marginTop:"3%"}}>
          <Grid item xs={2} sm={2} md={2} lg={2}  >
            <Box sx={{padding:"3%"}}>
                <Card sx={{padding:"5%",height:"500px" ,overflowY:"auto"}}>
              <Typography sx={{marginTop:"10%"}}>Types of issues</Typography>
              <Box sx={{marginTop:"15%"}}>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Help with your issues</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Help with your order</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Help with other issues</Typography>
              </Box>
              <Typography sx={{marginTop:"15%"}}>HELP TOPICS</Typography>
              <Box>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Order</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Cancellations and Returns</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Payment</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Bajaj Finserv EMI</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>SBI Pre-approved loan</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Credit Card No Cost EMI</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Flipkart Axis Bank Credit Car</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Shopping</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Wallet</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Others</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Shipping</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Flipkart First</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Swlling on Flipkart</Typography>
                <Typography sx={{marginTop:"10%",marginLeft:"6%"}}>Product Reviews</Typography>
              </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Box>
              <Card sx={{padding:"2%",marginTop:"0.5%"}}>
                <Typography sx={{marginTop:"3%"}}>Help Center</Typography>
                <Typography sx={{marginTop:"1%"}}>Products Reviews</Typography>
                <Typography sx={{marginTop:"1%"}}>
                  As there any guidlines for writing products reviews?
                </Typography>
                <Typography sx={{marginTop:"1%"}}>What Can I write in product reiews?</Typography>
                <Typography sx={{marginTop:"1%"}}>Whats now allowed in products reviews?</Typography>
              </Card>
            </Box>
          </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Contactus;

import React from "react";
import { Grid, Typography, Card ,Box ,Button } from "@mui/material";
import NavData from "../../components/NavData";
import CustomareCare from '../../images/Customarecare.jpg';
function CustomreCare() {
  return (
    <div>
      <NavData />
      <Grid container sx={{padding:"2%"}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography>
            <b>Flipkart Help Center | 24x7 Customer Care Support</b>
          </Typography>
          <Typography>
            The Flipkart Help Centre page lists out various types of issues that
            you may have encountered so that there can be quick resolution and
            you can go back to shopping online. For example, you can get more
            information regarding order tracking, delivery date changes, help
            with returns (and refunds), and much more. The Flipkart Help Centre
            also lists out more information that you may need regarding Flipkart
            Plus, payment, shopping, and more. The page has various filters
            listed out on the left-hand side so that you can get your queries
            solved quickly, efficiently, and without a hassle. You can get the
            Flipkart Help Centre number or even access Flipkart Help Centre
            support if you need professional help regarding various topics. The
            support executive will ensure speedy assistance so that your
            shopping experience is positive and enjoyable. You can even inform
            your loved ones of the support page so that they can properly get
            their grievances addressed as well. Once you have all your queries
            addressed, you can pull out your shopping list and shop for all your
            essentials in one place. You can shop during festive sales to get
            your hands on some unbelievable deals online. This information is
            updated on 19-Mar-23
          </Typography>
          <Grid sx={{display:"flex" ,marginTop:"3%"}}>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Card sx={{padding:"5%" ,overflowY:"scroll" ,height:"649px"}}>
                <Typography>TYPE OF ISSUE</Typography>
                <Typography sx={{marginTop:"4%"}}>Help with your issues</Typography>
                <Typography sx={{marginTop:"4%"}}>Help with your order</Typography>
                <Typography sx={{marginTop:"4%"}}>Help with other issues</Typography>

                <Typography sx={{marginTop:"4%"}}>HELP TOPICS</Typography>
                <Typography sx={{marginTop:"4%"}}>Order</Typography>
                <Typography sx={{marginTop:"4%"}}>Cancellations and Returns</Typography>
                <Typography sx={{marginTop:"4%"}}>Payment</Typography>
                <Typography sx={{marginTop:"4%"}}>Bajaj Finserv EMI</Typography>
                <Typography sx={{marginTop:"4%"}}>SBI Pre-approved loan</Typography>
                <Typography sx={{marginTop:"4%"}}>Credit Card No Cost EMI</Typography>
                <Typography sx={{marginTop:"4%"}}>Flipkart Axis Bank Credit Card</Typography>
                <Typography sx={{marginTop:"4%"}}>Shopping</Typography>
                <Typography sx={{marginTop:"4%"}}>Wallet</Typography>
                <Typography sx={{marginTop:"4%"}}>PhonePe</Typography>
                <Typography sx={{marginTop:"4%"}}>Others</Typography>
                <Typography sx={{marginTop:"4%"}}>Flipkart Travel</Typography>
                <Typography sx={{marginTop:"4%"}}>Refurbished</Typography>
                <Typography sx={{marginTop:"4%"}}>Wallet</Typography>
                <Typography sx={{marginTop:"4%"}}>Wallet</Typography>
                <Typography sx={{marginTop:"4%"}}>PhonePe</Typography>
                <Typography sx={{marginTop:"4%"}}>Others</Typography>
                <Typography sx={{marginTop:"4%"}}>Flipkart Travel</Typography>
                <Typography sx={{marginTop:"4%"}}>Refurbished</Typography>
                <Typography sx={{marginTop:"4%"}}>Wallet</Typography>
              </Card>
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <Card sx={{height:"690px"}}>
                <Typography >Help center</Typography> 
                <Box sx={{justifyContent:"center" ,textAlign:"center" ,marginTop:"5%"}}>
                <img src={CustomareCare} alt="" height="20%"  width="20%"  />
             <Typography>Missing cart items?</Typography>
             <Typography>Login to see you added previously</Typography>
             <Button
                          sx={{
                            background: "rgb(251, 100, 27)",
                            color: "white",
                            width: "10%",
                            marginTop:"30px"
                          }}
                        >
                          Login
                        </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomreCare;

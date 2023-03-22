import { Grid, Typography ,Box } from "@mui/material";
import React from "react";
import NavData from "../../components/NavSeller";
import Flipkartpay from "../../images/Flipkart Fulfilment.png"
function SellerServices() {
  return (
    <>
      <NavData />
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box sx={{background:"silver" ,textAlign:"center" ,height:"80px"}}>
            <Typography sx={{fontSize:"30px"}}>
                Services
            </Typography>
            </Box>
            <Box sx={{padding:"5%"}}>
            <Typography sx={{fontSize:"20px"}}>Minimum cost with maximum benefits</Typography>
            </Box>
            <Box sx={{display:"flex" ,justifyContent:"space-between"}}>
                <Grid item xs={12} sm={4} md={4} lg={4} sx={{marginLeft:"10%"}}>
                <img src={Flipkartpay} alt=""  />
                <Typography sx={{fontSize:"20px"}}>Flipkart FullFilment</Typography>
                <Typography sx={{marginTop:"2%"}}>Flipkart admin | 13th Dec 2019 | 1 minute</Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} >
                <img src={Flipkartpay} alt=""  />
                <Typography sx={{fontSize:"20px"}}>Flipkart FullFilment</Typography>
                <Typography sx={{marginTop:"2%"}}>Flipkart admin | 13th Dec 2019 | 1 minute</Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                <img src={Flipkartpay} alt=""  />
                <Typography sx={{fontSize:"20px"}}>Flipkart FullFilment</Typography>
                <Typography sx={{marginTop:"2%"}}>Flipkart admin | 13th Dec 2019 | 1 minute</Typography>
                </Grid>
            </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default SellerServices;

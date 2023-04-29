import React from "react";
import { Card, Grid } from "@mui/material";
import shopNow1 from  "../images/shopNow.jpg";
// import shopNow2 from  "../images/shopNow2.jpg";
function ShopNow() {
  return (
    <div>
      <Grid container >
        <Grid item xs={4} sm={4} md={4} lg={4}  sx={{padding:"1%"}}>
        <Card sx={{padding:"2%"}}>
            <img src={shopNow1}  alt="" width="100%" />
        </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{padding:"1%"}}>
        <Card sx={{padding:"2%"}}>
            <img src={shopNow1}  alt="" width="100%" />
        </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{padding:"1%"}}>
        <Card sx={{padding:"2%"}}>
            <img src={shopNow1}  alt="" width="100%" />
        </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ShopNow;

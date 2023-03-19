import React from 'react'
import { Card, Grid } from "@mui/material";
import Discount from '../images/discount.jpg';
function Offers() {
  return (
    <div>
      <Grid container >
        <Grid item xs={3} sm={3} md={3} lg={3}  sx={{padding:"1%"}}>
        <Card sx={{padding:"2%"}}>
            <img src={Discount}  alt="" width="100%" />
        </Card>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}  sx={{padding:"1%"}}>
        <Card sx={{padding:"2%"}}>
            <img src={Discount}  alt="" width="100%" />
        </Card>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}  sx={{padding:"1%"}}>
        <Card sx={{padding:"2%"}}>
            <img src={Discount}  alt="" width="100%" />
        </Card>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}  sx={{padding:"1%"}}>
        <Card sx={{padding:"2%"}}>
            <img src={Discount}  alt="" width="100%" />
        </Card>
        </Grid>
        </Grid>
    </div>
  )
}

export default Offers
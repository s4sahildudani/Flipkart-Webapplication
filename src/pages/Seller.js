import React from 'react';
import { Grid ,Box, Typography } from '@mui/material';
import NavSeller from '../components/NavSeller';
import Conclave from '../images/seller_conclave.png';
import Paathshala from '../images/biz-paathshala-webinar.png';
import Samarth from '../images/Samarth4.png';
function Seller() {
  return (
    <>
    <NavSeller />
    <Grid container>
       <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{textAlign:"center" ,fontSize:"40px"}}>
            Events and Programs
          </Typography>
          <Grid display="flex" sx={{padding:"7%"}}>
          <Grid item xs={4} sm={4} md={4} lg={4}>
             <img src={Conclave} alt="" height="100%"  />
             <Typography>Seller Events</Typography>
             <Typography>Flipkart admin | 29 AUug,2022 |5min Read</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{marginLeft:"100px"}}>
          <img src={ Paathshala} alt="" height="100%" />
          <Typography>webinars</Typography>
             <Typography>Flipkart admin | 29 AUug,2022 |5min Read</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
          <img src={Samarth} alt="" height="100%" style={{marginRight:"5%"}} />
          <Typography>Flipkart Samarth</Typography>
             <Typography>Flipkart admin | 29 AUug,2022 |5min Read</Typography>
          </Grid>
          </Grid>
       </Grid>
    </Grid>
    </>
  )
}

export default Seller
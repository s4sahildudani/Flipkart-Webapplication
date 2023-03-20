import React from 'react'
import {Grid ,Card ,Box ,Typography} from '@mui/material';
import './DownloadData.css';
import  AppStore from '../../images/App-Store_50c61d.png';
import PlayStore from '../../images/Play-Store_33bb40.png';
import FlipLogo from '../../images/flipkartLogo.png';
import Genius from '../../images/genuine-products_9b0a2f.png';
import Secure from '../../images/secure-shopping_817688.png';
import Hassle from '../../images/Hassle-free_be7c77.png';
import NavData from '../../components/NavData';
import Footer from '../../components/Footer';
function DownloadData() {
  return (
    <>
    <NavData />
     <Grid container>
        <Grid item xs={12} sm={12} lg={12} md={12} className='DownloadContainer' sx={{ marginBottom:"3%",height:"809px" ,marginLeft:"10%" ,width:"500px" ,padding:"3%",marginTop:"3%" ,marginRight:"10%" }}>
          <img style={{marginLeft:"16%" ,marginTop:"5%"}} src={FlipLogo} alt="" height="6%" width="8%" />

           <Typography sx={{marginLeft:"5%" ,color:"white" ,fontSize:"55px"}}>India's Most Popular </Typography>
           <Typography sx={{marginLeft:"10%" ,color:"white" ,fontSize:"45px"}}>Shopping App</Typography>

           <Box sx={{display:"flex",marginTop:"3%"}}>
            <img style={{marginLeft:"2%"}} src={Genius}  alt="" /><Typography sx={{color:"white",fontSize:"17px"}}>Genuine Products</Typography>
            <img style={{marginLeft:"2%"}} src={Secure}  alt="" /><Typography sx={{color:"white",fontSize:"17px"}}>Secure Shopping</Typography>
            <img style={{marginLeft:"2%"}} src={Hassle}  alt="" /><Typography sx={{color:"white",fontSize:"17px"}}>Hassle - free Returns</Typography>
           </Box>
           <Box sx={{marginTop:"4%"}}>
           <img src={AppStore} alt="" />
           <img style={{marginLeft:"4%"}} src={PlayStore} alt="" />
           </Box>
           
        </Grid>
     </Grid>
     <Footer />
    </>
  )
}

export default DownloadData
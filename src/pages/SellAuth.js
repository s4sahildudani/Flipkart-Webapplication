import React from 'react'
import { Grid ,Box ,Typography ,Tab, TextField,Button} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LoadTruck from '../images/Onboarding_logo_Truck.svg';
import TwentyFour from '../images/24x7 sell.svg';
import AccountManage from '../images/account_management.svg';
import SimplePrice from '../images/SimplePrice.svg';
import Buisness from '../images/BuisnessOn.svg';
import FastRegulat from '../images/b2716b3f-3f6b-458f-ba09-3705401d2c18 (1).webp';
import LowReturns from '../images/lowReturns.svg';
import Higher from '../images/higher.svg';
function SellAuth() {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <> 
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:"center"}}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',textAlign:"center" }}>
          <TabList sx={{marginLeft:"30%"}} onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Email Id $ Gst" value="1" />
            <Tab label="Password Creation" value="2" />
            <Tab label="Onboarding Dashboard" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">

            <Box>
                <TextField label="Enter Your Mobile Number" sx={{width:"35%"}} />
                <br />
                <TextField label="Enter Your Email ID" sx={{width:"35%",marginTop:"2%"}} />
                <Typography sx={{marginRight:"19%",marginTop:"2%"}}>What are you looking to sell on Flipkart?</Typography>
                <TextField sx={{marginRight:"0%",marginTop:"2%"}} label="All Categories" />
                <TextField sx={{marginRight:"9%",marginTop:"2%",marginLeft:"2%"}} label="Only Books" />
                <br />
                <TextField sx={{marginTop:"2%" ,width:"35%"}} label="Enter Your Gst Number"  />
                <Typography sx={{marginTop:"2%"}}>GSTIN is required to sell products on Flipkart. You can also share it in the final step.</Typography>

                <Typography sx={{marginTop:"2%"}}>By continuing, I agree to Flipkart’s Terms of Use & Privacy Policy</Typography>

                <Button sx={{background:"blue" ,color:"white",marginTop:"2%"}}>Register $ Continue</Button>
            </Box>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext> 
      <Box sx={{background:" rgb(235, 243, 251)" ,width:"98%" ,padding:"1%"}}>
        <Typography sx={{fontSize:"50px"}}>Why sell on Flipkart?</Typography>
        <Box sx={{display:"flex" ,marginTop:"4%"}}>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <img src={LoadTruck} alt="" />
            <Typography><b>Sell Across India</b></Typography>
            <Typography>Reach over 50 crore+ customers across 27000+ pincodes</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
          <img src={TwentyFour} alt="" />
          <Typography><b>Higher Profits</b></Typography>
            <Typography>With 0% commission* , you take 100% profits with you</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
          <img src={AccountManage} alt="" />
          <Typography><b>Account Management</b></Typography>
          <Typography>Our Dedicated managers will help your business on Flipkart</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
          <img src={SimplePrice} alt="" />
          <Typography><b>Lower Return Charges</b></Typography>
          <Typography>With our flat and low return charges, ship your products stress-free</Typography>
          </Grid>
          </Box>
          <Box sx={{display:"flex" ,marginTop:"4%"}}>
          <Grid item xs={3} sm={3} md={3} lg={3}>
          <img src={Buisness} alt="" />
          <Typography><b>Simple Pricing Calculator</b></Typography>
          <Typography>Use our simple pricing calculator to decide the best and competitive selling price for your product</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
          <img src={LowReturns} alt="" />
          <Typography><b>24x7 Seller Support</b></Typography>
          <Typography>All your queries and issues are answered by our dedicated Seller Support Team</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
          <img src={LowReturns} alt="" />
          <Typography><b>Fast & Regular Payments</b></Typography>
          <Typography>Get payments as fast as 7-10 days from the date of dispatch</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
          <img src={Higher} alt="" />
          <Typography><b>Business on the go</b></Typography>
          <Typography>Download our Flipkart Seller App to manage your business anywhere, anytime</Typography>
          </Grid>
          </Box>
      </Box>
    </Box>
      </Grid>
    </Grid>
    </>
  )
}

export default SellAuth
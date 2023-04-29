import React from "react";
import { Grid, Card, Box, Typography ,Checkbox } from "@mui/material";
import RedNull from '../../images/611123aa-1534-4c7d-8537-85ad9f9e8f0b (2).webp';
import UpperImg from '../../images/b2716b3f-3f6b-458f-ba09-3705401d2c18 (1).webp';
import NavData from "../../components/NavData";
import Footer from "../../components/Footer";
function Notidficationpref() {
  return (
    <>
    <NavData />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ padding: "4%", bgcolor: "#d5d7db" }}
        >
          <Box></Box>
          <Box sx={{ display: "flex", marginTop: "3%" }}>
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Card  sx={{height:"120px" ,padding:"6%" ,textAlign:"center"}}>
                <Typography>NOTIFICATION PREFERENCES</Typography>
                <Typography sx={{marginTop:"4%"}}>Desktop Notifications</Typography>
              </Card>
            </Grid>
            <Grid item xs={9} sm={9} md={9} lg={9} sx={{marginLeft:"4%"}}>
              <Box>
                <Card sx={{ padding: "2%" ,display:"flex" }}>
                  <Grid item xs={5} sm={5} md={5} lg={5}>
                    <Typography>Desktop Notifications</Typography>
                    <Box sx={{display:"flex" ,marginTop:"5%"}}>
                    <Checkbox  defaultChecked />
                    <Box>
                      <Typography>My Orders</Typography>
                      <Typography>Latest Update on My orders</Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:"flex",marginTop:"5%"}}>
                    <Checkbox  defaultChecked />
                    <Box>
                      <Typography>Reminders</Typography>
                      <Typography>Price Drops,Back in stock Product,etc</Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:"flex",marginTop:"5%"}}>
                    <Checkbox  defaultChecked />
                    <Box>
                      <Typography>Recomendation by Flipkart</Typography>
                      <Typography>Products,offers and curated contents based on your internet </Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:"flex",marginTop:"5%"}}>
                    <Checkbox  defaultChecked />
                    <Box>
                      <Typography>New Offers</Typography>
                      <Typography>Top Deals and more</Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:"flex",marginTop:"5%"}}>
                    <Checkbox  defaultChecked />
                    <Box>
                      <Typography>My Flipkart Community</Typography>
                      <Typography>Profiles Updated , Newsletters etc</Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:"flex",marginTop:"5%"}}>
                    <Checkbox  defaultChecked />
                    <Box>
                      <Typography>Feedback and Review</Typography>
                      <Typography>Ratings and Reviews for your Purchase</Typography>
                    </Box>
                    </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} textAlign="center">
                          <Box sx={{display:"flex"}}>
                            <Box><img src={UpperImg} alt="" /></Box>
                            <Box sx={{marginBottom:"10%"}}><img src={UpperImg} alt="" /></Box>
                            <Box><img src={UpperImg} alt="" /></Box>
                          </Box>
                        <img src={RedNull} alt="" />
                        <Box sx={{display:"flex"}}>
                        <Box><img src={UpperImg} alt="" /></Box>
                            <Box><img src={UpperImg} alt="" /></Box>
                            <Box><img src={UpperImg} alt="" /></Box>
                          </Box>
                          <Typography sx={{color:"red" ,fontSize:"13px"}}>oops! You are missing a lot of information notifications <br /> Plaese Switch it off from browser Notification</Typography>
                    </Grid>
                  
                </Card>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid> 
      <Footer />
    </>
  );
}

export default Notidficationpref; 

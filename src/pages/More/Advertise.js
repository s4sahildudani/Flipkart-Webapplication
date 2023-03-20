import React from "react";
import { Grid, Card, Box, Typography, Button, TextField } from "@mui/material";
import LoginAdvetise from "../../images/LoginAdvetise.svg";
import FlipkartAds from "../../images/FlipkartAds.svg";
function Advertise() {
  return (
    <>
      <Grid container>
        <Grid item xs={6} sm={6} md={6} lg={6} textAlign="center">
          <Box sx={{ marginTop: "25%" }}>
            <img src={LoginAdvetise} alt="" height="70%" width="60%" />
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Box sx={{ marginTop: "15%" }}>
            <img src={FlipkartAds} alt="" height="13%" width="13%" />
            <Typography sx={{fontSize:"30px",marginTop:"3%"}}>Login to your account</Typography>
            <Typography sx={{fontSize:"20px",marginTop:"2%"}}>Please enter in your credentials to login</Typography>
            <Typography sx={{marginTop:"2%"}}>Email Adress</Typography>
            <TextField
              id="outlined-password-input"
              label="Enter Email"
              type="password"
              autoComplete="current-password"
              sx={{ width: "50%" ,marginTop:"1%" }}
            />
            <Typography sx={{marginTop:"2%"}}>Password</Typography>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              sx={{ width: "50%" ,marginTop:"1%"}}
            />
            <Typography sx={{marginTop:"2%" ,marginLeft:"35%" ,color:"rgb(40, 116, 240)"}}>Forgot Password?</Typography>
            <Button
              sx={{
                width: "50%",
                backgroundColor: "rgb(40, 116, 240)",
                color: "rgb(255, 255, 255)",
                marginTop:"3%"
              }}
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Advertise;

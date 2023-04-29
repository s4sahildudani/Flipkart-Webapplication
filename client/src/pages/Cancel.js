import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import CancellImage from '../images/cancelImage.png';
import { useNavigate } from "react-router-dom";
function Success() {
    const navigate = useNavigate();
    function Retry () {
        navigate("/cart")
    }
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12} md={12} textAlign="center">
          <Box sx={{marginTop:"5%"}}>
            <img src={CancellImage} alt="" width="15%" height="15%" />
            <Typography sx={{ fontWeight: "700" ,fontSize:"40px" ,color:"red" }}>
              <b>Transaction Cancelled</b>
            </Typography>
            <Typography sx={{ fontWeight: "200",fontSize:"30px" ,color:"red" }}>
              Try once again
            </Typography>
            
            <Button onClick={Retry} sx={{ background: "black", color: "white",fontSize:"25px" }}>
              Retry
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Success;

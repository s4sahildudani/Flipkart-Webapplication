import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import SuccessImg from "../images/paymentDone.png";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.conflig";
function Success() {
  const navigate = useNavigate();
    function goBack () {
        navigate("/");
        db
      .ref("sessionIds")
      .push(sessionId)
      .then(() => {
        console.log("Session ID stored in Firebase Realtime Database");
      })
      .catch((error) => {
        console.error("Error storing session ID in Firebase Realtime Database:", error);
      });
    }
    const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get("session_id");
  console.log("sessionId", sessionId);
  
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12} md={12} textAlign="center">
          <Box sx={{marginTop:"10%"}}>
            <img src={SuccessImg} alt="" />
            <Typography sx={{ fontWeight: "700" ,fontSize:"40px" }}>
              <b>Payment Done</b>
            </Typography>
            <Typography sx={{ fontWeight: "200",fontSize:"30px" }}>
              Thank you for completing your secure online payment.
            </Typography>
            <Typography sx={{ fontWeight: "500" ,fontSize:"30px" }}>
              Have a great day!
            </Typography>
            <Button onClick={goBack} sx={{ background: "black", color: "white",fontSize:"25px" }}>
              Go Back
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Success;

import React from "react";
import { Grid,  Typography, Box } from "@mui/material";
import NavData from "../../components/NavData";
import MobileImg1 from "./Images/mobil1.jpg";
import MobileImg2 from "./Images/mobil2.jpg";
import MobileImg3 from "./Images/mobil3.jpg";
import MobileImg4 from "./Images/Mobil4.jpg";
import MobileImg5 from "./Images/Mobil5.jpg";
import PriceMob1 from "./Images/priceMob1.jpg";
import PriceMob2 from "./Images/pricmOB2.JPG";
import PriceMob3 from "./Images/PRICEmOB3.JPG";
import AllOffersData from "../../components/AllOffersData";
import "./MobileData.css";
function MobileData() {
  return (
    <>
      <NavData />
      <AllOffersData />
      <Grid container sx={{border:"3px solid black"}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box sx={{ padding: "1%", bgcolor: "#d5d7db" }}>
            <Typography sx={{ fontSize: "22px" }}>
              <b>Mobile Phones Flipkart Electronic Sale</b>
            </Typography>
            <Typography>
              Mobile phones are no more merely a part of our lives. Whether it's
              to stay connected with friends and family or to keep abreast of
              important developments around the world, mobiles are no longer for
              sending a text or making a call. From budget to state-of-the-art
              smartphones; indigenous names to global big-wigs - a whole
              universe of mobiles await you on Flipkart. Whether you’re looking
              for waterdrop notch screens, a high screen to body ratio,
              AI-powered sensational cameras, high storage capacity, blazing
              quick processing engines or reflective glass designs, rest assured
              you won’t have to venture anywhere else for your smartphone needs.
              The information you are reading has been last updated on
              24-Mar-23.
            </Typography>
          </Box>
          <Box sx={{ padding: "0.5%" }}>
            <img src={MobileImg1} alt="" width="100%" />
          </Box>
          <Box
            sx={{
              bgcolor: "#7F00FF",
              color: "white",
              height: "2%",
              marginBottom: "1%",
              borderRadius: "30px",
              padding: "1%",
              width: "94%",
              marginLeft: "1%",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                textAlign:"center",
                "@media (min-width:600px)": {
                  fontSize: "30px",
                },
                "@media (min-width:960px)": {
                  fontSize: "45px ",
                },
              }}
            >
              Upcoming Sale
            </Typography>
          </Box>
          <Box sx={{ padding: "0.5%" }}>
            <img src={MobileImg2} alt="" width="100%" />
          </Box>
          <Box
            sx={{
              bgcolor: "#7F00FF",
              color: "white",
              height: "2%",
              marginBottom: "2%",
              borderRadius: "30px",
              padding: "1%",
              width: "94%",
              marginLeft: "1%",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                textAlign:"center",
                "@media (min-width:600px)": {
                  fontSize: "30px",
                },
                "@media (min-width:960px)": {
                  fontSize: "45px ",
                },
              }}
            >
              Upcoming Launches
            </Typography>
          </Box>
          <Box sx={{ padding: "0.5%" }}>
            <img src={MobileImg3} alt="" width="100%" />
          </Box>
          <Box sx={{ padding: "0.5%", marginBottom: "6%" }}>
            <img src={MobileImg4} alt="" width="100%" />
          </Box>
          <Box
            sx={{
              bgcolor: "#7F00FF",
              color: "white",
              height: "2%",
              marginBottom: "2%",
              borderRadius: "30px",
              padding: "1%",
              width: "94%",
              marginLeft: "1%",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                textAlign:"center",
                "@media (min-width:600px)": {
                  fontSize: "30px",
                },
                "@media (min-width:960px)": {
                  fontSize: "45px ",
                },
              }}
            >
              Upcoming Sale
            </Typography>
          </Box>
          <Box sx={{ padding: "0.5%", marginBottom: "2%" }}>
            <img src={MobileImg5} alt="" width="100%" />
          </Box>
          <Typography sx={{ fontSize: "22px", marginBottom: "3%" }}>
            <b>Reviews for Popular Mobiles</b>
          </Typography>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              marginBottom: "4%",
            }}
          >
            <Box sx={{ marginLeft: "2%" }}>
              <img src={PriceMob1} alt="" width="60%"  />
            </Box>
            <Box>
              <Typography>1.POCO C50 (Royal Blue,32gb)</Typography>
              <Typography>5479</Typography>
              <Typography>
                2 GB RAM | 32 GB ROM | Expandable Upto 512 GB <br /> 16.56 cm
                (6.52 inch) HD+ Display <br /> 8MP Dual Camera | 5MP Front
                Camera
              </Typography>
            </Box>
            <Box sx={{ padding: "1%" }}>
              <Typography>Most Helpfull Review</Typography>
              <Typography>Wonderfull</Typography>
              <Typography>
                Thank you flipkart❤ you always best, My phone delivered to me
                just in 3 days.
                <br /> And phone delivered to me safely and in perfect condition
              </Typography>
            </Box>
            <Box>
              <Typography>Recent Review</Typography>
              <Typography>Does This Job</Typography>
              <Typography>
                Sound is very low. Camera so so. Receiving massage every now{" "}
                <br />
                and then: invalid input Unable to short out.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              marginBottom: "4%",
            }}
          >
            <Box sx={{ marginLeft: "1%" }}>
              <img src={PriceMob2} alt="" width="60%"  />
            </Box>
            <Box>
              <Typography>1.POCO C50 (Royal Blue,32gb)</Typography>
              <Typography>5479</Typography>
              <Typography>
                2 GB RAM | 32 GB ROM | Expandable Upto 512 GB <br /> 16.56 cm
                (6.52 inch) HD+ Display <br /> 8MP Dual Camera | 5MP Front
                Camera
              </Typography>
            </Box>
            <Box sx={{ padding: "1%" }}>
              <Typography>Most Helpfull Review</Typography>
              <Typography>Wonderfull</Typography>
              <Typography>
                Thank you flipkart❤ you always best, My phone delivered to me
                just in 3 days.
                <br /> And phone delivered to me safely and in perfect condition
              </Typography>
            </Box>
            <Box>
              <Typography>Recent Review</Typography>
              <Typography>Does This Job</Typography>
              <Typography>
                Sound is very low. Camera so so. Receiving massage every now{" "}
                <br />
                and then: invalid input Unable to short out.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              marginBottom: "6%",
            }}
          >
            <Box sx={{ marginLeft: "4%" }}>
              <img src={PriceMob3} alt="" width="60%" />
            </Box>
            <Box>
              <Typography>1.POCO C50 (Royal Blue,32gb)</Typography>
              <Typography>5479</Typography>
              <Typography>
                2 GB RAM | 32 GB ROM | Expandable Upto 512 GB <br /> 16.56 cm
                (6.52 inch) HD+ Display <br /> 8MP Dual Camera | 5MP Front
                Camera
              </Typography>
            </Box>
            <Box sx={{ padding: "1%" }}>
              <Typography>Most Helpfull Review</Typography>
              <Typography>Wonderfull</Typography>
              <Typography>
                Thank you flipkart❤ you always best, My phone delivered to me
                just in 3 days.
                <br /> And phone delivered to me safely and in perfect condition
              </Typography>
            </Box>
            <Box>
              <Typography>Recent Review</Typography>
              <Typography>Does This Job</Typography>
              <Typography>
                Sound is very low. Camera so so. Receiving massage every now{" "}
                <br />
                and then: invalid input Unable to short out.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </>
  );
}

export default MobileData;

import React from "react";
import Card1 from "../images/card1.jpg";
import Card2 from "../images/card2.jpg";
import Card3 from "../images/card3.jpg";
import Card4 from "../images/card4.jpg";
import Card5 from "../images/card5.jpg";
import Card6 from "../images/card6.jpg";
import Card7 from "../images/card7.jpg";
import Card8 from "../images/card8.jpg";
import Card9 from "../images/card9.jpg";
import { Grid, Box, Typography } from "@mui/material";
import './Card.css';
function Card() {
  return (
    <>
      <Grid container>
        <Grid items xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{ display: "flex", padding: "1%", border: "3px solid black" }}
            justifyContent="space-between"
            flexDirection="row"
          >
            <Box>
              <img src={Card1} alt="" height="60%" />
              <Typography><b>Top Offers</b></Typography>
            </Box>
            <Box>
              <img src={Card2} alt="" height="60%" />
              <Typography><b>Mobile $ Templates</b></Typography>
            </Box>
            <Box>
              <img src={Card3} alt="" height="60%" />
              <Typography><b>Electronics</b></Typography>
            </Box>
            <Box>
              <img src={Card4} alt="" height="60%" />
              <Typography><b>TVs & appliances</b></Typography>
            </Box>
            <Box>
              <img src={Card5} alt="" height="60%" />
              <Typography><b>Fashion</b></Typography>
            </Box>
            <Box>
              <img src={Card6} alt="" height="60%" />
              <Typography><b>Beauty</b></Typography>
            </Box>
            <Box>
              <img src={Card7} alt="" height="60%" />
              <Typography><b>Home & Furniture</b></Typography>
            </Box>
            <Box>
              <img src={Card8} alt="" height="60%" />
              <Typography><b>Flights</b></Typography>
            </Box>
            <Box>
              <img src={Card9} alt="" height="60%" />
              <Typography><b>Grocery</b></Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Card;

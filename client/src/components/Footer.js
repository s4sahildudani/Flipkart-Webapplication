import React from "react";
import { Box, Typography } from "@mui/material";
function Footer() {
  return (
    <>
      <Box
        sx={{
          background: "#172337",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            padding: "2%",
            color:"white"
          }}
        >
          <Box>
            <p>About</p>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Carrers</p>
            <p>FlipKart Stories</p>
            <p>Press</p>
            <p>Flipkart Wholesales</p>
            <p>Corporate information</p>
          </Box>
          <Box>
            <p>HELP</p>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Canecllation & return</p>
            <p>FAQ</p>
            <p>Report Infrignment</p>
          </Box>
          <Box>
            <p>Policy</p>
            <p> Return Policy</p>
            <p>Terms of Use</p>
            <p>Security</p>
            <p>Privacy</p>
            <p>Sitemap</p>
            <p>EPR compillance</p>
          </Box>
          <Box>
            <p>Social</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </Box>
          <Box>
            <hr style={{ color: "white", height: "40%" }} />{" "}
          </Box>
          <Box>
            <p>Mail us</p>
            <p>Flipkart Internet Private liited</p>
            <p>Builidings Alyssa ,Beggonia & </p>
            <p>clove Embassy Tech Village,</p>
            <p>Outer Ring road Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
          </Box>
          <Box>
            <p>Registered Office Address:</p>
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
            <p>CIN : U51109KA2012PTC066107</p>
            <p>Telephone: 044-45614700</p>
          </Box>
        </Box>
        <hr style={{ width: "100%", color: "white" }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          <Box>
            <Typography sx={{ color: "white" }}>Become Seller</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "white" }}>Gift Cards</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "white" }}>Help Center</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "white" }}>
              © 2007-2023 Flipkart.com
            </Typography>
          </Box>
          <Box>
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
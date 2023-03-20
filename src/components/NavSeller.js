import React from "react";
import FlipkartSeller from "../images/flipkarSellernav.svg";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Container,
  Grid,
  Dialog,
  InputBase,
  Paper,
  Button,
  IconButton,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";

function NavSeller() {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", padding: "1%" }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: "flex" }}>
            <img
              src={FlipkartSeller}
              alt=""
              width="150px"
              style={{ marginRight: "30%" }}
            />
            <Box sx={{ display: "flex", marginRight: "200px" }}>
              <Typography sx={{ color: "black", fontSize: "15px"  }}>
                Fee Structure
              </Typography>
              <Typography sx={{ color: "black", fontSize: "15px" ,marginLeft:"10%" }}>
                Services
              </Typography>
              <Typography sx={{ color: "black", fontSize: "15px" ,marginLeft:"10%" }}>
                Resources
              </Typography>
              <Typography sx={{ color: "black", fontSize: "15px" ,marginLeft:"10%" }}>
                FAQs
              </Typography>
              <Typography sx={{ color: "black", fontSize: "15px" ,marginLeft:"10%" }}>
                Shopsy
              </Typography>
            </Box>
            <Box sx={{display:"flex"}}>
              <Button sx={{background:"rgb(255, 204, 0)" ,color:"white" ,width:"180px"}}>StartSelling</Button>
              <Button sx={{background:"rgb(0, 102, 204)" ,color:"white" ,marginLeft:"10%" ,width:"180px"}}>Login</Button>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
}

export default NavSeller;

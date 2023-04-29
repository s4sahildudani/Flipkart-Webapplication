import React from "react";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Container,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { padding } from "@mui/system";
function AllOffersData() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              onClick={handleClick}
              sx={{
                fontSize: "0.7rem",
                color: "black",
                marginLeft: "2%",
                textAlign:"center",
                "@media (min-width:600px)": {
                  fontSize: "1rem",
                },
                "@media (min-width:960px)": {
                  fontSize: "1.2rem ",
                },
              }}
            >
              Electronics
            </Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Box sx={{ display: "flex" ,justifyContent:"space-between",width:"87.5rem" }}>
                <Box sx={{padding:"4%"}}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Box>
                <Box sx={{padding:"4%" }}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Box>
                <Box sx={{padding:"4%"}}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Box>
                <Box sx={{padding:"4%"}}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Box>

                <Box sx={{padding:"4%"}}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Box>
              </Box>
            </Menu>

            <Typography
            sx={{
              fontSize: "0.7rem",
              color: "black",
              marginLeft: "2%",
              textAlign:"center",
              "@media (min-width:600px)": {
                fontSize: "1rem",
              },
              "@media (min-width:960px)": {
                fontSize: "1.2rem ",
              },
            }}
              
            >
              TV's & Appliances
            </Typography>

            <Typography
             sx={{
              fontSize: "0.7rem",
              color: "black",
              marginLeft: "2%",
              textAlign:"center",
              "@media (min-width:600px)": {
                fontSize: "1rem",
              },
              "@media (min-width:960px)": {
                fontSize: "1.2rem ",
              },
            }}
            >
              Men
            </Typography>
            <Typography
             sx={{
              fontSize: "0.7rem",
              color: "black",
              marginLeft: "2%",
              textAlign:"center",
              "@media (min-width:600px)": {
                fontSize: "1rem",
              },
              "@media (min-width:960px)": {
                fontSize: "1.2rem ",
              },
            }}
            >
              Women
            </Typography>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "black",
                marginLeft: "2%",
                textAlign:"center",
                "@media (min-width:600px)": {
                  fontSize: "1rem",
                },
                "@media (min-width:960px)": {
                  fontSize: "1.2rem ",
                },
              }}
            >
              Baby & Kids
            </Typography>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "black",
                marginLeft: "2%",
                textAlign:"center",
                "@media (min-width:600px)": {
                  fontSize: "1rem",
                },
                "@media (min-width:960px)": {
                  fontSize: "1.2rem ",
                },
              }}
            >
              Home & Furniture
            </Typography>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "black",
                marginLeft: "2%",
                textAlign:"center",
                "@media (min-width:600px)": {
                  fontSize: "1rem",
                },
                "@media (min-width:960px)": {
                  fontSize: "1.2rem ",
                },
              }}
            >
              Sports ,books & More
            </Typography>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "black",
                marginLeft: "2%",
                textAlign:"center",
                "@media (min-width:600px)": {
                  fontSize: "1rem",
                },
                "@media (min-width:960px)": {
                  fontSize: "1.2rem ",
                },
              }}
            >
              Flights
            </Typography>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "black",
                marginLeft: "2%",
                textAlign:"center",
                "@media (min-width:600px)": {
                  fontSize: "1rem",
                },
                "@media (min-width:960px)": {
                  fontSize: "1.2rem ",
                },
              }}
            >
              Offer Zone
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default AllOffersData;

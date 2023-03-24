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
              sx={{ marginLeft: "3%", fontSize: "1.3rem", color: "black" }}
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
              sx={{ marginLeft: "3%", fontSize: "1.2rem", color: "black" }}
            >
              TV's & Appliances
            </Typography>

            <Typography
              sx={{ marginLeft: "3%", fontSize: "1.2rem", color: "black" }}
            >
              Men
            </Typography>
            <Typography
              sx={{ marginLeft: "3%", fontSize: "1.2rem", color: "black" }}
            >
              Women
            </Typography>
            <Typography
              sx={{ marginLeft: "3%", fontSize: "1.2rem", color: "black" }}
            >
              Baby & Kids
            </Typography>
            <Typography
              sx={{ marginLeft: "3%", fontSize: "1.2rem", color: "black" }}
            >
              Home & Furniture
            </Typography>
            <Typography
              sx={{ marginLeft: "3%", fontSize: "1.2rem", color: "black" }}
            >
              Sports ,books & More
            </Typography>
            <Typography
              sx={{ marginLeft: "3%", fontSize: "1.2rem", color: "black" }}
            >
              Flights
            </Typography>
            <Typography
              sx={{ marginLeft: "3%", fontSize: "1.2rem", color: "black" }}
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

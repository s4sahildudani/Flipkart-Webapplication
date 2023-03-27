import React, { useState } from "react";
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
import Login from "../images/login.jpg";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
function NavData() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCarts = () => {
    navigate("/cart");
  };
  const handleDownloadApp = () => {
    navigate("/downloadData");
    setAnchorEl(null);
  };
  const handleCustomerCare = () => {
    navigate("/customerCare");
    setAnchorEl(null);
  };
  const handleNotPrefference = () => {
    navigate("/Notpreference");
    setAnchorEl(null);
  };
  const handleAdvertise = () => {
    navigate("/advertise");
    setAnchorEl(null);
  };
  const handleClickMenu = (event) => {
    console.log("click");
    setAnchorEl(event.currentTarget);
  };
  
  const handleSeller = () => {
    navigate("/seller");
  };
  return (
    <div>
      <AppBar position="static" sx={{marginLeft:"0%" ,marginRight:"0%" ,width:"100%"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ marginLeft: "13%" }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  marginLeft: "15%",
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,

                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                FlipKart
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography>Explore</Typography>
                <Typography sx={{ marginLeft: "5%" }}>Plus</Typography>
              </Box>
            </Box>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "45%",
                marginLeft: "3%",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for Products Brand, and More"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Button
              onClick={handleClickOpen}
              sx={{
                background: "white",
                color: "blue",
              }}
            >
              Login
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <Grid container textAlign="center">
                <Box
                  sx={{
                    display: "flex",
                    width: "1000px",
                    height: "530px",
                    overflow: "hidden",
                  }}
                >
                  <Grid item xs={5} sm={5} md={5} lg={5}>
                    <Box
                      sx={{
                        background: "#2874f0",
                        padding: "20%",
                        height: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "25px",
                          marginRight: "20%",
                        }}
                      >
                        Login
                      </Typography>

                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "18px",
                          marginTop: "20%",
                        }}
                      >
                        Get access to your Orders, Wishlist and Recommendations
                      </Typography>
                      <img style={{ marginTop: "220px" }} src={Login} alt="" />
                    </Box>
                  </Grid>
                  <Grid item xs={7} sm={7} md={7} lg={7}>
                    <Box sx={{ padding: "56px 35px 16px" }}>
                      <TextField
                        sx={{ width: "100%" }}
                        id="standard-basic"
                        label="Enter Email/Mobile Number"
                        variant="standard"
                      />
                      <Typography sx={{ fontSize: "15px", marginTop: "30px" }}>
                        By continuing, you agree to Flipkart's Terms of Use and
                        Privacy Policy.
                      </Typography>
                      <Button
                        sx={{
                          background: "rgb(251, 100, 27)",
                          color: "white",
                          width: "100%",
                          marginTop: "30px",
                        }}
                      >
                        Request OTP
                      </Button>
                      <Box sx={{ display: "flex", marginTop: "220px" }}>
                        <Typography sx={{ color: "#2874f0" }}>
                          New to Flipkart?{" "}
                        </Typography>
                        <Typography sx={{ color: "#2874f0" }}>
                          Create an account
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
              <Box></Box>
            </Dialog>
            <Typography onClick={handleSeller} sx={{ marginLeft: "3%", fontSize: "1.3rem" }}>
              Become a seller
            </Typography>
            <Typography
              onClick={handleClickMenu}
              sx={{ marginLeft: "3%", fontSize: "1.2rem" }}
            >
              More
            </Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleNotPrefference}>Notification Perference</MenuItem>
              <MenuItem onClick={handleCustomerCare}>24 X 7 Customore Care</MenuItem>
              <MenuItem onClick={handleAdvertise}>Advertise</MenuItem>
              <MenuItem onClick={handleDownloadApp}>Download App</MenuItem>
            </Menu>
            <Typography
              onClick={handleCarts}
              sx={{ marginLeft: "3%", fontSize: "1.2rem" }}
            >
              Cart
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavData;

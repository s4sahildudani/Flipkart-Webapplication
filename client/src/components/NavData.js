import React, { useState, useEffect } from "react";
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
import firebase from "../firebase.conflig";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { db, auth } from "../firebase.conflig";
function NavData() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const openMenu2 = Boolean(anchorE2);
  const navigate = useNavigate();
  // const appVerifier = window.recaptchaVerifier;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick2Open = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
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
  function reCaptchaVerify() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }
  function onSignInSubmit(event) {
    event.preventDefault();
    const phoneNumber = "+91" + phone;
    console.log("phoneNumber", phone);
    reCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP sent Successfully");
        handleClick2Open();
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("SMS not sent");
      });
  }
  function onSubmitOTP(event) {
    event.preventDefault();
    const code = otp;
    console.log("code", code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("useruid", user.uid);
        console.log(JSON.stringify(user));
        alert("User is verified Successfully");
        setLoggedIn(true);
        handleClose2();
        handleClose();
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }

  // cart products
  const [totalproducts, setTotalProducts] = useState(0);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("cart " + user.uid).onSnapshot((snapshot) => {
          const qty = snapshot.docs.length;

          setTotalProducts(qty);
        });
      }
    });
  }, []);
  console.log("totalProducts", totalproducts);
  return (
    <div>
      <AppBar
        position="static"
        sx={{ marginLeft: "0%", marginRight: "0%", width: "100%" }}
      >
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
            <Button onClick={handleClickOpen}>
              {loggedIn ? (
                <p style={{ color: "white" }}>My Account</p>
              ) : (
                <Button
                  sx={{
                    background: "white",
                    color: "blue",
                  }}
                >
                  Login
                </Button>
              )}
            </Button>
            <form>
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
                          Get access to your Orders, Wishlist and
                          Recommendations
                        </Typography>
                        <img
                          style={{ marginTop: "220px" }}
                          src={Login}
                          alt=""
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={7} sm={7} md={7} lg={7}>
                      <Box sx={{ padding: "56px 35px 16px" }}>
                        <div id="recaptcha-container"></div>
                        <TextField
                          sx={{ width: "100%" }}
                          id="standard-basic"
                          label="Enter Email/Mobile Number"
                          variant="standard"
                          name="phone"
                          onChange={(event) => {
                            setPhone(event.target.value);
                          }}
                        />
                        <Typography
                          sx={{ fontSize: "15px", marginTop: "30px" }}
                        >
                          By continuing, you agree to Flipkart's Terms of Use
                          and Privacy Policy.
                        </Typography>
                        <Button
                          id="sign-in-button"
                          type="submit"
                          onClick={onSignInSubmit}
                          // onClick={onSignup}
                          sx={{
                            background: "rgb(251, 100, 27)",
                            color: "white",
                            width: "100%",
                            marginTop: "30px",
                          }}
                        >
                          Request OTP
                        </Button>
                        <Dialog
                          open={open2}
                          onClose={handleClose2}
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
                                    Get access to your Orders, Wishlist and
                                    Recommendations
                                  </Typography>
                                  <img
                                    style={{ marginTop: "220px" }}
                                    src={Login}
                                    alt=""
                                  />
                                </Box>
                              </Grid>
                              <Grid item xs={7} sm={7} md={7} lg={7}>
                                <Box sx={{ padding: "56px 35px 16px" }}>
                                  <div id="recaptcha-container"></div>
                                  <TextField
                                    sx={{ width: "100%" }}
                                    id="standard-basic"
                                    label="EnterOtp"
                                    variant="standard"
                                    name="otp"
                                    onChange={(event) => {
                                      setOtp(event.target.value);
                                    }}
                                  />
                                  <Typography
                                    sx={{ fontSize: "15px", marginTop: "30px" }}
                                  >
                                    By continuing, you agree to Flipkart's Terms
                                    of Use and Privacy Policy.
                                  </Typography>
                                  <Button
                                    onClick={onSubmitOTP}
                                    sx={{
                                      background: "rgb(251, 100, 27)",
                                      color: "white",
                                      width: "100%",
                                      marginTop: "30px",
                                    }}
                                  >
                                    Login
                                  </Button>

                                  <Box
                                    sx={{ display: "flex", marginTop: "220px" }}
                                  >
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
            </form>
            <Typography
              onClick={handleSeller}
              sx={{ marginLeft: "3%", fontSize: "1.3rem" }}
            >
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
              <MenuItem onClick={handleNotPrefference}>
                Notification Perference
              </MenuItem>
              <MenuItem onClick={handleCustomerCare}>
                24 X 7 Customore Care
              </MenuItem>
              <MenuItem onClick={handleAdvertise}>Advertise</MenuItem>
              <MenuItem onClick={handleDownloadApp}>Download App</MenuItem>
            </Menu>
            <Typography
              onClick={handleCarts}
              sx={{ marginLeft: "3%", fontSize: "1.2rem" }}
            >
              Cart
              <span style={{ marginBottom: "4%" }}>{totalproducts}</span>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default NavData;

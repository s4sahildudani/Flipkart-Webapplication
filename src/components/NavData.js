import React ,{useState} from 'react';
import {AppBar ,Box,Typography,Toolbar ,Container ,Grid ,Dialog ,InputBase,Paper ,Button ,IconButton ,TextField} from "@mui/material";
import Login from "../images/login.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
function NavData() {
    const [open, setOpen] =useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      }; 
  return (
    <div>
        <AppBar position="static">
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
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
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
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{}}
              >
                <Grid container textAlign="center">
                  <Box
                    sx={{ display: "flex", maxWidth: "100%", height: "530px" }}
                  >
                    <Grid items xs={5} sm={5} md={5} lg={5}>
                      <Box
                        sx={{
                          background: "#2874f0",
                          fontSize: "15px",
                          padding: "40px 33px",
                          height: "85%",
                        }}
                      >
                        <Typography sx={{ color: "white", fontSize: "15px" }}>
                          Login
                        </Typography>

                        <Typography
                          sx={{
                            color: "white",
                            fontSize: "1rem",
                            marginTop: "20%",
                          }}
                        >
                          Get access to your Orders, Wishlist and
                          Recommendations
                        </Typography>
                        <img style={{ marginTop: "20%" }} src={Login} alt="" />
                      </Box>
                    </Grid>
                    <Grid items xs={7} sm={7} md={7} lg={7}>
                      <Box sx={{ padding: "56px 35px 16px" }}>
                        <TextField
                          sx={{ width: "100%" }}
                          id="standard-basic"
                          label="Enter Email/Mobile Number"
                          variant="standard"
                        />
                        <Typography>
                          By continuing, you agree to Flipkart's Terms of Use
                          and Privacy Policy.
                        </Typography>
                        <Button
                          sx={{
                            background: "orange",
                            color: "white",
                            width: "100%",
                          }}
                        >
                          Request OTP
                        </Button>
                        <Box sx={{display:"flex"}}>
                          <Typography>New to Flipkart? </Typography>
                          <Typography>Create an account</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
                <Box></Box>
              </Dialog>
              <Typography sx={{ marginLeft: "3%", fontSize: "1.3rem" }}>
                Become a seller
              </Typography>
              <Typography sx={{ marginLeft: "3%", fontSize: "1.2rem" }}>
                More
              </Typography>
              <Typography sx={{ marginLeft: "3%", fontSize: "1.2rem" }}>
                Cart
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    </div>
  )
}

export default NavData
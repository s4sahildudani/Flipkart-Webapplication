import React from "react";
import FlipkartSeller from "../images/flipkarSellernav.svg";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Box,
  Typography,
  Container,
  Button,
  TextField,
  Modal,
} from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth } from '../firebase.conflig';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "1%",
};
function NavSeller() {
  const [open, setOpen] = React.useState(false);
  const navigate  = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const  handleService = () =>{
      navigate("/sellerServices")
  }
  const handleResource = () =>{

    navigate("/sellerResource")
  }
  const handleSellers = () =>{

    navigate("/sellauth")
  }

  function reCaptchaVerify () {
    
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      callback: (response) => {
         onSignup()
      },
      'expired-callback': () => {
       
      }
    }, auth);
  
}

function onSignup(event) {
  event.preventDefault()
  
  reCaptchaVerify ()
  const appVerifier = window.recaptchaVerifier 
  const PhoneNumber = "=91 7066885712"
  debugger
  signInWithPhoneNumber(auth,PhoneNumber,  appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    alert("Otp send Successfully")
    // ...
  }).catch((error) => {
    // Error; SMS not sent
    // ...
  });
}
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
              <Typography sx={{ color: "black", fontSize: "15px" }}>
                Fee Structure
              </Typography>
              <Typography
                 onClick={handleService}
                sx={{ color: "black", fontSize: "15px", marginLeft: "10%" }}
              >
                Services
              </Typography>
              <Typography
               onClick={handleResource}
                sx={{ color: "black", fontSize: "15px", marginLeft: "10%" }}
              >
                Resources
              </Typography>
              <Typography
                sx={{ color: "black", fontSize: "15px", marginLeft: "10%" }}
              >
                FAQs
              </Typography>
              <Typography
                sx={{ color: "black", fontSize: "15px", marginLeft: "10%" }}
              >
                Shopsy
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Button
              onClick={handleSellers}
                sx={{
                  background: "rgb(255, 204, 0)",
                  color: "white",
                  width: "180px",
                }}
              >
                StartSelling
              </Button>
              <Button
                onClick={handleOpen}
                sx={{
                  background: "rgb(0, 102, 204)",
                  color: "white",
                  marginLeft: "10%",
                  width: "180px",
                }}
              >
                Login
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Login
                    </Typography>
                    <CloseIcon
                      sx={{ marginLeft: "80%" }}
                      onClick={handleClose}
                    />
                  </Box>

                  <hr />
                  <Typography
                    sx={{ marginTop: "4%" }}
                    id="modal-modal-description"
                  >
                    UserName and 10 Digits password
                  </Typography>
                  <TextField
                    fullWidth
                    label="Enter UserName or Email or Phone Number "
                  />
                  <Box sx={{ display: "flex", marginTop: "5%" }}>
                    <Typography sx={{ color: "rgb(71, 160, 251)" }}>
                      Register for New Account
                    </Typography>
                    <Button
                    onClick={onSignup}
                      sx={{
                        marginLeft: "40%",
                        background: "rgb(71, 160, 251)",
                        color: "white",
                      }}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
}

export default NavSeller;

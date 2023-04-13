import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import TabPanel from "@mui/lab/TabPanel";
import CartLogin from "../images/cartlogin.jpg";
import { Typography, Button, Grid } from "@mui/material";
import CartGrocery from "../images/cartGrocery.jpg";
import NavData from "../components/NavData";
import { auth, db } from "../firebase.conflig";
import CardProduct from "../components/CardProduct";
function Cart() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [cartProducts, setCartProducts] = useState([]);
  console.log("cartproductDatataat", cartProducts);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("cart " + user.uid).onSnapshot((snapshot) => {
          const newcartProduct = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setCartProducts(newcartProduct);
        });
      } else {
        console.log("user is not signed in to retrieve the cart");
      }
    });
  }, []);
  return (
    <>
      <NavData />
      <div style={{ background: "silver", padding: "4%", height: "737px" }}>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            background: "white",
            marginTop: "2%",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                background: "white",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab sx={{ marginLeft: "500px" }} label="FlipKart" value="1" />
                <Tab sx={{ marginLeft: "450px" }} label="Grocery" value="2" />
              </TabList>
            </Box>
            <TabPanel
              value="1"
              sx={{ justifyContent: "center", textAlign: "center" }}
            >
              {/* <img src={CartLogin} alt="" height="20%"  width="20%"  /> */}
              {/* <Typography>Missing cart items?</Typography>
             <Typography>Login to see you added previously</Typography>
             <Button
                          sx={{
                            background: "rgb(251, 100, 27)",
                            color: "white",
                            width: "10%",
                            marginTop:"30px"
                          }}
                        >
                          Login
                        </Button> */}

              {cartProducts.length > 1 &&  (
                          <div><h1>Cart</h1>
                          <div><CardProduct cartProducts={cartProducts} /></div>
                          </div>
                        )} 
                        
              {cartProducts.length < 1 && (
                <Grid>
                  <Typography variant="h3">Please wait....</Typography>
                </Grid>
              )}
            </TabPanel>
            <TabPanel
              value="2"
              sx={{ justifyContent: "center", textAlign: "center" }}
            >
              <img src={CartGrocery} alt="" height="20%" width="20%" />
              <Typography>Missing cart items?</Typography>
              <Typography>Login to see you added previously</Typography>
              <Button
                sx={{
                  background: "#2874f0",
                  color: "white",
                  width: "10%",
                  marginTop: "30px",
                }}
              >
                ShopNow
              </Button>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}

export default Cart;

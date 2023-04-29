import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Typography, Button, Grid } from "@mui/material";
import CartGrocery from "../images/cartGrocery.jpg";
import NavData from "../components/NavData";
import { auth, db } from "../firebase.conflig";
import CardProduct from "../components/CardProduct";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StripeContainer from "../components/StripeContainer";
import PaymentForm from "../components/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "./Checkoutform";
function Cart() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const [cartProducts, setCartProducts] = useState([]);
  const [sessionData, setsessionData] = useState([]);
  const ids = cartProducts.map((product) => console.log("fineid", product.Id));
  console.log("CARTPRODUCTSid", cartProducts.ID);
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
  // qty for seprate array
  const qty = cartProducts.map((cartProduct) => {
    return cartProduct.qty;
  });
  console.log("qty", qty);
  // reducing method for Totalqty
  const reducerofqty = (accumulator, currentvalue) =>
    accumulator + currentvalue;
  const Totalqty = qty.reduce(reducerofqty, 0);
  console.log("Totalqty", Totalqty);
  const price = cartProducts.map((cartProduct) => {
    return cartProduct.TotalProductPrice;
  });
  const reducerofprice = (accumulator, currentvalue) =>
    accumulator + currentvalue;
  const totalprice = price.reduce(reducerofprice, 0);
  console.log("Totalprice", totalprice);
  const navigate = useNavigate();

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartProducts.items }),
      
    })
      .then((response) => {
        console.log("respooo",response)
        return response.json();
        
      })
      .then((response) => {
        console.log("responseDataaa", response);

        auth.onAuthStateChanged((user) => {
          if (user) {
            const ids = cartProducts.map((product) =>
              console.log("fine45id", product.Id)
            );
            const cartRef = db.collection("cart " + user.uid);
            cartProducts.forEach((product) => {
              cartRef
                .doc(product.ID)
                .delete()
                .then(() => {
                  console.log("Product deleted from cart successfully");
                  window.location.assign(response.url);
                })
                .catch((error) => {
                  console.log("Error deleting product from cart: ", error);
                });
            });
          }
        });

        // window.location.assign(response.url);
        // window.location.assign(response.url);

        // if(response.url){
        //   window.location.assign(response.url);
            console.log("responsesession",response.session)
            setsessionData(setsessionData);
        // }
      });
  };
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get("session_id");
  console.log("sessionId", sessionId);
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
              {cartProducts.length > 0 && (
                <>
                  <div>
                    <h1>Cart</h1>
                    <Grid sx={{ display: "flex" }}>
                      <CardProduct  cartProducts={cartProducts} />
                    </Grid>
                  </div>
                  <Grid>
                    <Typography>Cart Summary</Typography>
                    <Box sx={{ display: "flex", textAlign: "center" }}>
                      <Typography>Total number of Products :</Typography>{" "}
                      <Typography>{Totalqty}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", textAlign: "center" }}>
                      <Typography>Total Price to Pay :</Typography>{" "}
                      <Typography> $ {totalprice}</Typography>
                    </Box>

                    <Button onClick={checkout}>Buy</Button>
                  </Grid>
                </>
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

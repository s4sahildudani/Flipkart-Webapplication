import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import CartLogin from "../images/cartlogin.jpg";
import { Typography, Button, Grid } from "@mui/material";
import CartGrocery from "../images/cartGrocery.jpg";
import NavData from "../components/NavData";
import { auth, db } from "../firebase.conflig";
import CardProduct from "../components/CardProduct";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const handleToken = async(token) =>{
    const cart = {name:"All Products" ,totalprice};
    const response = await axios.post('http://localhost:8080/checkout',{
      token,cart
    })
    console.log(response);
    let {status} = response.data;
    if(status==="success"){
      navigate("/")
      alert("Your order Placed Successfully")
    }
    else{
      alert("Something is wrong in checkout")
    }
  }
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

              {cartProducts.length > 0 && (
                <>
                  <div>
                    <h1>Cart</h1>
                    <Grid sx={{ display: "flex" }}>
                      <CardProduct cartProducts={cartProducts} />
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
                    <StripeCheckout
                      stripeKey="pk_test_51Mxc4RSHVreC2R70y3hxf7cCeADKPfRZKTCIgy017b0XHLrTbq1Pm3VMcX5F6JMxAIrCVLW0nepM2Q3wXUUoeBkz00nPSVieaB"
                      token={handleToken}
                      billingAddress
                      shippingAddress
                      name="All Products"
                      amount={totalprice * 100}
                    ></StripeCheckout>
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

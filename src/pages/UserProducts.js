import React, { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { db, auth } from "../firebase.conflig";
import IndividualProduct from "../components/IndividualProduct";
import { useNavigate } from "react-router-dom";
function UserProducts() {
  const [Products, setProducts] = useState([]);
  const navigate = useNavigate();
  const getProducts = async () => {
    const products = await db.collection("Products").get();
    const productsArray = [];
    for (var snap of products.docs) {
      var data = snap.data();
      data.Id = snap.id;
      productsArray.push({
        ...data,
      });
      if (productsArray.length === products.docs.length) {
        setProducts(productsArray);
      }
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  function Getuseruid() {
    const [uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
    return uid;
  }
  const uid = Getuseruid();
  let Product;
  const addtoCart = (product) => {
    if (uid !== null) {
      Product=product;
      Product['qty']=1;
      Product['TotalProductPrice'] = product.qty * product.productPrice;
      db.collection('cart '   + uid).doc(product.Id).set(Product).then(()=>{
        console.log("Successfully added to cart")
      })
    } else {
      navigate("/login");
    }
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={12} lg={12} md={12}>
        <Box>
          {Products.length > 0 && (
            <Grid>
              <Typography variant="h3">Products</Typography>
              <Grid sx={{display:"flex"}}>
              {Products.map((individualproduct) => (
                
                <IndividualProduct
                  individualproduct={individualproduct}
                  key={individualproduct.Id}
                  addtoCart={addtoCart}
                />
                
              ))}
              </Grid>
            </Grid>
          )}
          {Products.length < 1 && (
            <Grid >
              <Typography variant="h3">Please wait....</Typography>
            </Grid>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default UserProducts;

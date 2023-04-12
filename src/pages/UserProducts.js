import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Card, Button } from "@mui/material";
import { db, storage } from "../firebase.conflig";
import IndividualProduct from "../components/IndividualProduct";
function UserProducts() {
  const [Products, setProducts] = useState([]);
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
  console.log("Products 456", Products);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Grid container>
      <Grid item xs={12} sm={12} lg={12} md={12}>
        <Box>
          {Products.length > 0 && (
          <Grid>
            <Typography variant="h3">Products</Typography>
            {Products.map((individualproduct) => (
              <IndividualProduct
                individualproduct={individualproduct}
                key={individualproduct.Id}
              />
            ))}
          </Grid>
           )}
          {Products.length < 1 && (
            <Grid>
              <Typography variant="h3">Please wait....</Typography>
            </Grid>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default UserProducts;

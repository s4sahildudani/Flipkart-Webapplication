import React from "react";
import IndividualCartProduct from "./IndividualCartProduct";
import { Grid } from "@mui/material";
function CardProduct({ cartProducts, sessionData }) {
  console.log("cardData", cartProducts);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {cartProducts.map((cartProduct) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} >
<IndividualCartProduct
              key={cartProduct.Id}
              cartProduct={cartProduct}
              sessionData={sessionData}
            />
            </Grid>
            
          );
        })}
      </div>
    </>
  );
}

export default CardProduct;

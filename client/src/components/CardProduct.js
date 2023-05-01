import React from "react";
import IndividualCartProduct from "./IndividualCartProduct";

function CardProduct({ cartProducts, sessionData }) {
  console.log("cardData", cartProducts);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {cartProducts.map((cartProduct) => {
          return (
            <IndividualCartProduct
              key={cartProduct.Id}
              cartProduct={cartProduct}
              sessionData={sessionData}
            />
          );
        })}
      </div>
    </>
  );
}

export default CardProduct;

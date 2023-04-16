import React from 'react';
import IndividualCartProduct from './IndividualCartProduct'

function CardProduct({cartProducts}) {
  console.log("cardData",cartProducts);
  return (
    <>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        {cartProducts.map((cartProduct) => {
          return (
            <IndividualCartProduct key={cartProduct.Id} cartProduct={cartProduct} />
          );
        })}
      </div>
    </>
  );
}

export default CardProduct;

import React from 'react';
import { Grid ,Card ,Box,Typography} from '@mui/material'
import IndividualCartProduct from './IndividualCartProduct'

function CardProduct({cartProducts}) {
  console.log("cardData",cartProducts);
  return (
    <>
      <div>
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

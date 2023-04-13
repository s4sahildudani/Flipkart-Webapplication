import React from 'react';
import { Grid ,Card ,Box,Typography} from '@mui/material'
function IndividualCartProduct({cartProduct}) {
    console.log("cartprodhyhbchb",cartProduct)
  return (
    <>
    <Grid key={cartProduct.ID}>
      <Card>
          <img src={cartProduct.url} alt="" />
          <Box><Typography>{cartProduct.productBrand}</Typography></Box>
          <Box><Typography>{cartProduct.productDesc}</Typography></Box>
          <Box><Typography>{cartProduct.productPrice}</Typography></Box>
          <Box><Typography>{cartProduct.qty}</Typography></Box>
          <Box><Typography>{cartProduct.productColor}</Typography></Box>
          <Box><Typography>{cartProduct.productSize}</Typography></Box>
      </Card>
    </Grid>
    </>
  )
}

export default IndividualCartProduct
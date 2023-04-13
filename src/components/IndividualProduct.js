import React from 'react';
import { Card, Grid, Box, Typography, Button } from '@mui/material';

function IndividualProduct({ individualproduct ,addtoCart }) {
  const handleTocart = () =>{
    addtoCart(individualproduct);
 }
  console.log("indiproduct", individualproduct);
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Box sx={{display:"flex"}}>
        <Card sx={{width:"40%"}}>
          <Box><img src={individualproduct.url} width="80%" height="50%" alt="" /></Box>
          <Box><Typography>{individualproduct.productDesc}</Typography></Box>
          <Box><Typography>{individualproduct.productSize}</Typography></Box>
          <Box><Typography>{individualproduct.productPrice}</Typography></Box>
          <Box><Typography>{individualproduct.productColor}</Typography></Box>
          <Box><Typography>{individualproduct.productBrand}</Typography></Box>
          <Box><Button onClick={handleTocart} sx={{ background: "red", color: "white" }}>Add to Cart</Button></Box>
        </Card>
        </Box>
        
      </Grid>
    </Grid>
  )
}

export default IndividualProduct

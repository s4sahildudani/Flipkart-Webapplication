import React from 'react'
import { Box ,Card ,Typography ,Button } from '@mui/material'
function IndividualFilterProduct({IndividualFilterProduct,addtoCart}) {
  console.log("individualproductData",IndividualFilterProduct);
  console.log("addtocart",addtoCart);
  const handleAddToCart = () =>{
    addtoCart(IndividualFilterProduct)
  }
  return (
    <div>
      <Card sx={{border:"2px solid black",width:"250px" ,marginLeft:"7%",padding:"5%"}}>
          <img src={IndividualFilterProduct.url} alt="" />
          <Box><Typography>{IndividualFilterProduct.productBrand}</Typography></Box>
          <Box><Typography>{IndividualFilterProduct.productDesc}</Typography></Box>
          <Box><Typography>{IndividualFilterProduct.productPrice}</Typography></Box>
          <Box><Typography>{IndividualFilterProduct.qty}</Typography></Box>
          <Box><Typography>{IndividualFilterProduct.productColor}</Typography></Box>
          <Box><Typography>{IndividualFilterProduct.productSize}</Typography></Box>
          <Box><Button onClick={handleAddToCart} sx={{ background: "red", color: "white" }}>Added To Cart</Button></Box>
      </Card>
    </div>
  )
}

export default IndividualFilterProduct
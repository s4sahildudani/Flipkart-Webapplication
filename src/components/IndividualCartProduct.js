import React from 'react';
import { Grid ,Card ,Box,Typography ,Button} from '@mui/material';
import { auth, db } from "../firebase.conflig";
function IndividualCartProduct({cartProduct}) {
    console.log("cartprodhyhbchb",cartProduct);
    const handleCartDelete = () =>{
       auth.onAuthStateChanged(user=>{
         if(user){
          db.collection("cart " + user.uid).doc(cartProduct.ID).delete().then(()=>{
            console.log("Cart is Successfully Deleted")
          })
         }
       })
    }
  return (
    <>
    <Grid sx={{display:"flex",justifyContent:"space-between"}}  key={cartProduct.ID}>
      <Card sx={{border:"2px solid black",width:"250px" ,marginLeft:"7%",padding:"5%"}}>
          <img src={cartProduct.url} alt="" />
          <Box><Typography>{cartProduct.productBrand}</Typography></Box>
          <Box><Typography>{cartProduct.productDesc}</Typography></Box>
          <Box><Typography>{cartProduct.productPrice}</Typography></Box>
          <Box><Typography>{cartProduct.qty}</Typography></Box>
          <Box><Typography>{cartProduct.productColor}</Typography></Box>
          <Box><Typography>{cartProduct.productSize}</Typography></Box>
          <Box><Button onClick={handleCartDelete} sx={{ background: "red", color: "white" }}>Delete</Button></Box>
      </Card>
    </Grid>
    </>
  )
}

export default IndividualCartProduct
import React, { useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import {db,storage} from '../firebase.conflig';
function AddProducts() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productColor, setProductColor] = useState("");
  const [imageError, setImageError] = useState("");
  const [updateError, setupdateError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
   const types = ['image/jpg' ,'image/jpeg' ,'image/png' ,'image/PNG'];
  function handleProductImage(event) {
    let selectedFiles = event.target.files[0];
    if(selectedFiles){
      if(selectedFiles&&types.includes(selectedFiles.type)){
          setProductImage(selectedFiles);
          setImageError("");
      }
      else{
        setProductImage(null);
        setImageError("Please Enter A Valid type jpg or png")
      }
    }
    else{
      console.log("Please select Your file");
    }
  }
  function handleAddProducts (event) {
    event.preventDefault();
    // console.log(productBrand,productColor,productName,productSize,productDesc);
    // console.log(productImage);
    const uploadTask = storage.ref(`product-images/${productImage.name}`).put(productImage);

    uploadTask.on('state-Changed',snapshot =>{
      const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
      console.log(progress)
    },error => setupdateError(error.message,()=>{
      storage.ref('product-images').child(productImage.name).getDownloadURL().then(url=>{
        db.collections('Products').add({
          productBrand,
          productColor,productDesc,productSize,url
        }).then(() =>{
          setSuccessMsg("Product Added Successfully");
          setProductBrand("");
          setProductColor("");
          setProductDesc("");
          setProductSize("");
          document.getElementById('file').value="";
          setImageError('');
          setupdateError('');
          setTimeout(()=>{
            setSuccessMsg('')
          },3000)
        }).catch(error=>setupdateError(error.message))
      })
    })
    )
  }
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
          <Box>
          {successMsg &&<>
              <Grid>
                <Typography sx={{color:"green"}}>{successMsg}</Typography>
              </Grid>
              <br /><br />
            </>}
            <form onSubmit={handleAddProducts}>
            <Typography variant="h3">Add Product</Typography>
            <Typography>Add Name</Typography>
            <TextField
              value={productName}
              onChange={(event) => {
                setProductName(event.target.value);
              }}
              label="Enter Your Product Name"
            />
            <Typography>Add Description</Typography>
            <TextField
              value={productDesc}
              onChange={(event) => {
                setProductDesc(event.target.value);
              }}
              label="Enter Your Product Description"
            />
            <Typography>Add Brand</Typography>
            <TextField
              value={productBrand}
              onChange={(event) => {
                setProductBrand(event.target.value);
              }}
              label="Enter Your Product Brand"
            />
            <Typography>Add Size</Typography>
            <TextField
              value={productSize}
              onChange={(event) => {
                setProductSize(event.target.value);
              }}
              label="Enter Your Product Size"
            />
            <Typography>Add Color</Typography>
            <TextField
              value={productColor}
              onChange={(event) => {
                setProductColor(event.target.value);
              }}
              label="Enter Your Product Color"
            />
            <Typography>Add Product Image</Typography>
            <input id="file" onChange={handleProductImage} type="file" />
            <br /><br />
            {imageError &&<>
              <Grid>
                <Typography sx={{color:"red"}}>{imageError}</Typography>
              </Grid>
            </>}
            <br />
            <Button type="submit" sx={{ background: "blue", color: "white" }}>Login</Button>
            <br /><br />
            {updateError &&<>
              <Grid>
                <Typography sx={{color:"red"}}>{updateError}</Typography>
              </Grid>
            </>}
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AddProducts;

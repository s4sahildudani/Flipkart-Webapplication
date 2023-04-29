import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase.conflig";

function AddProducts() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productColor, setProductColor] = useState("");
  const [imageError, setImageError] = useState("");
  const [updateError, setupdateError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const navigate = useNavigate();
  const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];

  function handleProductImage(event) {
    let selectedFiles = event.target.files[0];
    if (selectedFiles) {
      if (selectedFiles && types.includes(selectedFiles.type)) {
        setProductImage(selectedFiles);
        setImageError("");
      } else {
        setProductImage(null);
        setImageError("Please Enter A Valid type jpg or png");
      }
    } else {
      console.log("Please select Your file");
    }
  }

  function handleAddProducts(event) {
    event.preventDefault();
    if (productImage) {
      const uploadTask = storage
        .ref(`product-images/${productImage.name}`)
        .put(productImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Progress", progress);
        },
        (error) => setupdateError(error.message),
        () => {
          storage
            .ref("product-images")
            .child(productImage.name)
            .getDownloadURL()
            .then((url) => {
              console.log("url", url, productImage, productName);
              db.collection("Products")
                .add({
                  productBrand,
                  productSize,
                  productColor,
                  productDesc,
                  productPrice,
                  url,
                })
                .then(() => {
                  setSuccessMsg("Product Added Successfully");
                  navigate("/userProducts");
                  setProductBrand("");
                  setProductColor("");
                  setProductDesc("");
                  setProductSize("");
                  setProductPrice("");
                  setProductImage(null);
                  document.getElementById("file").value = "";
                  setImageError("");
                  setupdateError("");
                  setTimeout(() => {
                    setSuccessMsg("");
                  }, 3000);
                })
                .catch((error) => setupdateError(error.message));
            });
        }
      );
    } else {
      setupdateError("Please select an image for the product.");
    }
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
          <Box>
            {successMsg && (
              <>
                <Grid>
                  <Typography sx={{ color: "green" }}>{successMsg}</Typography>
                </Grid>
                <br />
                <br />
              </>
            )}
            <form onSubmit={handleAddProducts}>
              <Typography variant="h3">Add Product</Typography>
              <Typography>Add Name</Typography>
              <TextField
                sx={{ width: "70%" }}
                value={productName}
                onChange={(event) => {
                  setProductName(event.target.value);
                }}
                label="Enter Your Product Name"
              />
              <Typography>Add Description</Typography>
              <TextField
                sx={{ width: "70%" }}
                value={productDesc}
                onChange={(event) => {
                  setProductDesc(event.target.value);
                }}
                label="Enter Your Product Description"
              />
              <Typography>Add Brand</Typography>
              <TextField
                sx={{ width: "70%" }}
                value={productBrand}
                onChange={(event) => {
                  setProductBrand(event.target.value);
                }}
                label="Enter Your Product Brand"
              />
              <Typography>Add Size</Typography>
              <TextField
                sx={{ width: "70%" }}
                value={productSize}
                onChange={(event) => {
                  setProductSize(event.target.value);
                }}
                label="Enter Your Product Size"
              />
              <Typography>Add Price</Typography>
              <TextField
                sx={{ width: "70%" }}
                value={productPrice}
                onChange={(event) => {
                  setProductPrice(event.target.value);
                }}
                label="Enter Your Product Size"
              />
              <Typography>Add Color</Typography>
              <TextField
                sx={{ width: "70%" }}
                value={productColor}
                onChange={(event) => {
                  setProductColor(event.target.value);
                }}
                label="Enter Your Product Color"
              />
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Age"
                onChange={handleChange}
                sx={{width:"70%"}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Shoes</MenuItem>
                <MenuItem value={20}>Mobiles</MenuItem>
                <MenuItem value={30}>Electronics</MenuItem>
              </Select>
              <Typography>Add Product Image</Typography>
              <input id="file" onChange={handleProductImage} type="file" />
              <br />
              <br />

              {imageError && (
                <>
                  <Grid>
                    <Typography sx={{ color: "red" }}>{imageError}</Typography>
                  </Grid>
                </>
              )}
              <br />
              <Button type="submit" sx={{ background: "blue", color: "white" }}>
                Submit
              </Button>
              <br />
              <br />
              {updateError && (
                <>
                  <Grid>
                    <Typography sx={{ color: "red" }}>{updateError}</Typography>
                  </Grid>
                </>
              )}
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AddProducts;

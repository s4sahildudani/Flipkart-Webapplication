import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  TextField,
  Menu,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { storage } from "../firebase.conflig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
function SellTshirts() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const SubmitData = () => {
    console.log("Values");
  };
  const [image, setImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "/images");

  const uploadImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then(() => {
      alert("Image Uploaded");
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          if (!imageList.includes(url)) {
            setImageList((prev) => [...prev, url]);
          }
        });
      });
    });
  }, []);
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ padding: "4%", bgcolor: "#d5d7db" }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "15px",

                "@media (min-width:600px)": {
                  fontSize: "25px",
                },
                "@media (min-width:960px)": {
                  fontSize: "30px ",
                },
              }}
            >
              Flipkart Help Center | 24x7 Customer Care Support
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Enter Your Brand Details
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: "3%" }}>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Box sx={{ padding: "3%" }}>
                <Card
                  sx={{ padding: "5%", height: "500px", overflowY: "auto" }}
                >
                  <Typography sx={{ marginTop: "10%" }}>
                    Types of issues
                  </Typography>
                  <Box sx={{ marginTop: "15%" }}>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Help with your issues
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Help with your order
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Help with other issues
                    </Typography>
                  </Box>
                  <Typography sx={{ marginTop: "15%" }}>HELP TOPICS</Typography>
                  <Box>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Order
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Cancellations and Returns
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Payment
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Bajaj Finserv EMI
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      SBI Pre-approved loan
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Credit Card No Cost EMI
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Flipkart Axis Bank Credit Car
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Shopping
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Wallet
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Others
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Shipping
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Flipkart First
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Swlling on Flipkart
                    </Typography>
                    <Typography sx={{ marginTop: "10%", marginLeft: "6%" }}>
                      Product Reviews
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <Box>
                <Card sx={{ padding: "2%", marginTop: "0.5%" }}>
                  <Typography sx={{ marginTop: "3%" }}>
                    Enter Your Brand Name
                  </Typography>
                  <TextField />
                  <Typography sx={{ marginTop: "3%" }}>
                    Enter Your Brand Image
                  </Typography>
                  <input
                    type="file"
                    onChange={(event) => {
                      setImage(event.target.files[0]);
                    }}
                  />
                  <Button onClick={uploadImage}>Upload Image</Button>
                  <Typography sx={{ marginTop: "3%" }}>
                    Enter Your Brand Price
                  </Typography>
                  <TextField />
                  <Typography sx={{ marginTop: "3%" }}>
                    Enter Your Size
                  </Typography>
                  <TextField />
                  <Box sx={{ minWidth: "30%", marginTop: "4%" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>L</MenuItem>
                        <MenuItem value={20}>XL</MenuItem>
                        <MenuItem value={30}>XXl</MenuItem>
                      </Select>
                      <Button
                        sx={{
                          backgroundColor: "blue",
                          color: "white",
                          marginTop: "3%",
                        }}
                        onClick={SubmitData}
                      >
                        Submit
                      </Button>
                    </FormControl>
                  </Box>
                </Card>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default SellTshirts;

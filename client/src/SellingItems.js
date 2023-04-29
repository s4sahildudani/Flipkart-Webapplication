import React, { useEffect } from "react";
import { useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import { storage } from "./firebase.conflig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function SellingItems() {
  const [image, setImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "/images");

  const uploadImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then(() => {
      alert("Image Uploaded");
    }).catch((error) => {
      console.log("Error occurred while performing the checkout process: ", error);
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
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <Box>
            <input
              type="file"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
            />
            <Button onClick={uploadImage}>Upload Image</Button>
            {/* alt={`image ${index}`} */}
            {imageList.map((url, index) => {
              return <img key={`${url}_${index}`} src={url} alt="List of images " />;
            })}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default SellingItems;

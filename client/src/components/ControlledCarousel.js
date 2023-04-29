import React from "react";
import Carousel from "react-elastic-carousel";
import Shoes from "../images/shoes.jpg";
import Guitar from "../images/guitar.jpg";
import Cooktops from "../images/Cooktops.jpg";
import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function ControlledCarousel() {
  const navigate = useNavigate();
  
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 700, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const handleCard = () =>{
    navigate("/itemsdata")
  }
  return (
    <div style={{ marginTop: "3%" }}>
      <Carousel breakPoints={breakPoints}>
        <Card onClick={handleCard}>
          <img src={Shoes} alt="" />
          <Typography>Puma Adidas and more</Typography>
          <Typography>Min 50% Off</Typography>
          <Typography>Running walking shoes</Typography>
        </Card>
        <Card>
          <img src={Cooktops} alt="" />
          <Typography>Cooktops and more</Typography>
          <Typography>Min 50% Off</Typography>
          <Typography>Cooktops</Typography>
        </Card>
        <Card>
          <img src={Guitar} alt="" />
          <Typography>Guitar</Typography>
          <Typography>Min 50% Off</Typography>
          <Typography>Guitar</Typography>
        </Card>
        <Card>
          <img src={Shoes} alt="" />
          <Typography>Puma Adidas and more</Typography>
          <Typography>Min 50% Off</Typography>
          <Typography>Running walking shoes</Typography>
        </Card>

        <Card>
          <img src={Shoes} alt="" />
          <Typography>Puma Adidas and more</Typography>
          <Typography>Min 50% Off</Typography>
          <Typography>Running walking shoes</Typography>
        </Card>
        <Card>
          <img src={Cooktops} alt="" />
          <Typography>Cooktops and more</Typography>
          <Typography>Min 50% Off</Typography>
          <Typography>Cooktops</Typography>
        </Card>
        <Card>
          <img src={Guitar} alt="" />
          <Typography>Guitar</Typography>
          <Typography>Min 50% Off</Typography>
          <Typography>Guitar</Typography>
        </Card>
        <Card>
          <img src={Shoes} alt="" />
          <Typography>Puma Adidas and more</Typography>
          <Typography>Min 50% Off</Typography>
          <Typography>Running walking shoes</Typography>
        </Card>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;

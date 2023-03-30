import React from 'react';
import Carousel from "react-elastic-carousel";
import { Card, Typography } from "@mui/material";
import Carrier1 from '../images/CarrierCar1.webp';
import Carrier2 from '../images/CarrierCar2.webp';
import Carrier3 from '../images/CarrierCar3.webp';
import Carrier4 from '../images/CarrierCar4.webp';
// import Carrier5 from '../images/CarrierCar5.webp';

function Carreer() {
    const breakPoints = [
        { width: 700, itemsToShow: 1 },
        { width: 700, itemsToShow: 2 },
        { width: 700, itemsToShow: 3 },
        { width: 700, itemsToShow: 4 },
      ];
  return (
    <>
    <Carousel breakPoints={breakPoints}>
        <Card >
          <img src={Carrier1} alt="" />
          
        </Card>
        <Card>
          <img src={Carrier2} alt="" />
          
        </Card>
        <Card>
          <img src={Carrier3} alt="" />
          
        </Card>
        <Card>
          <img src={Carrier4} alt="" />
          
        </Card>

        <Card>
          <img src={Carrier4} alt="" />
          
        </Card>
      </Carousel>
    </>
  )
}

export default Carreer
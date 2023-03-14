import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-elastic-carousel';
import Card1 from "../images/card1.jpg";
import Card2 from "../images/card2.jpg";
import Card3 from "../images/card3.jpg";
import Carousel3 from '../images/Carousel3.jpg';
function ReactCarousel() {

  const breakPoints = [
     {width:"90%",itemsToShow:1},
     {width:"90%",itemsToShow:2},
     {width:"90%",itemsToShow:3},
     {width:"90%",itemsToShow:4}
  ]
  return (
    <div style={{marginTop:"3%"}}>
     <Carousel breakPoints={breakPoints}>
       <img src={Carousel3} alt="" Width="100%" />
       <img src={Carousel3} alt="" Width="100%" />
       <img src={Carousel3} alt="" Width="100%" />
       <img src={Carousel3} alt="" Width="100%" />
     </Carousel>
    </div>
  );
}

export default ReactCarousel;

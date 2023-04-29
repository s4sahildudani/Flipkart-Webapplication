import React from "react";
import Carousel from 'react-elastic-carousel';
import Carousel3 from '../images/Carousel3.jpg';
function ReactCarousel() {

  const breakPoints = [
  { width: 1900, itemsToShow: 1 },
  { width: 1900, itemsToShow: 2 },
  { width: 1900, itemsToShow: 3 },
  { width: 1900, itemsToShow: 4 }
];
  return (
    <div style={{marginTop:"1%"}}>
     <Carousel breakPoints={breakPoints}>
       <img src={Carousel3} alt="" width="100%" />
       <img src={Carousel3} alt="" width="100%" />
       <img src={Carousel3} alt="" width="100%" />
       <img src={Carousel3} alt="" width="100%" />
     </Carousel>
    </div>
  );
}

export default ReactCarousel;

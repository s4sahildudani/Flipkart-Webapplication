import React from "react";
import Carousel from 'react-elastic-carousel';
import Carousel3 from '../images/Carousel3.jpg';
function ReactCarousel() {

  const breakPoints = [
     {width:"90%",itemsToShow:1},
     {width:"90%",itemsToShow:2},
     {width:"90%",itemsToShow:3},
     {width:"90%",itemsToShow:4}
  ]
  return (
    <div style={{marginTop:"1%"}}>
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

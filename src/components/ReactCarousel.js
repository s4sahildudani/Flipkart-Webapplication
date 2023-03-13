import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
import Card1 from "../images/card1.jpg";
import Card2 from "../images/card2.jpg";
import Card3 from "../images/card3.jpg";
function ReactCarousel() {
  return (
    <div>
     <Carousel>
      <Carousel.Item>
        <img
          src={Card1}
          className="d-block w-100"
          alt=""
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Card2}
          className="d-block w-100"
          alt=""
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Card2}
          className="d-block w-100"
          alt=""
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ReactCarousel;

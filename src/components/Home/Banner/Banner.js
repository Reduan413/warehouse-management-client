import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../../image/slide1.png"
import slide2 from "../../../image/slide2.jpg"
import slide3 from "../../../image/slide3.jpg"
import slide4 from "../../../image/slide4.jpeg"

const Banner = () => {
  return (
    <Carousel style={{height:500}}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={slide1}
          alt="First slide"
          style={{height:500}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
          style={{height:500}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
          style={{height:500}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Four slide"
          style={{height:500}}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

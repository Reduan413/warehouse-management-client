import React from "react";
import { Button, Col } from "react-bootstrap";
import course from "../../../image/course.png";
import "./Product.css";

const Product = () => {
  return (
    <Col>
      <div className="home-courses">
        <div className="swiper-slide slide">
          <div className="image">
            <img src={course} alt="" />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
              cumque, nisi vel esse magni nobis.
            </p>
            <Button  className="btn btn-outline-success">
              read more
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Product;

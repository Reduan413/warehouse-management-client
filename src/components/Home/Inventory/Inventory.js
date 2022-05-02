import React from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Inventory.css";

const Inventory = ({ inventory }) => {
  const {_id, img, name, price, description, quantity, supplierName } = inventory;
  const navigate = useNavigate();

  const navigationToInventoryDetail= (id) => {
    navigate(`/inventory/${id}`)
  }
  return (
    <Col>
      <div className="home-courses">
        <div className="swiper-slide slide">
          <div className="image">
            <img src={img} alt="" />
            <h3>{name}</h3>
          </div>
          <div className="content">
            <h3>{name}</h3>
            <p>{description}</p>
            <h6>
              Price: {price} <small>Tk</small>{" "}
            </h6>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name : {supplierName}</p>

            <Button className="btn btn-outline-success" onClick={()=> navigationToInventoryDetail(_id)}>Update</Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Inventory;

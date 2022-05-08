import axios from "axios";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useInventoryDetail from "../../hooks/useInventoryDetail";

const InventoryDetail = () => {
  const { inventoryId } = useParams();

  const [inventory, setInvetory, fetchData] = useInventoryDetail(inventoryId);

  const {
    _id,
    img,
    email,
    name,
    price,
    description,
    quantity,
    supplierName,
    sold,
  } = inventory;
  const total = parseInt(quantity) + parseInt(sold);
  const handleDelivered = async (id) => {
    const newQuantity = parseInt(quantity) - 1;
    const newSold = parseInt(sold) + 1;
    const inventory = {
      // email: email,
      // name: name,
      // supplierName: supplierName,
      // description: description,
      // img: img,
      // price: price,
      quantity: newQuantity,
      sold: newSold,
    };
    //console.log(inventory);
    await axios
      .put(
        `https://morning-crag-28829.herokuapp.com/inventory/${id}`,
        inventory
      )
      .then((res) => {
        const { data } = res;
        //console.log(data);
      });
    //setInvetory(inventory);
    fetchData();
  };
  const handleRestock = async (e) => {
    e.preventDefault();
    const restockQuantity = e.target.restock.value;
    const newQuantity = parseInt(quantity) + parseInt(restockQuantity);
    const inventory = {
      // email: email,
      // name: name,
      // supplierName: supplierName,
      // description: description,
      // img: img,
      // price: price,
      quantity: newQuantity,
      sold: sold,
    };
    //console.log(inventory);
    await axios
      .put(
        `https://morning-crag-28829.herokuapp.com/inventory/${_id}`,
        inventory
      )
      .then((res) => {
        const { data } = res;
        //console.log(data);
        e.target.reset();
      });
    //setInvetory(inventory);
    fetchData();
  };
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col xs={9} md={10}>
              <h1>Inventory Name: {name}</h1>
            </Col>
            <Col xs={2} md={2}>
              <Link to="/manageinventory">
                <Button>Manage Inventory</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <div className="d-flex py-3">
            <Col>
              <div
                className="text-center  rounded w-75 m-auto p-3"
                style={{ backgroundColor: "#90c9ff" }}
              >
                <h3>Stock : {quantity}</h3>
              </div>
            </Col>
            <Col>
              <div
                className="text-center  rounded w-75 m-auto p-3"
                style={{ backgroundColor: "#ccffcc" }}
              >
                <h3>sold : {sold}</h3>
              </div>
            </Col>
            <Col>
              <div
                className="text-center  rounded w-75 m-auto p-3"
                style={{ backgroundColor: "#fdd023" }}
              >
                <h3>Total : {total}</h3>
              </div>
            </Col>
          </div>
        </Row>
        <Row classNameName="g-4 ">
          <Col xs={8}>
            <div className="card mb-3 border border-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={img}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Price: {price} <small>Tk</small>
                    </h5>
                    <p>{description}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier Name : {supplierName}</p>
                    <div className="text-end">
                      <Button
                        onClick={() => handleDelivered(_id)}
                        className="btn btn-outline-success"
                      >
                        Delivered
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            {/* <div className="border border-3 p-3 rounded">
              
            </div> */}
            <Form
              className="border border-3 p-3 rounded"
              onSubmit={handleRestock}
            >
              <Form.Group className="mb-3">
                <Form.Label>Restock Quantity</Form.Label>
                <Form.Control
                  name="restock"
                  placeholder="Enter The Item Restock Quantity "
                />
              </Form.Group>
              <div className="text-end">
                <Button type="submit">Restock</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InventoryDetail;

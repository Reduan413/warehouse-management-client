import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";

const AddInventory = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("email,name,supplier,description,img,price,quantity");
    }
    const inventory = {
      email: event.target.email.value,
      name: event.target.name.value,
      supplier: event.target.supplier.value,
      description: event.target.description.value,
      img: event.target.img.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };
    axios.post('http://localhost:5000/inventory',inventory)
    .then(res => {
        const {data} = res;
        if(data.insertedId){
            alert('Your order is booked!!!');
            event.target.reset();
          }
    })
    console.log(inventory);

    //setValidated(true);
  };

  return (
    <Container className="my-3">
      <h1>This is add invertory</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter Your Eamil"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Inventoury Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Enter Inventory Name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="supplier"
              placeholder="Enter Supplier Name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              name="description"
              placeholder="Description"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid description.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image URL"
              name="img"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Image URL.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              name="price"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Price.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Quantity"
              name="quantity"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid quantity.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="text-end">
          <Button type="submit">Submit form</Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddInventory;

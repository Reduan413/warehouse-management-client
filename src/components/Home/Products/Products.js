import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <Container className="mt-4">
        <h3>Our Products</h3>
        <hr />
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Product />
        ))}
      </Row>
    </Container>
  );
};

export default Products;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Inventory from "../Inventory/Inventory";

const Inventorys = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      await axios.get("products.json").then((res) =>{
        console.log(res);
        setProducts(res.data);
      })
    }
    fetchData();
  }
  ,[])
  return (
    <Container className="mt-4">
        <h3>Our Products</h3>
        <hr />
      <Row xs={1} md={3} className="g-4">
        {products.slice(2, 8).map((product) => (
          <Inventory key={product.id} product={product}/>
        ))}
      </Row>
      <div>
        <Link to="manageinventory"><Button>Manage Inventory</Button></Link>
      </div>
    </Container>
  );
};

export default Inventorys;

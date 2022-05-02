import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventorys from "../../../hooks/useInventorys";
import Inventory from "../Inventory/Inventory";

const Inventorys = () => {
  const [inventorys, setInvetorys] = useInventorys([]);

  return (
    <Container className="mt-4">
      <h3>Our Products</h3>
      <hr />
      <Row xs={1} md={3} className="g-4">
        {inventorys.slice(2, 8).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory} />
        ))}
        
      </Row>
      <div className="text-center">
        <Link to="manageinventory">
          <Button>Manage Inventory</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Inventorys;

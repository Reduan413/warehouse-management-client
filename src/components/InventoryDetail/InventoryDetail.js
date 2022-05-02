import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useInventoryDetail from "../../hooks/useInventoryDetail";

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const [inventory, setInvetory] = useInventoryDetail(inventoryId);
  return (
    <Container>
      <h1>hello inam {inventory.name}</h1>
      <Row classNameName="g-4">
        <Col xs={8}>
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src="..." className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default InventoryDetail;

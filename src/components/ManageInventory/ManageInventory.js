import { faAddressCard, faAngleRight, faHouseChimney, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Nav, Row, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useInventorys from "../../hooks/useInventorys";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [inventorys, setInvetorys] = useInventorys([]);
  const [user] = useAuthState(auth);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventorys.filter(
            (inventory) => inventory._id !== id
          );
          setInvetorys(remaining);
        });
    }
  };

  return (
    <>
      <Container>
        <Row xs={1} md={2}>
          <Col className="d-flex align-items-center">
          <Link to="/manageinventory" className="text-dark">
              <FontAwesomeIcon icon={faHouseChimney} size="2x" />
            </Link>
            <FontAwesomeIcon className="m-2" icon={faAngleRight} size="2x" />
            <h1 className="m-2"> ALL INVENTORY</h1>
          </Col>
          <Col>
            <div className="d-flex flex-row-reverse">
              <Nav>
                <Nav.Link as={Link} to="/addinventory">
                  <Button variant="dark">Add Item</Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/myinventorys">
                  <Button variant="dark">My Item</Button>
                </Nav.Link>
              </Nav>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="hr"></hr>
      <div className="container mt-2">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Supplier Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>sold</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inventorys.map((inventory) => (
              <tr>
                <td style={{ width: 100, height: 100 }}>
                  <img className="w-100" src={inventory.img} alt="" />
                </td>
                <td>{inventory.name}</td>
                <td>{inventory.supplierName}</td>
                <td>{inventory.price}</td>
                <td>{inventory.quantity}</td>
                <td>{inventory.sold}</td>
                <td className="cardBtn text-center m-0 ">
                  {user.email === inventory.email ? (
                    <Button
                      variant="danger"
                      className="deleteBtn text-danger"
                      onClick={() => handleDelete(inventory._id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                      Delete
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      disabled
                      className="deleteBtn text-danger"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                      Delete
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ManageInventory;

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useInventorys from "../../../hooks/useInventorys";
import "../../ManageInventory/ManageInventory.css";
const MyInventorys = () => {
  const [user] = useAuthState(auth);
  const [myInventorys, setMyInventorys] = useState([]);
  const [inventorys, setInvetorys] = useInventorys([]);
  const navigate = useNavigate();
  useEffect(() => {
    getMyInventory();
  }, [user]);
  const getMyInventory = async () => {
    const email = user?.email;
    const url = `http://localhost:5000/myinventory?email=${email}`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setMyInventorys(data);
    } catch (e) {}
  };

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
          getMyInventory();
        });
    }
  };
  return (
    <div className="container">
      <Row xs={1} md={3} className="g-2 m-2">
        {myInventorys.map((myInventory) => (
          <div key={myInventory?._id} className="card mb-3 m-1" style={{ maxWidth: 358 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={myInventory?.img}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{myInventory?.name}</h5>
                  <div className="card-text" style={{ lineHeight: 0.5 }}>
                    <p>
                      Price: {myInventory?.price} <small>Tk</small>{" "}
                    </p>
                    <p>Quantity: {myInventory?.quantity}</p>
                    <p style={{ lineHeight: 1.3 }}>
                      Supplier Name :<br></br> {myInventory?.supplierName}
                    </p>
                  </div>
                  <div className="cardBtn text-end">
                    <Button
                      variant="danger"
                      className="deleteBtn text-danger"
                      onClick={() => handleDelete(myInventory._id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
};
export default MyInventorys;

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
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
  );
};

export default ManageInventory;

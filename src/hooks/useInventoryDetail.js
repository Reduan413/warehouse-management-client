import axios from "axios";
import { useEffect, useState } from "react";

const useInventoryDetail = (inventoryId) => {
  const [inventory, setInvetory] = useState([]);
  useEffect(() => {
    
    fetchData();
  }, [inventoryId]);
  const fetchData = async () => {
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    await axios.get(url).then((res) => {
      setInvetory(res.data);
    });
  };
  return [inventory, setInvetory, fetchData];
};

export default useInventoryDetail;

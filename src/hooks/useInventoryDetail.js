import axios from "axios";
import { useEffect, useState } from "react";

const useInventoryDetail = (inventoryId) => {
  const [inventory, setInvetory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:5000/inventory/${inventoryId}`;
      await axios.get(url).then((res) => {
        setInvetory(res.data);
      });
    };
    fetchData();
  }, [inventoryId]);
  return [inventory, setInvetory];
};

export default useInventoryDetail;

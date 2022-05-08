import axios from "axios";
import { useEffect, useState } from "react";

const useInventoryDetail = (inventoryId) => {
  const [inventory, setInvetory] = useState([]);
  useEffect(() => {
    fetchData();
  }, [inventoryId]);
  const fetchData = async () => {
    const url = `https://morning-crag-28829.herokuapp.com/inventory/${inventoryId}`;
    await axios.get(url).then((res) => {
      setInvetory(res.data);
    });
  };
  return [inventory, setInvetory, fetchData];
};

export default useInventoryDetail;

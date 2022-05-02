import axios from "axios";
import { useEffect, useState } from "react";

const useInventorys = () => {
  const [inventorys, setInvetorys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:5000/inventory").then((res) => {
        setInvetorys(res.data);
      });
    };
    fetchData();
  }, []);

  return [inventorys, setInvetorys];
};

export default useInventorys;

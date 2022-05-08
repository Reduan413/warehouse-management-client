import axios from "axios";
import { useEffect, useState } from "react";

const useInventorys = () => {
  const [inventorys, setInvetorys] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://morning-crag-28829.herokuapp.com/inventory?page=${page}&size=${size}`;

      await axios.get(url).then((res) => {
        setInvetorys(res.data);
      });
    };
    fetchData();
  }, [page, size]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://morning-crag-28829.herokuapp.com/inventoryCount`)
        .then((res) => {
          const count = res.data.count;
          const pages = Math.ceil(count / 10);
          console.log(pages);
          setPageCount(pages);
        });
    };
    fetchData();
  }, []);

  return [inventorys, setInvetorys, pageCount, page, setPage, size];
};

export default useInventorys;

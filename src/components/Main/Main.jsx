import React, { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import { FiChevronsRight } from "react-icons/fi";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import SingleData from "./SingleData";
import GridData from "./GridData";

const Main = ({ active }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchData = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const limitData = fetchData.data.slice(0, 6);
      setData(limitData);
      console.log(limitData);
    };

    fetchData();
  }, []);
  return (
    <div className="main">
      {active ? (
        <div>
          {data.map((demoData) => (
            <SingleData demoData={demoData} />
          ))}
        </div>
      ) : (
        <div className="grid-container">
          {data.map((demoData) => (
            <GridData demoData={demoData} />
          ))}
        </div>
      )}
      <div className="pages-bar">
        <RiNumber1 />
        <RiNumber2 />
        <RiNumber3 />
        <FiChevronsRight />
      </div>
    </div>
  );
};

export default Main;

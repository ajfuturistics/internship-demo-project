import React, { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import { FiChevronsRight } from "react-icons/fi";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import SingleData from "./SingleData";
import GridData from "./GridData";
import Form from "../Sidebar/Form";

const Main = ({ active, activeContact }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const addData = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    let tempObj = [...data,{
      userId: id,
      id: id,
      title: title,
      body: body,
    },];
    setData(tempObj)
    console.log(tempObj);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchData = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const limitData = fetchData.data.slice(0, 6);
      setData(limitData);
      setLoading(false);
      console.log(limitData);
    };

    fetchData();
  }, []);
  return (
    <div className="main">
      {loading ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <div>
          <div>
            <form onSubmit={addData}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                placeholder="Enter title"
              />
              <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                name="body"
                placeholder="Enter description"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          {active ? (
            <div>
              {data.map((demoData) => (
                <SingleData demoData={demoData} setData={setData} data={data} />
              ))}
            </div>
          ) : (
            <div className="grid-container">
              {data.map((demoData) => (
                <GridData demoData={demoData} setData={setData} data={data} />
              ))}
            </div>
          )}
        </div>
      )}
      <div className="pages-bar">
        <RiNumber1 />
        <RiNumber2 />
        <RiNumber3 />
        <FiChevronsRight />
      </div>
      {activeContact && <Form />}
    </div>
  );
};

export default Main;

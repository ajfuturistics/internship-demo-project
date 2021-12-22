import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./main.css";

const GridData = ({ demoData, setData, data  }) => {
  const [disp, setDisp] = useState(false);
  const handleRemoveData = () => {
    let tempdataobj = data.filter((dat) => dat.id !== demoData.id);
    // console.log(tempdataobj);
    setData(tempdataobj);
  };

  return (
    <div className="" onClick={() => setDisp(!disp)}>
      <div key={demoData.id} className="grid-card mb-1">
        <div className="grid-div2" onClick={() => setDisp(!disp)}>
          <h2 className="">{demoData.title}</h2>
          <p className="">{demoData.body}</p>
          <p className="text-gray">Mon, 21 Dec 2020 14:57 GMT</p>
        </div>
        <div className="grid-div">
          <img
            className="grid-img"
            src="https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="card"
          />
        </div>
        <div className="icon-cross-grid">
          <AiOutlineCloseCircle size={32} onClick={handleRemoveData}/>
        </div>
      </div>
      {disp && (
        <div className="open-card">
          <div>{demoData.id}</div>
          <div>{demoData.title}</div>
          <div>{demoData.body}</div>
        </div>
      )}
    </div>
  );
};

export default GridData;

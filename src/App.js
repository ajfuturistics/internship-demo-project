import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Form from "./components/Sidebar/Form";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [active, setActive] = useState(true);
  const [activeContact, setActiveContact] = useState(false);
  console.log(active);
  return (
    <div className="App">
      <Sidebar
        active={active}
        setActive={setActive}
        activeContact={activeContact}
        setActiveContact={setActiveContact}
      />
      {activeContact && <Form />}
      <Main active={active} />
    </div>
  );
}

export default App;

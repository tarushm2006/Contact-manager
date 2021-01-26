import React, { useState } from "react";
import Header from "./Components/header.jsx";
import Create from "./Components/create.jsx";
import "./Components/styles.css";
export default function App() {
  const [list, setList] = useState([]);
  function add(data) {
    setList(list => [...list, data]);
  }
  const listStyle = {
    background: "dodgerBlue",
    padding: "10px",
    borderRadius: "5px",
    color:"white",
  };
  function remove(e){
    const index = e;
   setList(list.filter(item=>item!== index))
  }
  return (
    <div>
      <Header />
      <Create add={add} />
      <ul>
        {list.map((val, ind) => (
          <li key={ind} onClick={()=>{
            remove(val);
          }}>
           <span style={listStyle}>{val}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

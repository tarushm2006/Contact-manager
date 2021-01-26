import React,{ useState } from "react";
import Header from "./Components/header.jsx";
import Create from "./Components/create.jsx";
import Display from "./Components/display.jsx";

export default function App() {
  const [list,setList] = useState([]);
  function add(data){
  setList(...list,data);
  }
  return (
    <div>
      <Header />
      <Create add={add} />
      <Display data={list}/>
    </div>
  );
}

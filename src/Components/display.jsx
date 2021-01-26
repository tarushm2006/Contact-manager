import React from "react";
import "./styles.css";

function Display(props){
  const arr = props.data;
return(
  <ul>
  {arr.map((val,index)=>{
    <li key={index}>{val}</li>
  })}
  </ul>
)
}
export default Display;
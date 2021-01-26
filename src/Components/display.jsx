import React from "react";
import "./styles.css";

function Display(props){
return(
  <ul>
  {props.data.map((item)=>{
    <li>{item}</li>
  })}
  </ul>
)
}
export default Display;
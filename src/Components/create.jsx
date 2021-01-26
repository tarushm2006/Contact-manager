import React,{ useState } from "react";
import "./styles.css";
import { Input,Button } from "@material-ui/core";

function Create(props){
  const [data,setData] = useState("");
  return(
    <div className="create">
  <Input value={data} onChange={(e)=>{
    setData(e.target.value);
  }} /><br />
  <Button variant="contained" style={{background:"dodgerBlue",color:"white"}}onClick={()=>{props.add(data)}}>Add</Button>
  </div>
  )
}
export default Create;

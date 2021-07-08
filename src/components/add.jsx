import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

// The REST API endpoint
const API_URL = "https://jsonplaceholder.typicode.com/todos";

const Add=()=>{
  const [new_title,setTitle]=useState("");
  const [new_userid, setId]=useState("");
  const [data,setData]=useState([]);
  
  const handleSubmit=(new_title,new_userid)=>{
    setData([new_title,new_userid]);
    saveData(data);
    setTitle(""); setId("");
  }

  // Define the function that saves the data to the API
  const saveData = async (data) => {
    console.log(data);
    const request= {
      id: uuid(),
      data,
    } ;
    const response= await axios.post(API_URL, request);
    console.log(response);
  };
  
   return (
 <div style={{marginLeft: "10px"
}}>
  <br/>
  <div>
  <input type="text" 
    placeholder="Enter title" 
    value={new_title} 
    onChange={(e) => setTitle(e.target.value)}
    />
  </div>
  <div>
  <br/>
  <input type="text" 
    value={new_userid} 
    placeholder="Enter user ID" 
    onChange={(e) => setId(e.target.value)}/>
   </div>

    {/* {console.log("Input Data: " + new_userid + " " + new_title)} */}
  <div style={{marginLeft: "10px"}}>
    <br/>
    <Button onClick={() => handleSubmit(new_title,new_userid)} color="dark"> Add ToDo
    </Button>
  </div>
  <div style={{marginLeft: "10px", marginTop:"10px"}}>
    <Link to={`/`} color="warning"><strong>Back to To-Do List</strong>
    </Link>
  </div>
</div>
)
}

export default Add;
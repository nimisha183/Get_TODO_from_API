import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// The REST API endpoint
const API_URL = "https://jsonplaceholder.typicode.com/todos";

const Edit = () => {
  const { pathname } = useLocation();
  const todoId = parseInt(pathname.replace("/edit/", ""), 10);

  const [new_title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (new_title, todoId) => {
    setData([new_title]);
    SaveData(data, todoId);
    setTitle("");
  };

  // Define the function that saves the data to the API
  async function SaveData(data, todoId) {
    console.log(data);
    const request = {
      id: todoId,
      data
    };
    const response = await axios.put(API_URL, request);
    console.log(response, request.id);
  }

  return (
    <div style={{ marginLeft: "10px" }}>
      <br />
      <div>
        <input
          type="text"
          placeholder="Enter new title"
          value={new_title}
          onChange={(e) => setTitle(e.target.value)}
          onDoubleClick={() => handleSubmit(new_title, todoId)}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <br />
        <Button onClick={() => handleSubmit(new_title, todoId)} color="dark">
          {" "}
          Edit ToDo
        </Button>
      </div>
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <Link to={`/`} color="warning">
          <strong>Back to To-Do List</strong>
        </Link>
      </div>
    </div>
  );
};

export default Edit;

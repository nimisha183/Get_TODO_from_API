// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";
import {Button} from "reactstrap";

// The REST API endpoint
const API_URL = "https://jsonplaceholder.typicode.com/todos";

const ToDoList = () => {
  // At the beginning, posts is an empty array
  const [posts, setPosts] = useState([]);

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  const deleteTodo= async (id)=>{
const response= await axios.delete(`API_URL/${id}`);
console.log(response);
const newList=posts.filter((post)=>
{return post.id!==id;}
);
setPosts(newList);
  }

  return (
    <>
      <h1 style={{ maxWidth: "10rem", margin: "1rem auto" }}> To-Do List </h1>
      <div className="wrapper">
        {posts.length > 0 ? (
          <div className="content">
            {posts.map((post) => (post.id<6?( <>
                <div className="post">
                  <input type="checkbox" checked={post.completed} />
                  {post.title}
                  <p>{post.body}</p>
                  <Link
                    to={`/edit/${post.id}`}
                    color="warning"
                    className="btn btn-warning mr-1">
                    Edit
                  </Link>
                  <Button 
                  onClick={()=>deleteTodo(post.id)} 
                  color="danger" 
                  style={{marginLeft:"10px"}}
                  className="btn btn-danger mr-1">
                 Delete
               </Button>
                </div>
              </>) : null
             
            ))}
          </div>
        ) : (
          <p className="loading">Loading... </p>
        )}
      </div>
    </>
  );
};

export default ToDoList;

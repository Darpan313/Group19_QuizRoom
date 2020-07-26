/* Author: Deepkumar Dharmeshbhai Patel
Banner Id : B00845028*/
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Classrommlist from "./Classrommlist";
import CreateClass from "./Createclass";

export default function Classrooms() {
  
  const [roomlist, setRoomList] = useState([]);

  const addRoom = (data) => {
    setRoomList([...roomlist, data]);
  };
  useEffect(() => {
    axios.get('http://localhost:5000/class/getAllClass')
        .then(res => {
            setRoomList(res.data)
        })
        .catch(err => {
            console.log(err.message);
        })
}, []);

  

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <CreateClass addRoom={addRoom} />
      </div>
      <Classrommlist classroomList={roomlist} />
    </div>
  );
}

/* Author: Deepkumar Dharmeshbhai Patel
Banner Id : B00845028*/
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Classrommlist from "./StudentClassrommlist";
// import CreateClass from "./Createclass";

export default function StudentClassroom() {
  
  const [roomlist, setRoomList] = useState([]);

  const addRoom = (data) => {
    setRoomList([...roomlist, data]);
  };
  useEffect(() => {
    axios.get('https://web-service-g19-quiz-app.herokuapp.com/class/getAllClass')
        .then(res => {
            setRoomList(res.data)
        })
        .catch(err => {
            console.log(err.message);
        })
}, []);

  

  return (
    <div className="container pt-4 pb-4">
    <h3>Classrooms</h3>
      <Classrommlist classroomList={roomlist} />
    </div>
  );
}

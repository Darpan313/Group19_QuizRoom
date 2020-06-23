import React, { Component, useState } from "react";
import Classrommlist from "./Classrommlist";
import CreateClass from "./Createclass";

export default function Classrooms() {
  var classroomList = [
    {
      img: "web-course.png",
      code: "CSCI 5709",
      name: "Advance Web Services",
      status: "Active",
    },
    {
      img: "serverless-course.jpeg",
      code: "CSCI 5410",
      name: "Serverless Data Processing",
      status: "Active",
    },
    {
      img: "special-topic-course.jpg",
      code: "CSCI 5902",
      name: "Special topics in Applied CS",
      status: "Active",
    },
  ];

  const [roomlist, setRoomList] = useState(classroomList);

  const addRoom = (data) => {
    let temp = roomlist;
    setRoomList([...temp, data]);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <CreateClass addRoom={addRoom} />
      </div>
      <Classrommlist classroomList={roomlist} />
    </div>
  );
}

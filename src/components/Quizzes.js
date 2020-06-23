import React, { Component, useState } from "react";
import QuizList from "./QuizList";
import CreateClass from "./Createclass";
import { Button } from "react-bootstrap";

export default function Quizzes() {
  var quizList = [
    {
      img: "web-course.png",
      code: "CSCI 5709",
      name: "Advance Web Services",
      status: "Active",
      time: "30 mins",
      weightage: "10%",
      due: "2020-06-30",
      marks: "20/30",
      grade: "A",
    },
    {
      img: "serverless-course.jpeg",
      code: "CSCI 5410",
      name: "Serverless Data Processing",
      status: "Active",
      time: "30 mins",
      weightage: "5%",
      due: "2020-07-30",
      marks: "25/30",
      grade: "A+",
    },
    {
      img: "special-topic-course.jpg",
      code: "CSCI 5902",
      name: "Special topics in Applied CS",
      status: "Active",
      time: "30 mins",
      weightage: "2%",
      due: "2020-06-29",
      marks: "5/10",
      grade: "B",
    },
  ];

  const [roomlist, setRoomList] = useState(quizList);

  const addRoom = (data) => {
    let temp = roomlist;
    setRoomList([...temp, data]);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center my-3">
        {/* <Button className="justify-content-left  m-3">Analyse</Button> */}
        <Button variant="primary"
              className="mt-3"
              href="/createquiz"
              target="_blank">Create Quiz</Button>
      </div>
      {/* <CreateClass addRoom={addRoom}/> */}
      <QuizList quizList={roomlist} />
    </div>
  );
}

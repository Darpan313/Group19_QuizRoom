import React from "react";
import img1 from "../assets/web-course.png";
import ClassroomCard from "./ClassroomCard";

export default function Classrommlist(props) {
  return (
    <>
      <section>
        <h3>2020-Summer</h3>
        <div className="row">
          <hr />
          {props.classroomList.map((room, index) => {
            return (
              <div className="col-md-3 mt-3" key={index}>
                <ClassroomCard
                  img={room.img}
                  code={room.code}
                  name={room.name}
                  status={room.status}
                />
              </div>
            );
          })}
        </div>
      </section>
      <hr></hr>
      <h3>2020 - Spring</h3>
      <div className="row">
        <div className="col-md-3 mt-3">
          <ClassroomCard
            img="special-topic-course.jpg"
            code="CSCI 5902"
            name="Special topics in Applied CS"
            status="Closed"
          />
        </div>
        <div className="col-md-3 mt-3">
          <ClassroomCard
            img="special-topic-course.jpg"
            code="CSCI 5902"
            name="Special topics in Applied CS"
            status="Closed"
          />
        </div>
        <div className="col-md-3 mt-3">
          <ClassroomCard
            img="special-topic-course.jpg"
            code="CSCI 5902"
            name="Special topics in Applied CS"
            status="Closed"
          />
        </div>
        <div className="col-md-3 mt-3">
          <ClassroomCard
            img="special-topic-course.jpg"
            code="CSCI 5902"
            name="Special topics in Applied CS"
            status="Closed"
          />
        </div>
        <div className="col-md-3 mt-3">
          <ClassroomCard
            img="web-course.png"
            code="CSCI 5709"
            name="Advance Web Services"
            status="Closed"
          />
        </div>
      </div>
    </>
  );
}

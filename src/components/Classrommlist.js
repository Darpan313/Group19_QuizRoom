import React from "react";
import img1 from "../assets/web-course.png";
import ClassroomCard from "./ClassroomCard";

export default function Classrommlist() {
  return (
    <>
      <section>
        <h3>2020-Summer</h3>
        <div className="row">
          <div className="col-md-3 mt-3">
            <ClassroomCard
              img="web-course.png"
              code="CSCI 5709"
              name="Advance Web Services"
              status="Active"
            />
          </div>
          <div className="col-md-3 mt-3">
            <ClassroomCard
              img="serverless-course.jpeg"
              code="CSCI 5410"
              name="Serverless Data Processing"
              status="Active"
            />
          </div>
          <div className="col-md-3 mt-3">
            <ClassroomCard
              img="special-topic-course.jpg"
              code="CSCI 5902"
              name="Special topics in Applied CS"
              status="Active"
            />
          </div>
          <div className="col-md-3 mt-3">
            <ClassroomCard
              img="special-topic-course.jpg"
              code="CSCI 5902"
              name="Special topics in Applied CS"
              status="Active"
            />
          </div>
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

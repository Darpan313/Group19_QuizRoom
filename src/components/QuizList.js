import React from "react";
import img1 from "../assets/web-course.png";
import QuizCard from "./QuizCard";

export default function QuizList(props) {
  return (
    <>
      <section>
        <h3>2020-Summer</h3>
        <div className="row">
          <hr />
          {props.quizList.map((quiz, index) => {
            return (
              <div className="col-md-3 mt-3" key={index}>
                <QuizCard
                  img={quiz.img}
                  code={quiz.code}
                  name={quiz.name}
                  status={quiz.status}
                  due={quiz.due}
                  weightage={quiz.weightage}
                  time={quiz.time}
                  grade={quiz.grade}
                  marks={quiz.marks}
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
          <QuizCard
            img="special-topic-course.jpg"
            code="CSCI 5902"
            name="Special topics in Applied CS"
            status="Closed"
            marks="20/30"
            grade="A"          />
        </div>
        <div className="col-md-3 mt-3">
          <QuizCard
            img="special-topic-course.jpg"
            code="CSCI 5902"
            name="Special topics in Applied CS"
            status="Closed"
            marks="25/30"
            grade="A+"            />
        </div>
        <div className="col-md-3 mt-3">
          <QuizCard
            img="special-topic-course.jpg"
            code="CSCI 5902"
            name="Special topics in Applied CS"
            status="Closed"
            marks="5/10"
            grade="B"          />
        </div>
        <div className="col-md-3 mt-3">
          <QuizCard
            img="special-topic-course.jpg"
            code="CSCI 5902"
            name="Special topics in Applied CS"
            status="Closed"
            marks="5/10"
            grade="B"            />
        </div>
        <div className="col-md-3 mt-3">
          <QuizCard
            img="web-course.png"
            code="CSCI 5709"
            name="Advance Web Services"
            status="Closed"
            marks="5/10"
            grade="B"  
          />
        </div>
      </div>
    </>
  );
}

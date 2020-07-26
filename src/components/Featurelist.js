import React from "react";
import img1 from "../assets/web-course.png";
import FeatureCard from "./FeatureCard";

export default function Classrommlist() {
  return (
    <>
      <section className="container">
        <h2 className=" row justify-content-md-center mt-3">Features</h2>
        <div className="row justify-content-md-center">
          <div className="col-md-3 mt-3 mx-5">
            <FeatureCard img="create.png" title="Create" status="">
              Create Quizzes of your choice and test your students or juniors!
            </FeatureCard>
          </div>
          <div className="col-md-3 mt-3 mx-5">
            <FeatureCard img="publish.jpg" title="Publish" status="">
              Publish the created quizzes and make them available to your students!
            </FeatureCard>
          </div>
          <div className="col-md-3 mt-3 mx-5">
            <FeatureCard img="analyze.jpg" title="Analyze" status="">
              Analyze the quizzes and arrive at better conclusions! 
            </FeatureCard>
          </div>
        </div>
      </section>
    </>
  );
}

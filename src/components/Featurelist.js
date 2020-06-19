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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio excepturi nisi laudantium reprehenderit explicabo, eius
              quas
            </FeatureCard>
          </div>
          <div className="col-md-3 mt-3 mx-5">
            <FeatureCard img="publish.jpg" title="Publish" status="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit obcaecati aliquid culpa, accusamus exercitationem
              exceptu
            </FeatureCard>
          </div>
          <div className="col-md-3 mt-3 mx-5">
            <FeatureCard img="analyze.jpg" title="Analyze" status="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              aspernatur dolore odit error corrupti assumenda explicabo adipisci
              autem
            </FeatureCard>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import { Button } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";
export default function Hero() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="hero">
      <div className="banner container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <h2>
                The Best QuizMaker for<br></br> Education and Business.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus tempore deserunt itaque libero, veniam ut sapiente
                exercitationem adipisci dolorum consequuntur voluptate magnam
                quia assumenda asperiores doloribus officiis quae aliquid
                debitis?
              </p>
            </div>
            <div className="row my-3">
              <Register />
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}

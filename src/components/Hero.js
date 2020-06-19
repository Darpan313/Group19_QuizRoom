import React from "react";
import { Button } from "react-bootstrap";
import Register from "./Register";
export default function Hero() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="hero">
      <div className="banner">
        <h2>
          The Best QuizMaker for<br></br> Education and Business.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          tempore deserunt itaque libero, veniam ut sapiente exercitationem
          adipisci dolorum consequuntur voluptate magnam quia assumenda
          asperiores doloribus officiis quae aliquid debitis?
        </p>
        <Register />
      </div>
    </div>
  );
}

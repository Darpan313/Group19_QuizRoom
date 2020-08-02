/* Author: Deepkumar Dharmeshbhai Patel
Banner Id : B00845028*/
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import EditClassroom from "./EditClassroom";


export default function ClassroomCard(props) {
  const { img, name, code, children, status }  = props
  var url = require(`../assets/${img}`);
  
  const [showHide, setShowHide] = useState(false);

  const deleteClass = () => {
    let userObject = {
        className: name,
      }
      axios.post('https://web-service-g19-quiz-app.herokuapp.com/class/deleteClass', userObject)
      .then((res) => {
          window.location.reload(false);
      }).catch((error) => {
          console.log(error)
      });
  }
    return (
      status === "Active" ? (
      <div className="classes">
        <Card border="success">
          <Card.Img
            variant="top"
            src={url}
            height="150vh"
            className="card-img-top"
          />
          <Card.Body>
            <Card.Title>{code}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <Link to="/quizzes">
            <Button variant="primary">Open</Button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <div className="row">
              <div className="col-auto mr-auto">
                <small className="text-muted">{status}</small>
              </div>
              <div className=" row col-auto">
                <div className="column mr-3">
                  <a href="#" onClick={() => setShowHide(!showHide)} style={{ color: "black" }}>
                    <FaRegEdit />
                  </a>
                </div>
                <div className="column mr-2">
                  <a href="#" onClick={deleteClass} style={{ color: "red" }}>
                    <FaRegTrashAlt />
                  </a>
                </div>
              </div>
            </div>
          </Card.Footer>
        </Card>
        {
          showHide && <EditClassroom name={name} showHide={showHide} setShowHide={setShowHide}/>
        }
      </div>
    ) : (
      <div className="classes">
        <Card border="danger">
          <Card.Img
            variant="top"
            src={url}
            height="150vh"
            className="card-img-top"
          />
          <Card.Body>
            <Card.Title>{code}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <div className="pt-3 pb-4"></div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{status}</small>
          </Card.Footer>
        </Card>
      </div>
    )
    )  
}

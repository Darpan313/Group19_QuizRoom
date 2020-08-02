import { Card, Button, ListGroup } from "react-bootstrap";
import { FaRegEdit, FaRegTrashAlt, FaRegClock } from "react-icons/fa";

import Dashboard from "../components/Dashboard";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import React from "react";

export default function QuizCard({
  quiz_id,
  img,
  name,
  code,
  children,
  status,
  time,
  weightage,
  due,
  marks,
  grade,
}) {
  const history = useHistory();
  var url = require(`../assets/${img}`);
  if (status === "Active") {
    return (
      <div className="classes">
        <Card border="success">
          <Card.Body>
            <Card.Title>{code}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <ListGroup>
              <ListGroup.Item>Time : {time}</ListGroup.Item>
              <ListGroup.Item>Weightage : {weightage}</ListGroup.Item>
              <ListGroup.Item>Due : {due}</ListGroup.Item>
              <ListGroup.Item>
                <FaRegClock />
              </ListGroup.Item>
            </ListGroup>
            <Button
              variant="primary"
              className="mt-3"
              href="/startquiz"
              target="_blank"
            >
              {/* <a
                href="/startquiz"
                target="_blank"
                without
                rel="noopener noreferrer"
              > */}
              Open
              {/* </a> */}
            </Button>
          </Card.Body>
          <Card.Footer>
            <div className="row">
              <div className="col-auto mr-auto">
                <small className="text-muted">{status}</small>
              </div>
              <div className=" row col-auto">
                <div className="column mr-3">
                  <a href="#" style={{ color: "black" }}>
                    <FaRegEdit />
                  </a>
                </div>
                <div className="column mr-2">
                  <a href="#" style={{ color: "red" }}>
                    <FaRegTrashAlt />
                  </a>
                </div>
              </div>
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
  } else {
    function handleQuizSubmit(quiz_id) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: quiz_id.quiz_id,
        }),
      };

      fetch("http://localhost:5000/getDataForViz", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          history.push("/analytics", data);
        });
      // history.push("/analytics", quiz_id);
    }
    return (
      <div className="classes">
        <Card border="danger">
          <Card.Body>
            <Card.Title>{code}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item> Marks : {marks}</ListGroup.Item>
              <ListGroup.Item> Grade : {grade}</ListGroup.Item>
            </ListGroup>
            <Button
              variant="primary"
              className="mt-3"
              onClick={() => handleQuizSubmit({ quiz_id })}
            >
              Analyze
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{status}</small>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

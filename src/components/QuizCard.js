import { Card, Button, ListGroup } from "react-bootstrap";

import Dashboard from "../components/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import React from "react";

export default function QuizCard({
  img,
  name,
  code,
  children,
  status,
  time,
  weightage,
  due,
  marks,
  grade
}) {
  var url = require(`../assets/${img}`);

  if (status === "Active") {
    return (
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
            <ListGroup>
              <ListGroup.Item>Time : {time}</ListGroup.Item>
              <ListGroup.Item>Weightage : {weightage}</ListGroup.Item>
              <ListGroup.Item>Due : {due}</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" >
              <a href="/startquiz" target="_blank" without rel="noopener noreferrer">Open</a>
            </Button>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{status}</small>
          </Card.Footer>
        </Card>
      </div>
    );
  } else {
    return (
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
            <ListGroup variant="flush">
            <ListGroup.Item> Marks : {marks}</ListGroup.Item>
            <ListGroup.Item> Grade : {grade}</ListGroup.Item>

            </ListGroup>
            <Button variant="primary">Open</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{status}</small>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

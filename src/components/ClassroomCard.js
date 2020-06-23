import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React from "react";

export default function ClassroomCard({ img, name, code, children, status }) {
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
            <Link to="/viewclass">
            <Button variant="primary">Open</Button>
            </Link>
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

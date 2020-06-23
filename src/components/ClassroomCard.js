import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

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

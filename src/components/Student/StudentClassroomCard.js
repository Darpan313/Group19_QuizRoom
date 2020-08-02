/* Author: Deepkumar Dharmeshbhai Patel
Banner Id : B00845028*/
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React  from "react";


export default function ClassroomCard(props) {
  const { img, name, code, children, status }  = props
  var url = require(`../../assets/${img}`);

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
            </div>
          </Card.Footer>
        </Card>
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

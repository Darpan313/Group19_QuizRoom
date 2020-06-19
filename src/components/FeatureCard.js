import { Card, Button } from "react-bootstrap";

import React from "react";

export default function FeatureCard({ img, title, children, status }) {
  var url = require(`../assets/${img}`);
  return (
    <div className="classes">
      <Card>
        <Card.Img
          variant="top"
          src={url}
          height="170vh"
          className="card-img-top"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{children}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{status}</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

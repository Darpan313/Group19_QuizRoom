import React from "react";
import { Card } from "react-bootstrap";

export default function ResultList({ data }) {
  const ResultListItem = (props) => {
    return (
      <Card className="mx-3 my-2" style={{ width: "100%" }}>
        <Card.Body>
          <div className="row mb-2">
            <strong className="col">
              Question: {props.question.questionText}
            </strong>
          </div>
          <div className="row">
            <p className="col" style={{ color: "green" }}>
              Correct: {props.question.Correct}
            </p>
            <p className="col" style={{ color: "red" }}>
              Incorrect: {props.question.Incorrect}
            </p>
          </div>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <h4 className="ml-3 mt-2">Results</h4>
      <div style={{ overflowY: "auto", overflowX: "hidden", height: "600px" }}>
        <ul style={{ listStyleType: "none" }}>
          {data.map((question) => {
            return <ResultListItem question={question} />;
          })}
        </ul>
      </div>
    </>
  );
}

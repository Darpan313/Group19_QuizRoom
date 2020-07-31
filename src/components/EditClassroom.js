/* Author: Deepkumar Dharmeshbhai Patel
Banner Id : B00845028*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form, FormText, Alert } from "react-bootstrap";

const initialData = {
  Classname: "",
  Code: "",
  Description: "",
  Term: "",
  End_date: "",
};

const initialErrors = {
  codeError: false,
  descriptionError: false,
};

export default function EditClassroom({ name, showHide, setShowHide }) {
  const [classDetails, setClassDetails] = useState(initialData);
  const [erroClass, setErrorClass] = useState(initialErrors);

  useEffect(() => {
    axios
      .post(
        "https://web-service-g19-quiz-app.herokuapp.com/class/getClass",
        { className: name },
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((res) => {
        setClassDetails({ ...res.data[0] });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    setErrorClass({
      ...erroClass,
      codeError: classDetails.Code === "",
      descriptionError: classDetails.Description === "",
    });
  }, [classDetails]);

  const handleClick = () => {
    console.log("HI");
    axios
      .put("https://web-service-g19-quiz-app.herokuapp.com/class/updateClass", classDetails)
      .then((res) => {
        setClassDetails(initialData);
        setShowHide(!showHide);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Modal show={showHide}>
      <Modal.Header closeButton onClick={() => setShowHide(!showHide)}>
        <Modal.Title>Edit Classroom</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label>Class name</label>
          <input
            type="text"
            name="classname"
            className="form-control"
            required
            disabled
            value={classDetails.Classname}
          />
        </div>
        <div className="form-group">
          <label>Class Code</label>
          <input
            type="text"
            name="classcode"
            className="form-control"
            required
            value={classDetails.Code}
            placeholder="Class code"
            onChange={(e) => {
              console.log("code", typeof e.target.value);
              setClassDetails({ ...classDetails, Code: e.target.value });
            }}
          />
          <Form.Text hidden={!erroClass.codeError} style={{ color: "red" }}>
            Class Code Field is required.
          </Form.Text>
        </div>

        <div className="form-group">
          <label>Class Description</label>
          <input
            type="text"
            name="classdescription"
            className="form-control"
            required
            value={classDetails.Description}
            placeholder="Class description"
            onChange={(e) =>
              setClassDetails({ ...classDetails, Description: e.target.value })
            }
          />
          <Form.Text
            hidden={!erroClass.descriptionError}
            style={{ color: "red" }}
          >
            Class Description Field is required.
          </Form.Text>
        </div>

        <Form.Group>
          <Form.Label>Select Term</Form.Label>
          <Form.Control
            as="select"
            name="term"
            value={classDetails.Term}
            onChange={(e) =>
              setClassDetails({ ...classDetails, Term: e.target.value })
            }
          >
            <option hidden>Select Term</option>
            <option value="Summer 2020">Summer 2020</option>
            <option value="Fall 2020">Fall 2020</option>
            <option value="Winter 2021">Winter 2021</option>
          </Form.Control>
        </Form.Group>

        <div className="form-group">
          <label>Select End Date: </label>
          <br />
          <input
            type="date"
            id="endDate"
            name="enddate"
            value={classDetails.End_date}
            onChange={(e) =>
              setClassDetails({ ...classDetails, End_date: e.target.value })
            }
            required
          ></input>
        </div>

        <button
          className="btn btn-primary btn-block mt-3"
          disabled={(erroClass.codeError || erroClass.descriptionError)}
          onClick={() => handleClick()}
        >
          Update Classroom
        </button>

        <br />
      </Modal.Body>
    </Modal>
  );
}

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
  Student: "",
  addStudent: "",
};

const initialErrors = {
  studentbutton: false,
  studentError: false,
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
      .catch((err) => {});
  }, []);

  useEffect(() => {
    setErrorClass({
      ...erroClass,
      codeError: classDetails.Code === "",
      descriptionError: classDetails.Description === "",
    });
  }, [classDetails]);

  const validation = (value) => {
    let stud = [];
    if (value === "") {
      setErrorClass({
        ...erroClass,
        studentError: false,
        studentbutton: false,
      });
    } else {
      let array = value.split(",");
      let flag = 0;
      for (var i = 0; i < array.length; i++) {
        if (
          !/^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$/.test(array[i].trim())
        ) {
          flag = 1;
          break;
        } else {
          stud.push(array[i].trim());
        }
      }
      if (flag === 1) {
        setErrorClass({
          ...erroClass,
          studentError: true,
          studentbutton: false,
        });
      } else {
        setClassDetails({ ...classDetails, addStudent: stud });
        setErrorClass({
          ...erroClass,
          studentError: false,
          studentbutton: true,
        });
      }
    }
  };

  const handleStudentClick = () => {
    axios
      .put(
        "https://web-service-g19-quiz-app.herokuapp.com/class/addStudent",
        classDetails
      )
      .then((res) => {
        setClassDetails({ ...classDetails, Student: "" });
      })
      .catch((error) => {});
  };

  const handleClick = () => {
    axios
      .put(
        "https://web-service-g19-quiz-app.herokuapp.com/class/updateClass",
        classDetails
      )
      .then((res) => {
        setClassDetails(initialData);
        setShowHide(!showHide);
        window.location.reload(false);
      })
      .catch((error) => {});
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

        <div className="form-group mb-0">
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

        <label>Add new Students</label>
        <div className="form-group input-group mb-2">
          <input
            type="text"
            name="students"
            className="form-control"
            value={classDetails.Student}
            placeholder="Enter Student email"
            aria-describedby="basic-addon2"
            onChange={(e) => validation(e.target.value)}
          />
          <button
            className="btn btn-primary btn-outline-secondary"
            variant="primary"
            disabled={!erroClass.studentbutton}
            onClick={() => handleStudentClick()}
          >
            Add Students
          </button>
        </div>
        <Form.Text hidden={erroClass.studentError} muted>
          Add more than one email comma seprated!!
        </Form.Text>
        <Form.Text hidden={!erroClass.studentError} style={{ color: "red" }}>
          Enter valid emails with comma seprated!!
        </Form.Text>

        <button
          className="btn btn-primary btn-block mt-3"
          disabled={erroClass.codeError || erroClass.descriptionError}
          onClick={() => handleClick()}
        >
          Update Classroom
        </button>

        <br />
      </Modal.Body>
    </Modal>
  );
}

/* Author: Deepkumar Dharmeshbhai Patel
Banner Id : B00845028*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form, FormText, Alert } from "react-bootstrap";

const initialData = {
  Classname: "",
  Students: ""  
};

const initialErrors = {
  emailError: false,
 };

export default function AddStudent({ name, showHide, setShowHide }) {
  const [classDetails, setClassDetails] = useState(initialData);
  const [erroClass, setErrorClass] = useState(initialErrors);

  useEffect(() => {
    axios
      .put(
        "http://localhost:5000/class/addStudent",
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
      .put("http://localhost:5000/class/updateClass", classDetails)
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
        <Modal.Title>Add Students</Modal.Title>
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
          <label>Add Students</label>
          <input
            type="text"
            name="students"
            className="form-control"
            required
            value={classDetails.Code}
            placeholder="Student Email"
            onChange={(e) => {
              console.log("code", typeof e.target.value);
              setClassDetails({ ...classDetails, Code: e.target.value });
            }}
          />
            <Form.Text style={{ color: "red" }} muted>
                Enter multiple emails comma seprated!!
            </Form.Text>
          <Form.Text hidden={!erroClass.codeError} style={{ color: "red" }}>
            At least add one student!
          </Form.Text>
        </div>

        
        <button
          className="btn btn-primary btn-block mt-3"
          disabled={(erroClass.codeError || erroClass.descriptionError)}
          onClick={() => handleClick()}
        >
          Add Students
        </button>

        <br />
      </Modal.Body>
    </Modal>
  );
}

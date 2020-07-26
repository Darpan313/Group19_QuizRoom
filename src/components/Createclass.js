/* Author: Deepkumar Dharmeshbhai Patel
Banner Id : B00845028*/
import React from "react";
import axios from 'axios';
import { Button, Modal, Form } from "react-bootstrap";
import { FormErrors } from "./FormErrors";

class Createclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHide: false,
      classname: "",
      classcode:"",
      classdescription:"",
      term: "",
      enddate:"",
      filetype: "",
      formErrors: { classname: "", filetype: "" },
      classnameValid: false,
      filetypeValid: false,
      formValid: false,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
    
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let classnameValid = this.state.classnameValid;
    let filetypeValid = this.state.filetypeValid;
    switch (fieldName) {
      case "classname":
        classnameValid = value.trim().length > 0;
        fieldValidationErrors.classname = classnameValid ? "" : " required";
        break;
      case "filetype":
        filetypeValid = value.endsWith(".csv");
        fieldValidationErrors.filetype = filetypeValid ? "" : " not allowed";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        classnameValid: classnameValid,
        filetypeValid: filetypeValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.classnameValid && this.state.filetypeValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  onFileChange= (e) => {    
    let filename= e.target.files[0].name
    let file= e.target.files[0]
    this.setState({filetype:file});
    this.validateField('filetype',filename );
  };
  handleClick() {
    const userObject = {
      className: this.state.classname,
      code: this.state.classcode,
      description: this.state.classdescription,
      endDate: this.state.enddate,
      insId: "101",
      term: this.state.term
    };
    let formData = new FormData();
    formData.append("Student",this.state.filetype)
    formData.append("data", JSON.stringify(userObject))
    axios.post('http://localhost:5000/class/createClass', formData,
      )
    .then((res) => {
      window.location.reload(false);
    }).catch((error) => {
        console.log(error)

    });
  }

  setMinDate(){
    let today = new Date(),
      day = today.getDate(),
      month = today.getMonth()+1, 
      year = today.getFullYear();
           if(day<10){
                  day='0'+day
              } 
          if(month<10){
              month='0'+month
          }
          today = year+'-'+month+'-'+day;
    return today
  }

  render() {
    return (
      <div className="pt-3 pb-3">
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Create Class
        </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Create Classroom</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group ${this.errorClass(this.state.formErrors.classname)}">
              <label>Class name</label>
              <input
                type="text"
                name="classname"
                className="form-control"
                required
                value={this.state.classname}
                placeholder="Class name"
                onChange={this.handleUserInput}
              />
            </div>
            <div className="form-group ${this.errorClass(this.state.formErrors.classname)}">
              <label>Class Code</label>
              <input
                type="text"
                name="classcode"
                className="form-control"
                required
                value={this.state.classcode}
                placeholder="Class code"
                onChange={this.handleUserInput}
              />
            </div>

            <div className="form-group ${this.errorClass(this.state.formErrors.classname)}">
              <label>Class Description</label>
              <input
                type="text"
                name="classdescription"
                className="form-control"
                required
                value={this.state.classdescription}
                placeholder="Class description"
                onChange={this.handleUserInput}
              />
            </div>
            <Form.Group>
              <Form.Label>Select Term</Form.Label>
              <Form.Control
                as="select"
                name="term"
                value={this.state.term}
                onChange={this.handleUserInput}
              >
                <option hidden>Select Term</option>
                <option value="Summer 2020">Summer 2020</option>
                <option value="Fall 2020">Fall 2020</option>
                <option value="Winter 2021">Winter 2021</option>
              </Form.Control>
            </Form.Group>
            
            <div className="form-group ${this.errorClass(this.state.formErrors.classname)}">
            <label>Select End Date: </label><br />
            <input type="date" id="endDate" name="enddate"  min={this.setMinDate()} required onChange={this.handleUserInput}></input>
            </div>
            
            <div className="form-group ${this.errorClass(this.state.formErrors.classname)}">
              <label>Add Student using Excel file</label>
              <input
                type="file"
                name="filetype"
                required
                onChange={this.onFileChange}
              />
              <Form.Text id="fileHelpBlock" muted>
                Must be .CSV file.
              </Form.Text>
            </div>

            <FormErrors formErrors={this.state.formErrors} />

            <button
              className="btn btn-primary btn-block mt-3"
              disabled={!this.state.formValid}
              onClick={() => {
                this.handleClick();
                this.handleModalShowHide();
                this.setState({
                  classname: "",
                  classcode:"",
                  classdescription:"",
                  term: "",
                  enddate: "",
                  filetype: "",
                  formErrors: { classname: "", filetype: "" },
                });
              }}
            >
              Create Classroom
            </button>
            <br></br>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Createclass;

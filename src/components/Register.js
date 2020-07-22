import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FormErrors } from "./FormErrors";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHide: false,
      firstName: "",
      lastName: "",
      role : "",
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
    this.handleUserInput = this.handleUserInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  handleUserInput = (e) => {
    debugger;
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case "email":
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        emailValid = re.test(value);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value })
    
  // }
  onSubmit(e) {
    debugger;
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        role:this.state.role,
        email: this.state.email,
        password: this.state.password
      })
    };
    console.log('request ');
    console.log(requestOptions);
    fetch('http://localhost:5000/user/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.data === "success") {
          console.log(data.data)
          // this.props.history.push({
          //   pathname: '/welcome',
          //   search: '?user:' + this.state.email,
          //   state: { email: this.state.email }
          // })

        }
      })

  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Register
        </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleUserInput}
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Last name"
                  value={this.state.lastName}
                  onChange={this.handleUserInput}
                />
              </div>
              <Form.Group>
                <Form.Label>Select Role</Form.Label>
                <Form.Control as="select" name="role" value={this.state.role} onChange={this.handleUserInput}>
                  <option>Select Option</option>
                  <option>Student</option>
                  <option>Manager</option>
                </Form.Control>
              </Form.Group>

              <div className="form-group ${this.errorClass(this.state.formErrors.email)}">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleUserInput}
                />
              </div>

              <div className="form-group ${this.errorClass(this.state.formErrors.password)}">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handleUserInput}
                />
                <Form.Text id="passwordHelpBlock" muted>
                  Must be 8-20 characters long.
                </Form.Text>
              </div>
              <FormErrors formErrors={this.state.formErrors} />

              <button
                type="submit"
                className="btn btn-primary btn-block mt-3"
                disabled={!this.state.formValid}
              >
                Sign Up
              </button>
              <br></br>
              <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
              </p>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Register;

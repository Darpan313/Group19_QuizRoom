import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FormErrors } from "./FormErrors";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHide: false,
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
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
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case "email":
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        emailValid = re.test(value);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        console.log(emailValid);
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

  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Register Free
        </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group ${this.errorClass(this.state.formErrors.email)}">
                <label>Email address</label>
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
              </div>
              <FormErrors formErrors={this.state.formErrors} />

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={!this.state.formValid}
              >
                Sign Up
              </button>

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

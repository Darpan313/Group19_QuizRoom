import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import loginUser from "./LoginUser";
import { UserContext } from "../context/user";
import { FormErrors } from "./FormErrors";
export default function Login() {
  const history = useHistory();
  const { userLogin } = React.useContext(UserContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [modalDisplay, setModalDisplay] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({
    email: "",
    password: "",
  });
  const [formValid, setFormValid] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(false);

  const handleShow = () => {
    setModalDisplay(true);
  };
  const handleHide = () => {
    setModalDisplay(false);
  };
  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "email") {
      setEmail(value);
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setEmailValid(re.test(value));
      formErrors.email = emailValid ? "" : " is invalid";
    } else if (name == "password") {
      setPassword(value);
      if (value.length >= 6) {
        setPasswordValid(true);
      } else {
        setPasswordValid(false);
      }
      formErrors.password = passwordValid ? "" : " is too short";
    }
    setFormValid(emailValid && passwordValid);
  };
  const handleLogin = async (e) => {
    let response = await loginUser({ email, password });
    if (response) {
      const { jwt: token, username: username } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      history.push("/dashboard");
    } else {
      alert("Error!");
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <Modal show={modalDisplay}>
        <Modal.Header closeButton onClick={handleHide}>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Form.Group>
              <Form.Label>Select Role</Form.Label>
              <Form.Control as="select">
                <option>Student</option>
                <option>Manager</option>
              </Form.Control>
            </Form.Group>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
                placeholder="Enter email"
                value={email}
                onChange={(e) => handleUserInput(e)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => handleUserInput(e)}
              />
              <Form.Text id="passwordHelpBlock" muted>
                Must be 8-20 characters long.
              </Form.Text>
            </div>
            <FormErrors formErrors={formErrors} />

            <button
              type="submit"
              className="btn btn-primary btn-block mt-3"
              disabled={!formValid}
              onClick={handleLogin}
            >
              Login
            </button>
            <br></br>
            <div className="row">
              <div className="col-auto mr-auto">
                <p className="forgot-password text-right">
                  <a href="#">forgot password?</a>
                </p>
              </div>
              <div className="col-auto">
                <p className="forgot-password text-left">
                  Not registered <a href="#">sign up?</a>
                </p>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
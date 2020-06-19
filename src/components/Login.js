import React, { useEffect } from "react";
import loginUser from "./LoginUser";
import { UserContext } from "../context/user";
import {
  Form,
  FormCheck,
  Button,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const { userLogin } = React.useContext(UserContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let isEmpty = !email || !password;
  const handleLogin = async (e) => {
    if (!isEmpty) {
      let response = await loginUser({ email, password });
      if (response) {
        const { jwt: token, username: username } = response.data;
        const newUser = { token, username };
        userLogin(newUser);
        history.push("/dashboard");
      } else {
        alert("Error!");
      }
    } else {
      alert("Please fill all fields!");
    }
  };
  return (
    <Form>
      <Form.Row className="align-items-center">
        <Col sm={3.5} className="my-0">
          <Form.Label htmlFor="inlineFormInputName" srOnly>
            Name
          </Form.Label>
          <Form.Control
            id="inlineFormInputName"
            placeholder="Email-id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
        <Col sm={3.5} className="my-0">
          <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
            Password
          </Form.Label>
          <FormControl
            id="inlineFormInputGroupUsername"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
